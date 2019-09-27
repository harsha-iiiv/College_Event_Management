const express = require('express');
router = express.Router();
const User = require('../../models/user');
const Evenetregistration = require('../../models/event_reg');
const {registrationValidate,loginValidate} = require('../../validation/user_validate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
router.post('/register', async (req, res) => {


   //Validate registration 
  const {error} = registrationValidate(req.body);
  if(error) return res.json(error);


   //Duplicate Email checks here 
  const email_exists = await User.findOne({email: req.body.email})
  if(email_exists) return res.status(400).send("email already exists");
     
   //Hashing password for
   
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt)
 
   
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashpassword
  });
try {
    const savedUser = await user.save();
    res.json(savedUser);
} catch (err) {
    res.status(400).send(err)
    
}


})



router.post('/login', async (req, res) => {


   //Validate login
  const {error} = loginValidate(req.body);
  if(error) return res.json(error);


   // Email checking here 

   try {
     const user = await User.findOne({ email: req.body.email });
     if (!user) return res.status(400).send("email is not found");

     //Password validation
     const valid_password = await bcrypt.compare(
       req.body.password,
       user.password
     );
     if (!valid_password) return res.status(400).send("password is not valid");

     // create and assign a token here

     const token = jwt.sign(
       { _id: user._id },
       process.env.ACCESS_TOKEN_SECRET,
       (err, token) => {
         if (err) throw err;
          res.header("auto-token", token).send(token);
       }
     );
    
   } catch (error) {
     console.error(err.message);
     res.status(500).send("Server error");
   }

  

//   res.send("Logged in successfully");



})

module.exports = router;
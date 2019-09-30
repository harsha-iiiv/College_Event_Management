const express = require('express');
router = express.Router();
const User = require('../../models/admin');
const {loginValidate_admin} = require('../../validation/user_validate');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const verifyAdmin = require('../verify_admin')


router.get('/', verifyAdmin, async (req, res) => {
  try {
    const user = await User.findById("5d811deba9f84141612cb32b");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post('/', async (req, res) => {


   //Validate login
  const {error} = loginValidate_admin(req.body);
  if(error) return res.json(error);


   // Email checking here 

   try {
     const user = await User.findOne({ "name": req.body.name });
     console.log(user)
     if (!user) return res.status(400).send("username is not found");

     //Password validation
    //  const valid_password = await bcrypt.compare(
    //    req.body.password,
    //    user.password
    //  );
     if (user.password!=req.body.password) return res.status(400).send("password is not valid");

     // create and assign a token here

     const token = jwt.sign(
       { _id: user._id },
       process.env.ADMIN_TOKEN_SECRET,
       { expiresIn: '1h' },
       (err, token) => {
         if (err) throw err;
         res.json({ token });
       }
     );
    
   } catch (error) {
     console.error(err.message);
     res.status(500).send("Server error");
   }

  

//   res.send("Logged in successfully");



})

module.exports = router;
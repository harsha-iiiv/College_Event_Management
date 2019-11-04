const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const evenetregistration = require("../models/event_reg");
var ObjectId = require("mongodb").ObjectID;
//POST EVENT REGISTRAYION FORM 

router.post('/', verify, async (req, res) => {
  const { name, email, phone, event } = req.body;
  
  const already_reg = await evenetregistration.find({ user: ObjectId(req.user._id) });
   var chek = 0
         
         var i;
       for(i=0;i<already_reg.length;i++){
           if(already_reg[i].event.toString() === event)
              {
                chek = 1
                 break
              }
              else
              chek = 0
       }  

  //  already_reg.map(even =>{if(event === even.event && even!=null)
  //    { 
  //     chek =  1 }
  //   else
  //    chek =  0})

  //     console.log(chek);

  if (chek===1)
    return res.status(400).json({ errors: [{ msg: "User already registered to this event" }] });
  const reg_form = new evenetregistration({
    name,
    email,
    phone,
    event,
    user : req.user._id

  });

  try {
    const saveForm = await reg_form.save();
    res.json(saveForm);
  } catch (error) {
  console.log(error);
  
  return res.status(400).json({ errors: [{ msg: "Registration failed" }] });
     
  }
});

module.exports = router;
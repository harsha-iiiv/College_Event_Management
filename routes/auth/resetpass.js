const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const express = require("express");
require("dotenv/config");

router = express.Router();


router.put("/:token", async (req, res) => {
    
  const user1 = await User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: {
      $gt: Date.now()
    }
  });

    if (user1 == null) {
      return res
        .status(400)
        .json({
          errors: [{ msg: "password reset link is invalid or has expired" }]
        });
    }
    
  
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);
   
       try {

             await User.updateOne(
           { password: hashpassword ,
            resetPasswordToken: 'kjb' ,
            resetPasswordExpires: null }
         );
      
          res.status(400).json({
            errors: [{ msg: "Password updates succssfully" }]
          });
        
       } catch (err) {
         res.status(500).send("Server error");
       }
    });



module.exports = router;

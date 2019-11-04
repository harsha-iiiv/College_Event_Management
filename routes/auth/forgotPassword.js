const User  = require('../../models/user');
const crypto = require("crypto");
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv/config");

router = express.Router();
  
    console.log(process.env.EMAIL_ADDRESS);
    
  
   router.post("/forgotPassword", async (req, res) => {
    if (req.body.email === "") {
        return res.status(400).json({ errors: [{ msg: "email required" }] });

    }
    console.error(req.body.email);
      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return res.status(400).json({ errors: [{ msg: "Email not exists" }] });
      
      try {
        const token = crypto.randomBytes(20).toString("hex");
        
       await user.update({
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 360000
        });

        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          
          secure: false,
          service: "gmail",
          auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
          }
        });

        const mailOptions = {
          from: "cem.iiitv@gmail.com",
          to: `${user.email}`,
          subject: "Link To Reset Password",
          text:
            "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
            "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
            `http://localhost:3000/reset/${token}\n\n` +
            "If you did not request this, please ignore this email and your password will remain unchanged.\n"
        };

        console.log("sending mail");

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            console.error("there was an error: ", err); 
          } else {
            console.log("here is the res: ", response);
            res.status(200).json("recovery email sent");
          }
        });
      }
      catch(err){
            console.error("there was an error: ", err);

      }
    
  });
module.exports = router;

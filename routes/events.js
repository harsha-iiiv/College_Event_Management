const express = require("express");
const router = express.Router();
const events= require("../models/event");
const User = require("../models/admin");
const evenetregistration = require("../models/event_reg");
const verifyadmin = require("./verify_admin");
const nodemailer = require("nodemailer");
require("dotenv/config"); 


//Get ALL POOST public
router.get("/", async (req, res) => {
  try {
    const displayevent = await events.find();
    res.json(displayevent);
  } catch (error) {
    res.status(404).json({ msg: "Sorry unable fetch event" });
  }
});



//POST a event private route of admin
router.post("/",verifyadmin, async (req, res) => {

 
 const { 
 eic,  
 name,     
 date,      
 time,         
 venue,        
 Description, 
 type,         
 image,        
 logo,        
 organiserName,
 role,         
 email,        
 ticketrequired,
 ticketname,   
 isPaid,    
 ticketprice 
} = req.body
  const Event = new events({
    admin: req.admin._id,

    eic,
    name,
    date,
    time,
    venue,
    Description,
    type,
    image,
    logo,
    organiserName,
    role,
    email,
    ticketrequired,
    ticketname,
    isPaid,
    ticketprice
  });
  try {
    const saveevnt = await Event.save();
    res.json(saveevnt);
  } catch (error) {
    res.status(400).json({ errors: [{ msg: error.message }] });

  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', verifyadmin, async (req, res) => {
  try {
    const event = await events.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    // Check user
    const user = await User.findById(req.admin._id).select("-password");

    if (event.admin.toString() !== req.admin._id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await event.remove();

    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(500).send('Server Error');
  }
});
router.put('/:id', verifyadmin, async (req, res) => {
  try {
    const event = await events.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    console.log('====================================');
    console.log(event);
    console.log('====================================');
    // Check user
    const user = await User.findById(req.admin._id).select("-password");

    if (event.admin.toString() !== req.admin._id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
 

const {
  eic,
  name,
  date,
  time,
  venue,
  Description,
  type,
  image,
  logo,
  organiserName,
  role,
  email,
  ticketrequired,
  ticketname,
  isPaid,
  ticketprice
} = req.body;
    await event.updateOne({
    eic,
    name,
    date,
    time,
    venue,
    Description,
    type,
    image,
    logo,
    organiserName,
    role,
    email,
    ticketrequired,
    ticketname,
    isPaid,
    ticketprice
  });

    res.json({ msg: 'Event updated' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(500).send('Server Error');
  }
});

//TO GET SPECIFIC POST
router.get("/:postID",  async (req, res) => {
     try {
         const displayPostbyID = await events.findById(req.params.postID);
         res.send(displayPostbyID);
     } catch (error) {
         res.json({ message: error});
     }
    
})


router.post("/announce", async (req, res) => {
  if (req.body.id === "") {
    return res.status(400).json({ errors: [{ msg: "email required" }] });
  }
  if (req.body.msg === "") {
    return res.status(400).json({ errors: [{ msg: "Message required" }] });
  }
  console.error(req.body.id);
  const event_reg = await evenetregistration.find({ event: req.body.id });
  if (!event_reg)
    return res.status(400).json({ errors: [{ msg: "Events not exists" }] });
    var emails = []
    event_reg.forEach((item) => {
      emails.push(item.email)
    })
    
     
  try {
    // const token = crypto.randomBytes(20).toString("hex");

    // await user.update({
    //   resetPasswordToken: token,
    //   resetPasswordExpires: Date.now() + 360000
    // });

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
    
   
    console.log("sending mail");
 emails.forEach((to, i, array)=>{
 const mailOptions = {
   from: "cem.iiitv@gmail.com",
   
   subject: "Event Announcement",
   text:
     "You are receiving this because you (or someone else) have registered event.\n\n" +
     
     "Please check the website to view updated event details .\n"
 };
   mailOptions.to = to
     transporter.sendMail(mailOptions, (err, response) => {
       if (err) {
         console.error("there was an error: ", err);
       } else {
         console.log("here is the res: ", response);
         res.status(200).json("recovery email sent");
       }
        // if (i === emails.length - 1) {
        //      mailOptions.transport.close();
        //    }

     });
 })
   
  } catch (err) {
    console.error("there was an error: ", err);
  }
});

module.exports = router;




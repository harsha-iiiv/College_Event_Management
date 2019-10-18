const express = require("express");
const router = express.Router();
const events= require("../models/event");
const verifyadmin = require("./verify_admin");



//Get ALL POOST public
router.get("/", async (req, res) => {
  try {
    const displayevent = await events.find();
    res.json(displayevent);
  } catch (error) {
    res.status(404).json({ msg: "Sorry unable fetch event" });
  }
});



//POST a POST private route of admin
router.post("/",verifyadmin, async (req, res) => {


 const { 
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



//TO GET SPECIFIC POST
router.get("/:postID",  async (req, res) => {
     try {
         const displayPostbyID = await events.findById(req.params.postID);
         res.send(displayPostbyID);
     } catch (error) {
         res.json({ message: error});
     }
    
})

module.exports = router;

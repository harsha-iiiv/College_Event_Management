const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Evenetregistration = require('../models/event_reg');

//POST EVENT REGISTRAYION FORM 

router.post('/', verify,async (req, res) => {
  const { name, email, phone } = req.body;

  const reg_form = new Evenetregistration({
    name,
    email,
    phone
  });

  try {
    const saveForm = await reg_form.save();
    res.json(saveForm);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
const express = require("express");
router = express.Router();
const User = require("../../models/user");
const Evenetregistration = require("../../models/event_reg");
const {
  registrationValidate,
  loginValidate
} = require("../../validation/user_validate");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require('../verifyToken')

// router.get("/:id", verify, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
    
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });
router.get("/", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
 

router.post("/register", async (req, res) => {
  //Validate registration
  const { error } = registrationValidate(req.body);
  if (error) return res
                   .status(400)
                   .json({ errors: [{ msg: error.message }] });


  //Duplicate Email checks here
  const email_exists = await User.findOne({ email: req.body.email });
  if (email_exists)
    return res.status(400).json({ errors: [{ msg: "User already exists" }] });

  //Hashing password for

  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashpassword
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);

    jwt.sign(
      { _id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      (err, userToken) => {
        if (err) throw err;
        res.header("auto-token", userToken).send(userToken);
      }
    );
  } catch (err) {
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  //Validate login
  const { error } = loginValidate(req.body);
  if (error) res.status(400).json({ errors: [{ msg: error.message }] });


  // Email checking here

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({ errors: [{ msg: "Email not exists" }] });

    //Password validation
    const valid_password = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!valid_password)
      return res.status(400).json({ errors: [{ msg: "Invalid password" }] });

    // create and assign a token here

    const userToken = jwt.sign(
      { _id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      (err, userToken) => {
        if (err) throw err;
        res.json({ userToken, id: user._id});
      }
    );
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }

  //   res.send("Logged in successfully");
});

module.exports = router;

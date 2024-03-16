const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const schemas = require("../models/schemas");

router.post("/Signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  const newSignup = new schemas.Signup({
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    hashPassword: secPass,
  });
  const saveSignup = await newSignup.save();

  if (saveSignup) res.send("200");
  else res.send("404");
  res.end();
});

module.exports = router;

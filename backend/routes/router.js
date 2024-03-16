const express = require("express");
const router = express.Router();

const schemas = require("../models/schemas");

router.post("/Signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const newSignup = new schemas.Signup({
    fname: fname,
    lname: lname,
    email: email,
    password: password,
  });
  const saveSignup = await newSignup.save();

  if (saveSignup) res.send("200");
  else res.send("404");
  res.end();
});

module.exports = router;

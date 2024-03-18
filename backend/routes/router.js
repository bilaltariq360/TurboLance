const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const nodemailer = require('nodemailer');
const schemas = require("../models/schemas");
//const path = require('path');

router.post( "/Otp",async (req, res) => {
  const {email, otp} = req.body;
  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'curiousbytes2@gmail.com', 
      pass: 'svrv buoh cjrz ddmb', 
    },
  });
  

  let info = await transporter.sendMail({
    from: {
      name: 'TurboLance',
      address: 'curiousbytes2@gmail.com',
    },
    to: `${email}`,
    subject: 'TurboLance Account OTP Verification',
    html: `<h3>Welcome to TurboLance account creation</h3><h3>Your 6 digit OTP is: <span style = "color:red">${otp}</span></h3>`,
    // attachments: [{
    //   filename: 'Logo3.png',
    //   path: path.join(__dirname, '../img/Logo3.png'),
    //   contentType: 'image/png'
    // }]

});
const sendMail = async (transporter, mailOptions) =>{
  try{
    await transporter.sendMail(mailOptions);
    console.log("Email has been send");
  }
  catch (error){
    console.error(error);
  }
}
});

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

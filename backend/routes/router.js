const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const nodemailer = require("nodemailer");
const schemas = require("../models/schemas");
const EmailValidator = require("email-deep-validator");

let logedin = "TurboLance";

//const path = require('path');
router.get("/DeveloperProfile", async (req, res) => {
  const testParam = req.query.test;
  console.log(testParam); // Should print "sss" to the console
  res.send("Response from backend");
});

router.get("/Signin", async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  const users = await schemas.Signup.findOne({
    email: email,
    password: password,
  });
  if (users) {
    logedin = email;
  }
  res.send(users);
});
router.get("/DevDashboard", async (req, res) => {
  const devAcc = await schemas.DevAcc.find({ email: logedin });
  const users = await schemas.Signup.find({ email: logedin });
  const user = devAcc.map((dev) => {
    return {
      ...dev.toObject(),
      ...users[0].toObject(),
    };
  });
  res.send(user);
});
router.get("/UsrDashboard", async (req, res) => {
  const users = await schemas.Signup.find({ email: logedin });
  console.log(users, users.length);
  res.send(users);
});
router.post("/Otp", async (req, res) => {
  const { email, name, otp } = req.body;
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "curiousbytes2@gmail.com",
      pass: "svrv buoh cjrz ddmb",
    },
  });

  let info = await transporter.sendMail({
    from: {
      name: "TurboLance Inc.",
      address: "curiousbytes2@gmail.com",
    },
    to: `${email}`,
    subject: "TurboLance Account Verification",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* Styling for the email */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: rgb(30, 58, 158);
            color: #ffffff;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        .content {
            text-align: center;
        }

        .otp {
            color: red;
            font-size: 24px;
        }
    </style>
</head>

<body>
<p> Welcome <b>${name}</b>, to TurboLance! We are thrilled to have you join our community of talented freelancers. To get started, please use the OTP (One-Time Password) that has been sent to your registered email address to verify your account. This extra layer of security ensures that your account remains safe and protected. Once your account is verified, you'll have access to exciting freelance opportunities, a vibrant network of clients, and useful resources to support your freelancing journey.<p>
    <div class="container">
        <div class="header">
            <h1>TurboLance</h1>
            <p>Account Creation OTP Verification</p>
        </div>
        <div class="content">
            <p>Your 6 digit OTP is:</p>
            <p class="otp">${otp}</p>
        </div>
    </div>
</body>

</html>`, //`<h4>Welcome to TurboLance account creation</h4><h4>Your 6 digit OTP is: <span style = "color:red">${otp}</span></h4>`,
    // attachments: [{
    //   filename: 'Logo3.png',
    //   path: path.join(__dirname, '../img/Logo3.png'),
    //   contentType: 'image/png'
    // }]
  });
  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error(error);
    }
  };
});

router.post("/Signup", async (req, res) => {
  const { fname, lname, email, password, userMode, devProfession } = req.body;
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  const newSignup = new schemas.Signup({
    fname: fname,
    lname: lname,
    email: email,
    userMode: userMode,
    devProfession: devProfession,
    password: password,
    hashPassword: secPass,
  });
  const saveSignup = await newSignup.save();

  if (saveSignup) res.send("200");
  else res.send("404");
  res.end();
});
router.post("/ForgotPassword", async (req, res) => {
  const { email } = req.body;
  const users = await schemas.Signup.find({
    email: email,
  });
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "curiousbytes2@gmail.com",
      pass: "svrv buoh cjrz ddmb",
    },
  });

  let info = await transporter.sendMail({
    from: {
      name: "TurboLance Inc.",
      address: "curiousbytes2@gmail.com",
    },
    to: `${email}`,
    subject: "TurboLance Account Password Recovery",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    
</head>

<body>
<p><b>${
      users[0].fname + " " + users[0].lname
    }</b> your Turbolance account password is: <b>${users[0].password}</b></p>
</body>

</html>`,
  });
  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error(error);
    }
  };
});

router.get("/Gigs", async (req, res) => {
  try {
    const dev = await schemas.DevAcc.find({});
    const user = await Promise.all(
      dev.map(async (devItem) => {
        const devDetail = await schemas.Signup.findOne({
          email: devItem.email,
        });
        return {
          ...devItem.toObject(),
          ...devDetail.toObject(),
          logedin: logedin,
        };
      })
    );
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/DevDashboard" || "/Dashboard", async (req, res) => {
  const { email, tagline, skill, hourlyRate } = req.body;
  const newDevAcc = new schemas.DevAcc({
    email: email,
    tagline: tagline,
    skills: skill,
    hourlyRate: hourlyRate,
  });
  const saveDevAcc = await newDevAcc.save();

  if (saveDevAcc) res.send("200");
  else res.send("404");
  res.end();
});

module.exports = router;

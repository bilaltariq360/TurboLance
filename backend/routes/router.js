const express = require("express");
const router = express.Router();

const schemas = require("../models/schemas");

router.post("/Contact", async (req, res) => {
  const newContact = new schemas.Users({ name: name, email: email });
  const saveContact = await newContact.save();

  if (saveContact) res.send("OKKK");
  res.end();
});

router.get("/users", (req, res) => {});

module.exports = router;

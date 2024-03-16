const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  password: { type: String },
  entryDate: { type: Date, default: Date.now },
});

const Signup = mongoose.model("Signup", signupSchema, "signup_accounts");

const mySchemas = { Signup: Signup };

module.exports = mySchemas;

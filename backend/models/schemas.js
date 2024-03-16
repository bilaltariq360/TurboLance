const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  entryDate: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users", userSchema, "signup_accounts");

const mySchemas = { Users: Users };

module.exports = mySchemas;

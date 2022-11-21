const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  parish: {
    type: String,
  },
  gender: {
    type: String,
  },
  role: {
    type: String,
  },
  nin: {
    type: String,
  },
  regdate: {
    type: String,
  },
  mstatus: {
    type: String,
  },
});

// specifiy what we use to login
userSchema.plugin(passportLocalMongoose, {
  usernameField: "userid",
});
// collection is called RegisterUser in mongodb
module.exports = mongoose.model("RegisterUser", userSchema);

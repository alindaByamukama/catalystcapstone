const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  telephone: {
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
  userId: {
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
    required: true,
  },
  nin: {
    type: String,
  },
  regDate: {
    type: String,
    required: true,
  },
  mStatus: {
    type: String,
  },
});

// specifiy what we use to login
userSchema.plugin(passportLocalMongoose, {
  usernameField: "userId",
});
// collection is called RegisterUser in mongodb
module.exports = mongoose.model("RegisterUser", userSchema);

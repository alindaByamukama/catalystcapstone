const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  produceimg: {
    type: String,
  },
  producename: {
    type: String,
  },
  produceprice: {
    type: String,
  },
  producetype: {
    type: String,
  },
  producequantity: {
    type: String,
  },
  measurement: {
    type: String,
  },
  ufid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RegisterUser",
    required: true,
  },
  uploadDate: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "approved"],
  },
});

// collection is called RegisterUser in mongodb
module.exports = mongoose.model("UploadProduct", uploadSchema);

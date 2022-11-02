const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
// import models
const RegisterUser = require("../models/Registration");
const UploadProduct = require("../models/Uploads");

// agricultural officer dashboard route
// Retrieving fo list and profile information from db

router.get(
  "/dashboard/ao",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      let folist = await RegisterUser.find({ role: "farmerone" });
      res.render("dashboard/ao", {
        farmerones: folist,
        currentuser: req.session.user,
      });
    } catch (error) {
      res.status(400).send("Unable to get urban farmers");
      console.log(error);
    }
  }
);

// farmer one dashboard route
// needs to see uf list/update/delete
// needs to see uf uploads and to approve uploads
// and profile information from db

router.get(
  "/dashboard/fo",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      let uflist = await RegisterUser.find({ role: "urbanfarmer" });
      let products = await UploadProduct.find().sort({ $natural: -1 });
      res.render("dashboard/fo", {
        urbanfarmers: uflist,
        products: products,
        currentuser: req.session.user,
      });
    } catch (error) {
      res.status(400).send("Unable to get urban farmers");
      console.log(error);
    }
  }
);

// urban farmer dashboard route
// needs to see produce uploads
// needs to see produce order uploads
// sort() arranges according to most recent

router.get(
  "/dashboard/uf",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      // const order = { _id: -1 }; // sort based on a param
      let products = await UploadProduct.find().sort({ $natural: -1 });
      res.render("dashboard/uf", {
        products: products,
        currentuser: req.session.user,
      });
    } catch (error) {
      res.status(400).send("Unable to get Produce list");
      console.log(error);
    }
  }
);

module.exports = router;

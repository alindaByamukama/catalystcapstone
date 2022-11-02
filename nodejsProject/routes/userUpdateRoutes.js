const express = require("express");
const router = express.Router();

// import models
const RegisterUser = require("../models/Registration");

// Retrieving produce list/products from db
// router.get("/producelist", async (req, res) => {
//     try {
//       let products = await Ufupload.find();
//       res.render("lists/producelist", { products: products });
//     } catch (error) {
//       res.status(400).send("Unable to get Produce list");
//       console.log(error);
//     }
//   });

// Updating farmer one list
router.get("/fo/update/:id", async (req, res) => {
  try {
    const updatefo = await RegisterUser.findOne({ _id: req.params.id });
    res.render("user/update", { produce: updatefo });
  } catch (error) {
    res.status(400).send("Unable to update user, try again");
  }
});
// post updated product to producelist
router.post("/fo/update", async (req, res) => {
  try {
    await Ufupload.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/dashboard/ao");
  } catch (error) {
    res.status(400).send("Unable to update user, try again");
  }
});
// delete product
router.post("/fo/delete", async (req, res) => {
  try {
    await Ufupload.deleteOne({ _id: req.query.id });
    res.redirect("/dashboard/ao");
  } catch (error) {
    res.status(400).send("Unable to delete user, try again");
  }
});

module.exports = router;

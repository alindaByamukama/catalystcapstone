const express = require("express");
const router = express.Router();
const RegisterUser = require("../models/Registration");

router.get("/user/update/:id", async (req, res) => {
  try {
    const updateuser = await RegisterUser.findOne({ _id: req.params.id });
    res.render("user/update", { user: updateuser });
    // console.log("FO Updated: ", updatefarmerone);
  } catch (error) {
    res.status(400).send("Unable to update FO, please try again");
  }
});

router.post("/user/update", async (req, res) => {
  try {
    await RegisterUser.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to post updated FO, please try again");
  }
});

router.post("/user/delete", async (req, res) => {
  try {
    await Register.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to delete FO, try again");
  }
});

module.exports = router;

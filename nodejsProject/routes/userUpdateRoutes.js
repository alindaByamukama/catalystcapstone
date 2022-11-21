const express = require("express");
const router = express.Router();
const RegisterUser = require("../models/Registration");

router.get("/update/:id", async (req, res) => {
  try {
    const updatefarmerone = await RegisterUser.findOne({
      _id: req.params.id,
    });
    res.render("user/update", { user: updatefarmerone });
    // console.log("FO Updated: ", updatefarmerone);
  } catch (error) {
    res.status(400).send("Unable to update FO, please try again");
  }
});

router.post("/update", async (req, res) => {
  try {
    await RegisterUser.findOneAndUpdate({ _id: req.query.id }, req.body);
    req.session.user = req.user
    console.log("This is the user -->", req.session.user);
    if (req.user.role === "farmerone") {
      res.redirect("/dashboard/fo");
    } else if (req.user.role === "urbanfarmer") {
      res.redirect("/dashboard/uf");
    } else if (req.user.role === "agriculturalofficer") {
      res.redirect("/dashboard/ao");
    } else {
      res.send('Sorry your sessions seems to have experied, try again or register')
    }
  } catch (error) {
    res.status(400).send("Unable to post updated FO, please try again");
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Register.deleteOne({ _id: req.query.id });
    res.redirect("/dashboard/ao");
  } catch (error) {
    res.status(400).send("Unable to delete FO, try again");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

// import models
const RegisterUser = require("../models/Registration");

// gets and renders regitration form page
router.get("/registration", (req, res) => {
  res.render("user/register");
});
// posts new reg users, not if user id already exist,
// captures user passwords, redirects to back, throws errs if anything wrong
router.post("/registration", async (req, res) => {
  try {
    const user = new RegisterUser(req.body);
    // check for existing user id and nin in db
    let userIdExist = await RegisterUser.findOne({ userId: req.body.userId });
    let userNinExist = await RegisterUser.findOne({ userId: req.body.nin });

    if (userIdExist && userNinExist) {
      return res.status(400).send("This user already exists, please try again");
    } else {
      // wcapture password for each reg user while we await post
      await RegisterUser.register(user, req.body.password, (error) => {
        if (error) {
          throw error;
        }
        res.redirect("/registration");
      });
    }
  } catch (error) {
    res.status(400).send("Oops something went wrong, please try again.");
    console.log(error);
  }
});

module.exports = router;

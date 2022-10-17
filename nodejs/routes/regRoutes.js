const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();
// import model
const RegisterUser = require("../models/RegUser");

// ROUTES

router.get("/register", (req, res) => {
  res.render("uRegister/register");
});

router.post("/register", async (req, res) => {
  try {
    const user = new RegisterUser(req.body);
    // while we post our form the value of the password is captured for each user registered
    await RegisterUser.register(user, req.body.password, (error) => {
      if (error) {
        throw error;
      }
      res.redirect("/register");
    });
  } catch (error) {
    res.status(400).send("Oops something went wrong, please try again.");
    console.log(error);
  }
});

// make router file available for use to the outside
module.exports = router;

const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();
const passport = require("passport");

// gets the login page pug for render
router.get("/login", (req, res) => {
  res.render("user/login");
});
// posts succesfull auth to upload page, or redirects back to login if failure
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
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
  }
);
// posts user logout to login and destroys login session if failure to logout sends a message
router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        res.status(400).send("Logout has failed");
      } else {
        return res.redirect("/login");
      }
    });
  }
});

module.exports = router;

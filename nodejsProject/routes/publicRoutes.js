const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();

// landing / home page
// improve ui

router.get("/", (req, res) => {
  res.render("landing/landing");
});

// produce display / shop
// get approved produce uploads for display

router.get("/ufarm/shop", (req, res) => {
  res.render("shop/shopDisplay");
});

// checkout page (if time allows)

router.get("/ufarm/shop/checkout", (req, res) => {
  res.render("shop/checkout");
});

module.exports = router;

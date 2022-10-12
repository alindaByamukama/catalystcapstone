// DEPENDENCIES

const express = require("express");
const path = require("path");

// INSTANTIATIONS

const app = express();

// CONFIGURATIONS

// app.engine('pug', require('pug')._express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE

app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/uploads"));
app.use(express.urlencoded({ extended: false }));

// ROUTES

app.get("/", (req, res) => {
  res.send("Homepage! Hello World.");
});

// landing page
app.get("/landing", (req, res) => {
  res.render("landing");
});

app.post("/landing", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// login page
app.get("/loginuser", (req, res) => {
  res.render("loginUser");
});

app.post("/loginuser", (req, res) => {
  console.log(req.body);
  res.redirect("/landing");
});

// register page
app.get("/registeruser", (req, res) => {
  res.render("registerUser");
});

app.post("/registeruser", (req, res) => {
  console.log(req.body);
  res.redirect("/landing");
});

app.use('/register', (req, res, next) => {
    console.log('A new user registered at ' + Date.now());
    next();
});
  
// 404 not found page
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// BOOTSTRAPPING SERVER

app.listen(3000, () =>
  console.log("Listening on port 3000 ... server complete")
);

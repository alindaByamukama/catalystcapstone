// DEPENDENCIES
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");
const expressSession = require("express-session")({
  secret: "secretStuff",
  resave: false,
  saveUninitialized: false,
});
// import user model
const RegisterUser = require("./models/Registration");

// IMPORTING ROUTE FILES

const registrationRoutes = require("./routes/registrationRoutes");
const produceRoutes = require("./routes/produceRoutes");
const authRoutes = require("./routes/authenticationRoutes");
const publicRoutes = require("./routes/publicRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const userUpdateRoutes = require("./routes/userUpdateRoutes")

// INSTANTIATIONS

const app = express();

// DATABASE CONNECTION

mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", (err) => {
  console.error(err);
});

// CONFIGURATIONS

// app.engine('pug', require('pug')._express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(expressSession);

// PASSPORT CONFIG MIDDLEWARE

app.use(passport.initialize());
app.use(passport.session());
// this authenticates
passport.use(RegisterUser.createStrategy());
// gives a serial number that allows you to track users in your system after login
passport.serializeUser(RegisterUser.serializeUser());
// when user logsout the  serial num is destroyed
passport.deserializeUser(RegisterUser.deserializeUser());

// ROUTES

app.use("/", registrationRoutes);
app.use("/", produceRoutes);
app.use("/", authRoutes);
app.use("/", publicRoutes);
app.use("/", dashboardRoutes);
app.use("/", userUpdateRoutes);

app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// BOOTSTRAPPING SERVER

app.listen(4000, () => console.log("Listening on port 4000 🚀"));

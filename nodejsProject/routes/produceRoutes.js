const express = require("express");
const router = express.Router();
const multer = require("multer");
const connectEnsureLogin = require("connect-ensure-login");
const Uploads = require("../models/Uploads");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

// getting produce upload page - must first login to access working

router.get(
  "/uploadproduce",
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => {
    res.render("produce/uploadproduce", { currentuser: req.session.user });
  }
);

// posting uploaded produce item w image --> able to post data to db collection
// my image does not display and username, id, division not displaying properly ?
router.post(
  "/uploadproduce",
  connectEnsureLogin.ensureLoggedIn(),
  upload.single("produceimg"),
  async (req, res) => {
    try {
      const produce = new Uploads(req.body);
      produce.produceimg = req.file.path;
      await produce.save();
      res.redirect("/dashboard/uf");
      console.log("Uploaded produce -->", produce);
    } catch (error) {
      res.status(400).send("Produce not saved, please try again");
      console.log(error);
    }
  }
);

// Updating produce list/product
router.get("/product/update/:id", async (req, res) => {
  try {
    const updateproduct = await Uploads.findOne({ _id: req.params.id });
    res.render("produce/updateproduce", {
      currentuser: req.session.user,
      product: updateproduct,
    });
    // console.log("Product: ", updateproduct);
  } catch (error) {
    res.status(400).send("Unable to update produce, try again");
  }
});
// post updated product to producelist
router.post("/product/update", async (req, res) => {
  try {
    await Uploads.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/dashboard/uf");
  } catch (error) {
    res.status(400).send("Unable to update produce, try again");
  }
});
// update images

// delete product
router.post("/product/delete", async (req, res) => {
  try {
    await Uploads.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Unable to delete produce, try again");
  }
});

// PRODUCT APPROVAL ROUTE

// router.get("/produce/approve/:id", async (req, res) => {
//   try {
//     const updateproduct = await UploadProduct.findOne({ _id: req.params.id });
//     res.render("produce/approveproduce", { produce: updateproduct });
//     console.log("Product approved", updateproduct);
//   } catch (error) {
//     res.status(400).send("Unable to approve produce, try again");
//   }
// });
// post updated product to producelist
// router.post("/produce/approve", async (req, res) => {
//   try {
//     produce.produceimg = req.file.path;
//     await Upload.findOneAndUpdate({ _id: req.query.id }, req.body);
//     res.redirect("/dashboard/fo");
//   } catch (error) {
//     res.status(400).send("Unable to approve produce, try again");
//   }
// });

// make router file available for use to the outside
module.exports = router;

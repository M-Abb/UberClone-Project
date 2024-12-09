const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser } = require("../controllers/userControllers");

router.post("/register", [
  body("email").isEmail().withMessage("INVALID EMIAL"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("FIRSTNAME IS REQUIRED"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("PASSWORD IS MINIMUM DIGITS"),
],registerUser);
module.exports = router;

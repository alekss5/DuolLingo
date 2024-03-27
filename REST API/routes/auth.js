const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const User = require("../models/userSchema");

const authController = require("../controllers/auth");

router.put(
  "/",
  [
    body("email", "Enter a valid email address")
      .isEmail()
      .custom(async (value,) => {
        const userDoc = await User.findOne({ email: value });
        if (userDoc) {
          return Promise.reject("Email already exists");
        }
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty().isLength({ min: 2 }),
  ],
  authController.signup
);
router.post('/', authController.login)

module.exports = router;

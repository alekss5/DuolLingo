const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const User = require("../models/user");

const authController = require("../controllers/auth");


router.put(
  "/signup",
  [
    body("email", "Enter a valid email address")
      .isEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email already exists");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty().isLength({ min: 2 }),
  ],
  authController.signup
);
router.post('/login', authController.login)

module.exports = router;

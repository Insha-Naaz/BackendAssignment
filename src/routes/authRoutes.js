const express = require("express");
const router = express.Router();

const {
  registerValidation,
  loginValidation,
} = require("../validators/validators");

const { handleValidationErrors } = require("../utils/error");
const {
  register,
  login,
} = require("../controllers/authController");

router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  register
);

router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  login
);

module.exports = router;

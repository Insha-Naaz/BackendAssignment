const { body } = require("express-validator");

exports.registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

exports.loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];
// TASK VALIDATIONS

exports.createTaskValidation = [
  body("title")
    .notEmpty()
    .withMessage("Task title is required"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

exports.updateTaskValidation = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Task title cannot be empty"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),
];


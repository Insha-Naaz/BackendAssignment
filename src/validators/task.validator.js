const { body, param } = require("express-validator");

exports.createTaskValidation = [
  body("title")
    .notEmpty()
    .withMessage("Task title is required")
    .isLength({ min: 3 })
    .withMessage("Task title must be at least 3 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),
];

exports.updateTaskValidation = [
  param("id")
    .isInt()
    .withMessage("Task ID must be a valid number"),

  body("title")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Task title must be at least 3 characters"),

  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),
];

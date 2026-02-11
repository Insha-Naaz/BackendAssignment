const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const {
  createTaskValidation,
  updateTaskValidation,
} = require("../validators/validators");

const { handleValidationErrors } = require("../utils/error");

// CREATE task
router.post(
  "/",
  authMiddleware,
  createTaskValidation,
  handleValidationErrors,
  createTask
);

// GET all tasks
router.get("/", authMiddleware, getTasks);

// UPDATE task
router.put(
  "/:id",
  authMiddleware,
  updateTaskValidation,
  handleValidationErrors,
  updateTask
);

// DELETE task
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
// ADMIN-ONLY: Get all tasks (system-wide)
router.get(
  "/admin/all",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    const prisma = require("../config/prisma");

    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json({
      success: true,
      data: tasks,
    });
  }
);


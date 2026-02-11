const prisma = require("../config/prisma");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.id, // comes from authMiddleware
      },
    });

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("Create task error:", error);
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

// GET ALL TASKS (for logged-in user)
exports.getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.error("Get tasks error:", error);
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const { title, description, completed } = req.body;

    const task = await prisma.task.updateMany({
      where: {
        id: taskId,
        userId: req.user.id, // ensures ownership
      },
      data: {
        title,
        description,
        completed,
      },
    });

    if (task.count === 0) {
      return res.status(404).json({
        message: "Task not found or not authorized",
      });
    }

    res.json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    console.error("Update task error:", error);
    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);

    const task = await prisma.task.deleteMany({
      where: {
        id: taskId,
        userId: req.user.id, // ensures ownership
      },
    });

    if (task.count === 0) {
      return res.status(404).json({
        message: "Task not found or not authorized",
      });
    }

    res.json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({
      message: "Failed to delete task",
    });
  }
};

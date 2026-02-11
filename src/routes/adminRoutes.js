const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get(
  "/stats",
  authMiddleware,
  roleMiddleware("ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
      data: {
        totalUsers: 1,
        totalTasks: 5,
      },
    });
  }
);

module.exports = router;

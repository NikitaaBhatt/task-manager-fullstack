const express = require("express");

const {
  getAllTasks,
  createTask,
  updateTask,
  toggleTaskCompletion,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.patch("/:id/toggle", toggleTaskCompletion);

router.delete("/:id", deleteTask);

module.exports = router;

const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const tasksFilePath = path.join(__dirname, "../data/tasks.json");

const readTasks = () => {
  const data = fs.readFileSync(tasksFilePath, "utf-8");
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

const getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();

    const sortedTasks = tasks.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );

    res.status(200).json(sortedTasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};

const createTask = (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Task title is required",
      });
    }

    const tasks = readTasks();

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      description: description || "",
      dueDate: dueDate || null,
      priority: priority || "medium",
      completed: false,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create task",
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
};

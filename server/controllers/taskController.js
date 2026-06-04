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

const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, priority } = req.body;

    const tasks = readTasks();

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: title?.trim() || tasks[taskIndex].title,
      description:
        description !== undefined ? description : tasks[taskIndex].description,
      dueDate: dueDate !== undefined ? dueDate : tasks[taskIndex].dueDate,
      priority: priority || tasks[taskIndex].priority,
    };

    writeTasks(tasks);

    res.status(200).json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
    });
  }
};

const toggleTaskCompletion = (req, res) => {
  try {
    const { id } = req.params;

    const tasks = readTasks();

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    tasks[taskIndex].completed = !tasks[taskIndex].completed;

    writeTasks(tasks);

    res.status(200).json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to toggle task",
    });
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;

    const tasks = readTasks();

    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (filteredTasks.length === tasks.length) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    writeTasks(filteredTasks);

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  toggleTaskCompletion,
  deleteTask,
};

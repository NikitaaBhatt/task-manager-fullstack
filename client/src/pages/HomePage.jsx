import { useEffect, useState } from "react";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import StatsBar from "../components/StatsBar";

import {
  fetchTasks,
  createTask,
  toggleTask,
  deleteTask,
} from "../services/taskService";

function HomePage() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateTask = async (taskData) => {
    try {
      await createTask(taskData);
      loadTasks();
    } catch (error) {
      console.error("Failed to create task");
    }
  };

const handleToggleTask = async (id) => {
  try {
    await toggleTask(id);
    loadTasks();
  } catch (error) {
    console.error("Failed to toggle task");
  }
};

const handleDeleteTask = async (id) => {
  try {
    await deleteTask(id);
    loadTasks();
  } catch (error) {
    console.error("Failed to delete task");
  }
};

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />

        <StatsBar tasks={tasks} />

        <TaskForm onCreateTask={handleCreateTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default HomePage;
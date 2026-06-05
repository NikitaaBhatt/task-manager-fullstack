import { useEffect, useState } from "react";

import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import StatsBar from "../components/StatsBar";
import FilterBar from "../components/FilterBar";
import toast from "react-hot-toast";

import {
  fetchTasks,
  createTask,
  updateTask,
  toggleTask,
  deleteTask,
} from "../services/taskService";

function HomePage() {
  const [tasks, setTasks] = useState([]);

  const [recentlyCompletedId, setRecentlyCompletedId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("all");

  const [priorityFilter, setPriorityFilter] = useState("all");

  const [editingTask, setEditingTask] =
  useState(null);

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
      toast.success("Task created successfully");
      loadTasks();
    } catch (error) {
      console.error("Failed to create task");
    }
  };


  const handleUpdateTask = async (id, updatedData) => {
    try {
      await updateTask(id, updatedData);
      toast.success("Task updated successfully");

      setEditingTask(null);

      loadTasks();
    } catch (error) {
      console.error("Failed to update task");
    }
  };


const handleToggleTask = async (id) => {
  try {
    const task = tasks.find(
      (task) => task.id === id
    );

    if (!task.completed) {
      setRecentlyCompletedId(id);

      await toggleTask(id);

      toast.success("Task completed");

      setTimeout(() => {
        loadTasks();

        setRecentlyCompletedId(null);
      }, 300);
    }

    else {
      await toggleTask(id);

      toast.success("Task marked incomplete");

      loadTasks();
    }
  } catch (error) {
    console.error("Failed to toggle task");
  }
};

const handleDeleteTask = async (id) => {
  try {
    await deleteTask(id);
    toast.success("Task deleted successfully");
    loadTasks();
  } catch (error) {
    console.error("Failed to delete task");
  }
};

const filteredTasks = tasks.filter((task) => {
  const matchesSearch =
    task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    task.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "all"
      ? true
      : statusFilter === "completed"
      ? task.completed
      : !task.completed;

  const matchesPriority =
    priorityFilter === "all"
      ? true
      : task.priority === priorityFilter;

  return (
    matchesSearch &&
    matchesStatus &&
    matchesPriority
  );
});

const sortedTasks = [...filteredTasks].sort((a, b) => {
  if (
    a.id === recentlyCompletedId ||
    b.id === recentlyCompletedId
  ) {
    return 0;
  }

  if (a.completed !== b.completed) {
    return a.completed ? 1 : -1;
  }

  return 0;
});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />

        <StatsBar tasks={tasks} />

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <TaskForm
          onCreateTask={handleCreateTask}
          editingTask={editingTask}
          onUpdateTask={handleUpdateTask}
        />

        <TaskList
          tasks={sortedTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          setEditingTask={setEditingTask}
        />
      </div>
    </div>
  );
}

export default HomePage;
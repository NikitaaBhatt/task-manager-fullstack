import { useEffect, useState } from "react";

function TaskForm({ onCreateTask, editingTask, onUpdateTask, }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        dueDate: editingTask.dueDate || "",
        priority: editingTask.priority,
      });
    }
  }, [editingTask]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    if (editingTask) {
      await onUpdateTask(editingTask.id, formData);
    } else {
      await onCreateTask(formData);
    }

    setFormData({
      title: "",
      description: "",
      dueDate: "",
      priority: "medium",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Task description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>

          {editingTask && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="ml-3 bg-slate-400 hover:bg-slate-500 transition text-white px-6 py-3 rounded-lg font-medium"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
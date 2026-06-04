function TaskCard({ task }) {
  const priorityColors = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className={`text-xl font-semibold ${
              task.completed
                ? "line-through text-slate-400"
                : "text-slate-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="text-slate-500 mt-2">
              {task.description}
            </p>
          )}
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div>
          {task.dueDate && (
            <p className="text-sm text-slate-500">
              Due: {task.dueDate}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition">
            {task.completed ? "Completed" : "Complete"}
          </button>

          <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
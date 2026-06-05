function TaskCard({ task, onToggleTask, onDeleteTask, setEditingTask }) {
  const priorityColors = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
  };

  const isOverdue =
    task.dueDate && !task.completed && new Date(task.dueDate) < new Date();

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isOverdue ? "border-red-300" : "border-slate-200"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3
              className={`text-2xl font-semibold ${
                task.completed
                  ? "line-through text-slate-500"
                  : "text-slate-800"
              }`}
            >
              {task.title}
            </h3>

            <div className="flex items-center gap-2">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  task.completed ? "bg-green-500" : "bg-yellow-500"
                }`}
              ></div>

              <span className="text-sm text-slate-500">
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>

          {task.description && (
            <p className="text-slate-500 mt-3 leading-relaxed">
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 mt-4">
            {task.dueDate && (
              <span
                className={`text-sm px-3 py-1 rounded-full ${
                  isOverdue
                    ? "bg-red-100 text-red-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {isOverdue
                  ? `Overdue: ${task.dueDate}`
                  : `Due: ${task.dueDate}`}
              </span>
            )}

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                priorityColors[task.priority]
              }`}
            >
              {task.priority} priority
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onToggleTask(task.id)}
            className={`px-5 py-2.5 rounded-xl text-white font-medium transition ${
              task.completed
                ? "bg-slate-500 hover:bg-slate-600"
                : "bg-green-500 hover:bg-green-300"
            }`}
          >
            {task.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>

          <button
            onClick={() => setEditingTask(task)}
            className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-300 text-white font-medium transition"
          >
            Edit
          </button>

          <button
            onClick={() => {
              const confirmed = window.confirm(
                "Are you sure you want to delete this task?",
              );

              if (confirmed) {
                onDeleteTask(task.id);
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 font-medium transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

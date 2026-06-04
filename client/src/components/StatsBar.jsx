function StatsBar({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    tasks.length - completedTasks;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-sm p-5">
        <p className="text-sm text-slate-500">
          Total Tasks
        </p>

        <h2 className="text-3xl font-bold text-slate-800 mt-2">
          {tasks.length}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-5">
        <p className="text-sm text-slate-500">
          Completed
        </p>

        <h2 className="text-3xl font-bold text-green-600 mt-2">
          {completedTasks}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-5">
        <p className="text-sm text-slate-500">
          Pending
        </p>

        <h2 className="text-3xl font-bold text-orange-500 mt-2">
          {pendingTasks}
        </h2>
      </div>
    </div>
  );
}

export default StatsBar;
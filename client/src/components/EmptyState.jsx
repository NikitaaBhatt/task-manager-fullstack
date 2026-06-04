function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-10 text-center">
      <h2 className="text-2xl font-semibold text-slate-700">
        No Tasks Yet
      </h2>

      <p className="text-slate-500 mt-2">
        Add your first task to get started.
      </p>
    </div>
  );
}

export default EmptyState;
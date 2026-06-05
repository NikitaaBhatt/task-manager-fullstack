function EmptyState() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-12 text-center border border-slate-200">
      <div className="text-6xl mb-4">
        📋
      </div>

      <h2 className="text-2xl font-bold text-slate-700">
        No Tasks Found
      </h2>

      <p className="text-slate-500 mt-3 text-lg">
        Add a new task or adjust your filters.
      </p>
    </div>
  );
}

export default EmptyState;
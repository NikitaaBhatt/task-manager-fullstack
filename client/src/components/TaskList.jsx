import EmptyState from "./EmptyState";
import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  setEditingTask,
}) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
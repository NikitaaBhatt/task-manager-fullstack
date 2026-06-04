import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import StatsBar from "../components/StatsBar";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />

        <StatsBar />

        <TaskForm />

        <TaskList />
      </div>
    </div>
  );
}

export default HomePage;
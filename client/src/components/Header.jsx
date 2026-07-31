const quotes = [
  "Small progress is still progress.",
  "Focus on consistency, not perfection.",
  "One task at a time.",
  "Discipline creates freedom.",
  "Done is better than perfect.",
  "Stay organized, stay productive.",
];

const randomQuote =
  quotes[Math.floor(Math.random() * quotes.length)];

function Header() {
  return (
    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-5xl font-bold text-slate-800 tracking-tight">
          TaskFlow
        </h1>

        <p className="text-slate-500 mt-2 text-lg">
          Organize your tasks efficiently and stay productive.
        </p>

        <p className="text-slate-400 italic mt-1 text-sm">{randomQuote}</p>
      </div>

      <div className="bg-blue-600 text-white px-5 py-3 rounded-xl shadow-sm">
        <p className="text-sm opacity-90">Full-Stack Task Manager</p>
        
      </div>
    </div>
  );
}

export default Header;

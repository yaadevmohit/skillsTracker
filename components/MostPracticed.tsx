export default function MostPracticed() {
  // Static data matching the mockup
  const skillName = "Spanish";
  const percentOfGoal = 75;
  const totalHours = "47.5h";
  const streak = 12;
  const lastSession = "Yesterday — 45 min";

  // Circular progress ring math
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentOfGoal / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between h-full">
      <div>
        <span className="text-emerald-600 font-extrabold text-xs tracking-wider uppercase block mb-1">
          Most Practiced
        </span>
        <h2 className="text-3xl font-extrabold text-neutral-800 tracking-tight mb-6">
          {skillName}
        </h2>

        {/* Circular Progress Ring */}
        <div className="relative flex justify-center items-center mb-6">
          <svg className="w-36 h-36 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r={radius}
              className="fill-none stroke-neutral-100"
              strokeWidth="8"
            />
            <circle
              cx="50" cy="50" r={radius}
              className="fill-none"
              stroke="#059669"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.6s ease-in-out" }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-2xl font-extrabold text-neutral-800 leading-none">
              {percentOfGoal}%
            </span>
            <span className="text-[10px] font-bold text-neutral-400 mt-1">
              of weekly goal
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-3 text-center">
            <div className="text-xl font-extrabold text-neutral-800 leading-none mb-1">
              {totalHours}
            </div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              Total hours
            </div>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-3 text-center">
            <div className="text-xl font-extrabold text-neutral-800 leading-none mb-1 flex items-center justify-center gap-1">
              <span>🔥</span><span>{streak}</span>
            </div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              Day streak
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-neutral-400 text-xs font-semibold pt-4 border-t border-neutral-100 mt-6">
        Last session: {lastSession}
      </div>
    </div>
  );
}

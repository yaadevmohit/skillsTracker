const RECENT_SESSIONS = [
  {
    id: "1",
    skill: "Spanish",
    color: "#059669",
    notes: "Practiced past tense conjugations. Struggled with irregular verbs.",
    duration: "45 min",
    date: "Today",
  },
  {
    id: "2",
    skill: "Guitar",
    color: "#8B5CF6",
    notes: "Fingerpicking exercises and chord transitions for new song.",
    duration: "60 min",
    date: "Today",
  },
  {
    id: "3",
    skill: "TypeScript",
    color: "#3B82F6",
    notes: "Deep dive into generic constraints and mapped types.",
    duration: "45 min",
    date: "Yesterday",
  },
  {
    id: "4",
    skill: "Cooking",
    color: "#EF4444",
    notes: "Practiced knife skills and French mother sauce reductions.",
    duration: "60 min",
    date: "Yesterday",
  },
  {
    id: "5",
    skill: "Spanish",
    color: "#059669",
    notes: "Conversational practice with language exchange partner.",
    duration: "30 min",
    date: "2 days ago",
  },
];

export default function RecentSessions() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-neutral-800">Recent Sessions</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors cursor-pointer">
          View all
        </button>
      </div>

      <div className="space-y-1">
        {RECENT_SESSIONS.map((session) => (
          <div
            key={session.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50 px-2 rounded-xl transition-all"
          >
            <div className="flex items-start gap-3 flex-1 min-w-0 pr-4">
              <span
                className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: session.color }}
              />
              <div className="min-w-0">
                <span className="font-bold text-neutral-800 mr-2 text-sm sm:text-base">
                  {session.skill}
                </span>
                <p className="text-neutral-500 text-sm mt-0.5 break-words line-clamp-2">
                  {session.notes}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-2 sm:mt-0 shrink-0 pl-8 sm:pl-0">
              <span className="font-bold text-neutral-800 text-sm">
                {session.duration}
              </span>
              <span className="text-neutral-400 text-xs text-right w-20">
                {session.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

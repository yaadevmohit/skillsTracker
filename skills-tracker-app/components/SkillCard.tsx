interface SkillCardProps {
  name: string;
  color: string;
  totalHours: string;
  streak: number;
}

export default function SkillCard({ name, color, totalHours, streak }: SkillCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        <span className="font-bold text-neutral-800 text-base">
          {name}
        </span>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-neutral-800 tracking-tight">
          {totalHours}
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-amber-600/90 mt-1">
          {streak > 0 && <span>🔥</span>}
          <span>{streak > 0 ? `${streak}-day streak` : "No active streak"}</span>
        </div>
      </div>
    </div>
  );
}

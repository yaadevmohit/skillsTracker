// Static heatmap data: 18 weeks × 7 days
// Values represent practice intensity (0 = none, 1-4 = increasing intensity)
const HEATMAP_DATA: number[][] = [
  // Older weeks (mostly empty/light)
  [0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0],
  [0,0,0,0,1,0,0],
  [0,1,0,0,0,0,0],
  [0,0,0,1,0,0,0],
  [0,0,0,0,0,1,0],
  [1,0,0,0,0,0,0],
  [0,0,1,0,0,0,1],
  [0,0,0,0,1,0,0],
  [0,1,0,1,0,0,0],
  [1,0,0,0,1,0,1],
  // Getting more active
  [0,1,1,0,1,0,0],
  [1,0,1,1,0,1,0],
  [1,1,0,1,1,0,1],
  [2,1,2,1,1,2,1],
  // Recent weeks (most active)
  [2,1,2,3,2,3,2],
  [3,2,3,2,3,4,3],
  [3,4,3,4,3,4,4],
];

const INTENSITY_CLASSES: Record<number, string> = {
  0: "bg-neutral-100",
  1: "bg-emerald-100",
  2: "bg-emerald-300",
  3: "bg-emerald-500",
  4: "bg-emerald-700",
};

export default function Heatmap() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-neutral-800">Practice Activity</h2>
          <span className="text-neutral-400 text-xs font-semibold">Last 18 weeks</span>
        </div>

        {/* Grid: 18 columns × 7 rows */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-[5px] min-w-[340px] justify-between">
            {HEATMAP_DATA.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[5px]">
                {week.map((intensity, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-[17px] h-[17px] rounded-[3px] transition-colors
                      ${INTENSITY_CLASSES[intensity] ?? "bg-neutral-100"}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 text-[11px] font-bold text-neutral-400 pt-4 border-t border-neutral-100 mt-6 select-none">
        <span>Less</span>
        <div className="w-3 h-3 rounded-[2px] bg-neutral-100" />
        <div className="w-3 h-3 rounded-[2px] bg-emerald-100" />
        <div className="w-3 h-3 rounded-[2px] bg-emerald-300" />
        <div className="w-3 h-3 rounded-[2px] bg-emerald-500" />
        <div className="w-3 h-3 rounded-[2px] bg-emerald-700" />
        <span>More</span>
      </div>
    </div>
  );
}

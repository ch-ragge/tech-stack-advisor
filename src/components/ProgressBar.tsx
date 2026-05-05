"use client";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between text-xs mb-2" style={{ color: "#00B4D8" }}>
        <span>Q{current} / {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ backgroundColor: "#1A1A2E" }}>
        <div
          className="h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: "#00B4D8" }}
        />
      </div>
    </div>
  );
}

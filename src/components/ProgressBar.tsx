"use client";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between text-xs mb-2 text-accent">
        <span>Q{current} / {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-black/10">
        <div
          className="h-1.5 rounded-full bg-accent transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

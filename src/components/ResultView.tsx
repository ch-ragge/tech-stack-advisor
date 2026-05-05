"use client";

import type { TechStack } from "@/types/quiz";

interface Props {
  top: TechStack;
  runners: TechStack[];
  onRetry: () => void;
}

const badgeStyle: Record<string, string> = {
  amazon: "bg-orange-900/40 text-orange-300 border-orange-700/40",
  note: "bg-blue-900/40 text-blue-300 border-blue-700/40",
  udemy: "bg-purple-900/40 text-purple-300 border-purple-700/40",
  claude: "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
};

const badgeLabel: Record<string, string> = {
  amazon: "Amazon",
  note: "note",
  udemy: "Udemy",
  claude: "Claude",
};

export default function ResultView({ top, runners, onRetry }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 診断結果ヘッダー */}
      <div className="text-center mb-8">
        <p className="text-sm mb-2" style={{ color: "#00B4D8" }}>あなたに最適な技術スタックは</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{top.name}</h2>
        <span
          className="inline-block text-sm px-4 py-1.5 rounded-full border font-semibold"
          style={{ color: "#00B4D8", borderColor: "#00B4D8" + "66" }}
        >
          {top.tagline}
        </span>
      </div>

      {/* 説明 */}
      <div
        className="rounded-xl p-6 mb-6 border"
        style={{ backgroundColor: "#1A1A2E", borderColor: "#00B4D8" + "22" }}
      >
        <p className="text-slate-300 leading-relaxed">{top.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {top.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border"
              style={{ color: "#00B4D8", borderColor: "#00B4D8" + "44", backgroundColor: "#00B4D8" + "11" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* アフィリエイト導線 */}
      <div
        className="rounded-xl p-6 mb-6 border"
        style={{ backgroundColor: "#1A1A2E", borderColor: "#00B4D8" + "22" }}
      >
        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span style={{ color: "#00B4D8" }}>■</span> この技術を学ぶならこちら
        </h3>
        <div className="grid gap-3">
          {top.affiliates.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 hover:scale-[1.01]"
              style={{ borderColor: "#00B4D8" + "33", backgroundColor: "#0A0A0A" }}
            >
              <span className="text-slate-200 text-sm">{link.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded border ${badgeStyle[link.type] ?? ""}`}>
                {badgeLabel[link.type] ?? link.type}
              </span>
            </a>
          ))}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 hover:scale-[1.01]"
            style={{ borderColor: "#00B4D8" + "33", backgroundColor: "#0A0A0A" }}
          >
            <span className="text-slate-200 text-sm">Claude Pro で爆速開発する</span>
            <span className="text-xs px-2 py-0.5 rounded border bg-cyan-900/40 text-cyan-300 border-cyan-700/40">
              Claude
            </span>
          </a>
        </div>
      </div>

      {/* 2位・3位 */}
      {runners.length > 0 && (
        <div className="mb-8">
          <h3 className="text-slate-400 text-sm text-center mb-3">他の候補</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {runners.map((r, i) => (
              <div
                key={r.id}
                className="rounded-xl p-4 border"
                style={{ backgroundColor: "#1A1A2E", borderColor: "#00B4D8" + "18" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs" style={{ color: "#00B4D8" }}>#{i + 2}</span>
                  <span className="text-white font-semibold text-sm">{r.name}</span>
                </div>
                <p className="text-slate-500 text-xs">{r.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* やり直し */}
      <div className="text-center">
        <button
          onClick={onRetry}
          className="px-8 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
          style={{ borderColor: "#00B4D8" + "66", color: "#00B4D8" }}
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
}

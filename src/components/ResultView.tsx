"use client";

import type { TechStack } from "@/types/quiz";

interface Props {
  top: TechStack;
  runners: TechStack[];
  onRetry: () => void;
}

const badgeStyle: Record<string, string> = {
  amazon: "bg-orange-50 text-orange-700 border-orange-200",
  note: "bg-blue-50 text-blue-700 border-blue-200",
  udemy: "bg-purple-50 text-purple-700 border-purple-200",
  claude: "bg-cyan-50 text-cyan-700 border-cyan-200",
};

const badgeLabel: Record<string, string> = {
  amazon: "Amazon",
  note: "note",
  udemy: "Udemy",
  claude: "Claude",
};

/* シグネチャ要素：結果カードが80ms間隔で順番に浮かび上がる
   （globals.css の hero-in keyframes を再利用。reduced-motion時は即時表示） */
function rise(order: number): React.CSSProperties {
  return {
    animation: "hero-in 0.6s ease-out both",
    animationDelay: `${order * 80}ms`,
  };
}

export default function ResultView({ top, runners, onRetry }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 診断結果ヘッダー */}
      <div className="text-center mb-8" style={rise(0)}>
        <p className="text-sm mb-2 text-accent">あなたに最適な技術スタックは</p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3 tracking-tight">{top.name}</h2>
        <span className="inline-block text-sm px-4 py-1.5 rounded-full border font-semibold border-accent/50 text-accent">
          {top.tagline}
        </span>
      </div>

      {/* 説明 */}
      <div className="rounded-2xl p-6 mb-6 bg-surface" style={rise(1)}>
        <p className="text-ink/90 leading-relaxed">{top.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {top.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-accent/30 bg-white text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* アフィリエイト導線 */}
      <div className="rounded-2xl p-6 mb-6 bg-surface" style={rise(2)}>
        <h3 className="text-ink font-semibold mb-4 flex items-center gap-2">
          <span className="text-accent">■</span> この技術を学ぶならこちら
        </h3>
        <div className="grid gap-3">
          {top.affiliates.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-black/10 bg-white transition-colors hover:border-accent"
            >
              <span className="text-ink text-sm">{link.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded border ${badgeStyle[link.type] ?? ""}`}>
                {badgeLabel[link.type] ?? link.type}
              </span>
            </a>
          ))}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-xl border border-black/10 bg-white transition-colors hover:border-accent"
          >
            <span className="text-ink text-sm">Claude Pro で爆速開発する</span>
            <span className="text-xs px-2 py-0.5 rounded border bg-cyan-50 text-cyan-700 border-cyan-200">
              Claude
            </span>
          </a>
        </div>
      </div>

      {/* 2位・3位 */}
      {runners.length > 0 && (
        <div className="mb-8" style={rise(3)}>
          <h3 className="text-subtle text-sm text-center mb-3">他の候補</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {runners.map((r, i) => (
              <div key={r.id} className="rounded-2xl p-4 bg-surface" style={rise(4 + i)}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-accent">#{i + 2}</span>
                  <span className="text-ink font-semibold text-sm">{r.name}</span>
                </div>
                <p className="text-subtle text-xs">{r.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* やり直し */}
      <div className="text-center" style={rise(6)}>
        <button
          onClick={onRetry}
          className="px-8 py-3 rounded-full border text-sm font-semibold border-accent/60 text-accent transition-colors hover:bg-accent/5"
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
}

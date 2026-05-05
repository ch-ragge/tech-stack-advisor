"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import { getTopThree } from "@/lib/recommend";
import type { Answers } from "@/types/quiz";
import ProgressBar from "@/components/ProgressBar";
import QuizStep from "@/components/QuizStep";
import ResultView from "@/components/ResultView";

type Phase = "start" | "quiz" | "result";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("start");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  function handleSelect(optionId: string) {
    const q = questions[step];
    const next = { ...answers, [q.id]: optionId };
    setAnswers(next);
    if (step + 1 >= questions.length) {
      setPhase("result");
    } else {
      setStep(step + 1);
    }
  }

  function handleRetry() {
    setPhase("start");
    setStep(0);
    setAnswers({});
  }

  const top3 = phase === "result" ? getTopThree(answers) : [];
  const best = top3[0];
  const runners = top3.slice(1);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {phase === "start" && (
        <div className="w-full max-w-xl text-center">
          <div className="mb-6">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{ color: "#00B4D8", borderColor: "#00B4D8" }}
            >
              SE向け技術スタック診断ツール
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            あなたのプロジェクトに<br />
            <span style={{ color: "#00B4D8" }}>最適な技術</span>を診断
          </h1>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            5つの質問に答えるだけで、<br />
            あなたの状況にぴったりの技術スタックを提案します。
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {["5問だけ", "完全無料", "即結果"].map((t) => (
              <div
                key={t}
                className="rounded-xl py-3 text-center border"
                style={{ backgroundColor: "#1A1A2E", borderColor: "#00B4D8" + "33" }}
              >
                <span className="text-white text-sm font-semibold">{t}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPhase("quiz")}
            className="px-10 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: "#00B4D8", color: "#0A0A0A" }}
          >
            診断スタート →
          </button>
          <p className="mt-6 text-xs text-slate-600">
            by らがSEブログ ·{" "}
            <a
              href="https://ch-ragge.github.io/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              ch-ragge.github.io/blog
            </a>
          </p>
        </div>
      )}

      {phase === "quiz" && (
        <div className="w-full max-w-xl">
          <ProgressBar current={step + 1} total={questions.length} />
          <QuizStep question={questions[step]} onSelect={handleSelect} />
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 block mx-auto text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              ← 前の質問に戻る
            </button>
          )}
        </div>
      )}

      {phase === "result" && best && (
        <ResultView top={best} runners={runners} onRetry={handleRetry} />
      )}
    </main>
  );
}

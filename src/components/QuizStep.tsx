"use client";

import type { Question } from "@/types/quiz";

interface Props {
  question: Question;
  onSelect: (optionId: string) => void;
}

export default function QuizStep({ question, onSelect }: Props) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
        {question.text}
      </h2>
      <div className="grid gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="w-full text-left px-6 py-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] active:scale-100"
            style={{
              backgroundColor: "#1A1A2E",
              borderColor: "#00B4D8" + "44",
              color: "#e2e8f0",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#00B4D8";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#00B4D8" + "18";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#00B4D8" + "44";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A2E";
            }}
          >
            {opt.label.split("\n").map((line, i) => (
              <span key={i} className={i === 0 ? "font-semibold block" : "block text-sm mt-0.5 text-slate-400"}>
                {line}
              </span>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
}

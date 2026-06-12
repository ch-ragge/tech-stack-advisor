"use client";

import type { Question } from "@/types/quiz";

interface Props {
  question: Question;
  onSelect: (optionId: string) => void;
}

export default function QuizStep({ question, onSelect }: Props) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-ink text-center mb-8 tracking-tight">
        {question.text}
      </h2>
      <div className="grid gap-3">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="w-full text-left px-6 py-4 rounded-2xl border border-black/10 bg-white text-ink transition-colors hover:border-accent hover:bg-accent/5"
          >
            {opt.label.split("\n").map((line, i) => (
              <span key={i} className={i === 0 ? "font-semibold block" : "block text-sm mt-0.5 text-subtle"}>
                {line}
              </span>
            ))}
          </button>
        ))}
      </div>
    </div>
  );
}

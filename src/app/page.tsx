"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import { getTopThree } from "@/lib/recommend";
import type { Answers } from "@/types/quiz";
import ProgressBar from "@/components/ProgressBar";
import QuizStep from "@/components/QuizStep";
import ResultView from "@/components/ResultView";
import GlassHeader from "@/components/GlassHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

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
    <>
    <GlassHeader current="stack" />
    <main className="min-h-screen flex flex-col items-center justify-center bg-base px-6 pt-32 pb-24 sm:pt-36 sm:pb-32">
      {phase === "start" && (
        <div className="w-full max-w-xl text-center">
          <div className="mb-6 hero-item-1">
            <span className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-accent/40 text-accent">
              SE向け技術スタック診断ツール
            </span>
          </div>
          <h1 className="hero-title text-ink mb-5 hero-item-1">
            最適解を、
            <br />
            <span className="text-accent">5問で。</span>
          </h1>
          <p className="text-subtle text-lg mb-12 hero-item-2">
            5つの質問に答えるだけで、<br />
            あなたの状況にぴったりの技術スタックを提案します。
          </p>
          <div className="hero-item-3">
            <div className="grid grid-cols-3 gap-3 mb-12">
              {["5問だけ", "完全無料", "即結果"].map((t) => (
                <div key={t} className="rounded-2xl py-3 text-center bg-surface">
                  <span className="text-ink text-sm font-semibold">{t}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPhase("quiz")}
              className="px-10 py-4 rounded-full font-bold text-base bg-accent text-night transition-all duration-200 hover:brightness-105"
            >
              診断スタート →
            </button>
            <p className="mt-6 text-xs text-subtle">
              by らがSEブログ ·{" "}
              <a
                href="https://ch-ragge.github.io/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                ch-ragge.github.io/blog
              </a>
            </p>
          </div>
        </div>
      )}

      {phase === "quiz" && (
        <div className="w-full max-w-xl rounded-3xl bg-surface p-6 sm:p-10">
          <ProgressBar current={step + 1} total={questions.length} />
          <QuizStep question={questions[step]} onSelect={handleSelect} />
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 block mx-auto text-xs text-subtle hover:text-ink transition-colors"
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

    {/* ===== 解説記事セクション（ビルド時HTMLに出力される） ===== */}
    <section className="bg-surface px-6 py-24 sm:py-32">
      <Reveal>
      <article className="max-w-2xl mx-auto text-ink leading-relaxed [&>p]:max-w-[65ch]">
        <h2 className="text-3xl font-bold text-ink mb-6 tracking-tight">
          技術スタック診断ツールの使い方と、技術選定の考え方
        </h2>

        <p className="mb-8">
          このページの上にある診断ツールは、5つの質問に答えるだけで、プロジェクトに向いた技術スタックの候補を提案します。
          ここでは「なぜその質問を聞くのか」「結果をどう読めばいいのか」、そして技術選定そのものの考え方を解説します。
        </p>

        <h3 className="text-xl font-bold text-ink mt-10 mb-4">このツールでわかること</h3>
        <p className="mb-4">
          技術スタックの選定は、Webサービスや業務システムを作るときの最初の分岐点です。
          フロントエンド・バックエンド・データベース・インフラの組み合わせによって、開発スピード・運用コスト・拡張性が大きく変わります。
          このツールは、規模・目的・チーム体制・優先度・あなたの経験という5つの軸から、8種類の候補を自動で採点し、理由付きで上位3つを表示します。
        </p>
        {/* TODO:本人記入 ── このツールを作った動機（どんな場面で技術選定に迷ったか）を体験ベースで書く。例：客先で「とりあえずWordPressで」と言われて後悔した話。最低200字。noteからのコピペ禁止（書き下ろし） */}

        <h3 className="text-xl font-bold text-ink mt-10 mb-4">技術スタック選びの判断軸</h3>
        <p className="mb-4">
          技術選定で見るべき軸は、大きく次の4つに整理できます。診断ツールの5つの質問も、この判断軸に対応しています。
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">① 規模 — 想定するアクセス数・データ量</h4>
        <p className="mb-4">
          個人ブログのような小規模サイトと、数万人が同時に使う業務システムでは、適した構成が根本的に異なります。
          小規模なら静的サイトやサーバーレスで十分なことが多く、大規模ならスケールしやすい構成や専用のデータベース設計が必要になります。
        </p>
        {/* TODO:本人記入 ── 規模で構成を間違えた／適切に選べた実案件の判断を1つ書く。最低150字。書き下ろし */}
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">② 目的 — 何を作るのか</h4>
        <p className="mb-4">
          コンテンツ中心のメディアなのか、ユーザーがログインして操作する業務アプリなのか、ECなのかで最適解は変わります。
          目的が「情報を発信して検索流入を取る」ことなら、SEOとビルド速度に強い構成が向きます。
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">③ チーム — 開発・運用する人数とスキル</h4>
        <p className="mb-4">
          1人で開発・運用するのか、複数人のチームで分担するのかは見落とされがちですが重要です。
          チームに慣れた言語・フレームワークがあるなら、流行よりも「全員が保守できること」を優先したほうが結果的に速いことが多いです。
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">④ 経験 — 自分（チーム）が触ったことがあるか</h4>
        <p className="mb-4">
          新しい技術は魅力的ですが、学習コストと「詰まったときに自力で抜けられるか」を天秤にかける必要があります。
          特に納期が決まっている案件では、未経験技術への挑戦がそのままリスクになります。
        </p>
        {/* TODO:本人記入 ── 経験のない技術に挑戦して苦労した／逆に慣れた技術で乗り切った体験を書く。最低150字。書き下ろし */}

        <h3 className="text-xl font-bold text-ink mt-10 mb-4">Next.js / Laravel / WordPress の使い分け基準</h3>
        <p className="mb-4">
          診断結果によく登場する3つの代表的な選択肢について、一般的な特徴を整理します。
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">Next.js（React系フレームワーク）</h4>
        <p className="mb-4">
          ReactをベースにしたフレームワークでサーバーサイドレンダリングやSSG（静的生成）に対応します。
          表示速度とSEOを両立しやすく、静的エクスポートすればGitHub Pagesなどに無料で公開できます。
          フロントとバックを同じ言語（JavaScript／TypeScript）で書きたい場合に向きます。
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">Laravel（PHPフレームワーク）</h4>
        <p className="mb-4">
          認証・データベース操作・管理画面などを素早く作れる、サーバーサイド主体のフレームワークです。
          ログインや権限管理を伴う業務アプリ、フォームやデータ処理が中心のシステムで力を発揮します。
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-2 text-ink">WordPress（CMS）</h4>
        <p className="mb-4">
          コードを書かずに記事を更新できるCMSです。ブログやコーポレートサイトのように、
          非エンジニアが日常的に更新するメディアに向いています。プラグインで機能を拡張できる一方、保守・セキュリティ対策は別途必要です。
        </p>
        {/* TODO:本人記入 ── 上記3つを実案件でどう使い分けてきたか、自分の基準を書く。例：「制作案件はWordPress、自社ツールはNext.js」など。最低250字。書き下ろし */}

        <h3 className="text-xl font-bold text-ink mt-10 mb-4">案件規模・要件別の選び方</h3>
        {/* TODO:本人記入 ── 「小規模メディア」「ログインありの業務アプリ」「個人開発の副業アプリ」など、要件パターンごとに自分なら何を選ぶかを表や箇条書きで書く。最低400字。実体験ベース・書き下ろし */}
        <p className="mb-4 text-subtle italic">
          （このセクションは運営者が実体験をもとに執筆予定です）
        </p>

        <h3 className="text-xl font-bold text-ink mt-10 mb-4">まとめ</h3>
        <p className="mb-4">
          技術スタックに唯一の正解はありません。規模・目的・チーム・経験という軸で整理し、
          「自分（チーム）が保守し続けられるか」を最後の決め手にするのが現実的です。
          まずは上の診断ツールで、あなたの状況に向いた候補を確認してみてください。
        </p>

        <p className="mt-10 text-sm text-subtle">
          関連記事：
          <a
            href="https://ch-ragge.github.io/blog/posts/tech-stack-advisor-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-accent hover:opacity-80"
          >
            5問診断ツールをClaude Codeで作った【開発記】
          </a>
        </p>
      </article>
      </Reveal>
    </section>
    <SiteFooter />
    </>
  );
}

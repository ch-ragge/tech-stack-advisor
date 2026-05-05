import type { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: "scale",
    text: "プロジェクトの規模は？",
    options: [
      { id: "small", label: "個人・小規模\n（LP・ポートフォリオ・ツール）" },
      { id: "medium", label: "中規模\n（業務システム・SaaS）" },
      { id: "large", label: "大規模\n（エンタープライズ・基盤）" },
    ],
  },
  {
    id: "purpose",
    text: "用途は？",
    options: [
      { id: "web", label: "Webアプリ・サイト" },
      { id: "mobile", label: "スマホアプリ" },
      { id: "infra", label: "インフラ・サーバー構築" },
      { id: "ai", label: "AI・データ活用" },
    ],
  },
  {
    id: "team",
    text: "チームの状況は？",
    options: [
      { id: "solo", label: "ひとり\n（個人開発・副業）" },
      { id: "small_team", label: "小チーム\n（2〜5人）" },
      { id: "large_team", label: "大チーム\n（6人以上）" },
    ],
  },
  {
    id: "priority",
    text: "一番大事にしたいことは？",
    options: [
      { id: "speed", label: "速く作りたい\n（スピード重視）" },
      { id: "stability", label: "安定・保守しやすい\n（品質重視）" },
      { id: "cost", label: "コストを抑えたい\n（無料・低コスト）" },
      { id: "learning", label: "学習しながら進めたい\n（成長重視）" },
    ],
  },
  {
    id: "level",
    text: "あなたの経験レベルは？",
    options: [
      { id: "beginner", label: "初級\n（学習中・実務1年未満）" },
      { id: "mid", label: "中級\n（実務経験1〜5年）" },
      { id: "senior", label: "上級\n（5年以上・設計もできる）" },
    ],
  },
];

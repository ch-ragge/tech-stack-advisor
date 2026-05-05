import type { Answers, TechStack, StackScore } from "@/types/quiz";

export const stacks: TechStack[] = [
  {
    id: "nextjs-pages",
    name: "Next.js + GitHub Pages",
    tagline: "無料・静的・即デプロイ",
    description:
      "バックエンド不要で完全無料。ポートフォリオ・LP・ツール公開に最適。GitHub Pagesで永続無料ホスティング。副業エンジニアの鉄板構成。",
    tags: ["無料", "静的サイト", "個人開発", "副業向き"],
    affiliates: [
      {
        label: "Next.js入門書（Amazon）",
        url: "https://amzn.to/4mNScjV",
        type: "amazon",
      },
      {
        label: "詳しくはnoteで解説中",
        url: "https://note.com/ch_ragga/n/ne2ef5bc2adb0",
        type: "note",
      },
    ],
  },
  {
    id: "nextjs-vercel-supabase",
    name: "Next.js + Vercel + Supabase",
    tagline: "モダンWebアプリの最短構成",
    description:
      "認証・DB・APIを最速で揃えられるモダン構成。Vercel無料枠で小規模なら費用ゼロ。SaaS・業務ツール開発のデファクト。",
    tags: ["Web", "SaaS", "中規模", "モダン"],
    affiliates: [
      {
        label: "Next.js実践本（Amazon）",
        url: "https://amzn.to/4mNScjV",
        type: "amazon",
      },
      {
        label: "Claude Codeで爆速開発",
        url: "https://note.com/ch_ragga/n/ne2ef5bc2adb0",
        type: "note",
      },
    ],
  },
  {
    id: "react-vite-firebase",
    name: "React + Vite + Firebase",
    tagline: "速攻で動くWebアプリ",
    description:
      "Viteで超高速ビルド、Firebaseで認証・DBをゼロ設定。個人開発・ハッカソンに最適。学習コストが低く、初〜中級エンジニアが最初に選ぶべき構成。",
    tags: ["Web", "スピード", "初〜中級", "個人開発"],
    affiliates: [
      {
        label: "React入門（Amazon）",
        url: "https://amzn.to/4mNScjV",
        type: "amazon",
      },
      {
        label: "副業エンジニアのリアル",
        url: "https://note.com/ch_ragga/n/n60c77c9aa0e7",
        type: "note",
      },
    ],
  },
  {
    id: "vue-nuxt",
    name: "Vue.js + Nuxt",
    tagline: "日本語ドキュメントが豊富で学びやすい",
    description:
      "ReactよりシンプルなAPIで学習しやすい。日本企業採用率が高く、国内案件で使いやすい。NuxtでSSR/SSGを柔軟に切り替えられる。",
    tags: ["Web", "学習重視", "日本語資料豊富", "中級"],
    affiliates: [
      {
        label: "Vue.js実践入門（Amazon）",
        url: "https://amzn.to/4mNScjV",
        type: "amazon",
      },
      {
        label: "SE単価を上げる技術選定",
        url: "https://note.com/ch_ragga/n/n60c77c9aa0e7",
        type: "note",
      },
    ],
  },
  {
    id: "fastapi-python",
    name: "FastAPI + Python",
    tagline: "AI・データ活用の最短ルート",
    description:
      "機械学習・データ分析との親和性が最高。OpenAI/Anthropic APIとの連携が容易。型安全なAPIをPythonで高速に構築できる。AI副業・案件獲得の武器になる。",
    tags: ["AI", "データ活用", "中〜上級", "API"],
    affiliates: [
      {
        label: "AIを使って考えるための全技術（Amazon）",
        url: "https://amzn.to/4tg8LHE",
        type: "amazon",
      },
      {
        label: "Claude Code完全活用術",
        url: "https://note.com/ch_ragga/n/ne2ef5bc2adb0",
        type: "note",
      },
    ],
  },
  {
    id: "react-native-expo",
    name: "React Native + Expo",
    tagline: "1つのコードでiOS/Android両対応",
    description:
      "Reactの知識を活かしてスマホアプリを開発。Expoで環境構築が劇的に簡単。App Store/Google Play両対応のアプリを最短で出せる。",
    tags: ["スマホ", "クロスプラットフォーム", "中級", "React経験者向け"],
    affiliates: [
      {
        label: "React Native実践本（Amazon）",
        url: "https://amzn.to/4mNScjV",
        type: "amazon",
      },
      {
        label: "副業エンジニアのリアル",
        url: "https://note.com/ch_ragga/n/n60c77c9aa0e7",
        type: "note",
      },
    ],
  },
  {
    id: "aws-terraform",
    name: "AWS + Terraform",
    tagline: "インフラをコードで管理する",
    description:
      "IaC（Infrastructure as Code）でインフラを自動化。大規模システムの設計・構築に必須。クラウド案件の単価を大幅に上げられる最強構成。",
    tags: ["インフラ", "大規模", "上級", "高単価"],
    affiliates: [
      {
        label: "AWS認定資格対策本（Amazon）",
        url: "https://amzn.to/4tg8LHE",
        type: "amazon",
      },
      {
        label: "インフラSEの単価シミュレーター",
        url: "https://note.com/ch_ragga/n/n60c77c9aa0e7",
        type: "note",
      },
    ],
  },
  {
    id: "docker-kubernetes",
    name: "Docker + Kubernetes",
    tagline: "コンテナでシステムを標準化する",
    description:
      "本番環境の安定運用・スケールに必須のコンテナ技術。CI/CDパイプライン構築と組み合わせてエンタープライズの基盤を担う。DevOpsエンジニアの必須スキル。",
    tags: ["インフラ", "エンタープライズ", "安定", "上級"],
    affiliates: [
      {
        label: "Docker/Kubernetes入門（Amazon）",
        url: "https://amzn.to/4tg8LHE",
        type: "amazon",
      },
      {
        label: "インフラSEの単価を上げる方法",
        url: "https://note.com/ch_ragga/n/n60c77c9aa0e7",
        type: "note",
      },
    ],
  },
];

// スコアリングマトリクス: [stackId]: { answerKey: score }
const scoreMatrix: Record<string, Record<string, number>> = {
  "nextjs-pages": {
    "scale:small": 5,
    "scale:medium": 1,
    "scale:large": 0,
    "purpose:web": 5,
    "purpose:mobile": 0,
    "purpose:infra": 0,
    "purpose:ai": 1,
    "team:solo": 5,
    "team:small_team": 2,
    "team:large_team": 0,
    "priority:speed": 3,
    "priority:stability": 2,
    "priority:cost": 5,
    "priority:learning": 3,
    "level:beginner": 3,
    "level:mid": 4,
    "level:senior": 2,
  },
  "nextjs-vercel-supabase": {
    "scale:small": 3,
    "scale:medium": 5,
    "scale:large": 2,
    "purpose:web": 5,
    "purpose:mobile": 0,
    "purpose:infra": 0,
    "purpose:ai": 2,
    "team:solo": 3,
    "team:small_team": 5,
    "team:large_team": 2,
    "priority:speed": 5,
    "priority:stability": 3,
    "priority:cost": 2,
    "priority:learning": 4,
    "level:beginner": 1,
    "level:mid": 5,
    "level:senior": 3,
  },
  "react-vite-firebase": {
    "scale:small": 5,
    "scale:medium": 3,
    "scale:large": 1,
    "purpose:web": 5,
    "purpose:mobile": 1,
    "purpose:infra": 0,
    "purpose:ai": 2,
    "team:solo": 5,
    "team:small_team": 3,
    "team:large_team": 1,
    "priority:speed": 5,
    "priority:stability": 2,
    "priority:cost": 3,
    "priority:learning": 5,
    "level:beginner": 5,
    "level:mid": 4,
    "level:senior": 2,
  },
  "vue-nuxt": {
    "scale:small": 3,
    "scale:medium": 5,
    "scale:large": 2,
    "purpose:web": 5,
    "purpose:mobile": 0,
    "purpose:infra": 0,
    "purpose:ai": 1,
    "team:solo": 3,
    "team:small_team": 5,
    "team:large_team": 3,
    "priority:speed": 3,
    "priority:stability": 4,
    "priority:cost": 3,
    "priority:learning": 5,
    "level:beginner": 4,
    "level:mid": 5,
    "level:senior": 2,
  },
  "fastapi-python": {
    "scale:small": 2,
    "scale:medium": 5,
    "scale:large": 4,
    "purpose:web": 3,
    "purpose:mobile": 1,
    "purpose:infra": 2,
    "purpose:ai": 5,
    "team:solo": 3,
    "team:small_team": 5,
    "team:large_team": 4,
    "priority:speed": 4,
    "priority:stability": 4,
    "priority:cost": 3,
    "priority:learning": 4,
    "level:beginner": 1,
    "level:mid": 4,
    "level:senior": 5,
  },
  "react-native-expo": {
    "scale:small": 3,
    "scale:medium": 5,
    "scale:large": 2,
    "purpose:web": 0,
    "purpose:mobile": 5,
    "purpose:infra": 0,
    "purpose:ai": 1,
    "team:solo": 4,
    "team:small_team": 5,
    "team:large_team": 2,
    "priority:speed": 4,
    "priority:stability": 3,
    "priority:cost": 2,
    "priority:learning": 4,
    "level:beginner": 2,
    "level:mid": 5,
    "level:senior": 3,
  },
  "aws-terraform": {
    "scale:small": 1,
    "scale:medium": 4,
    "scale:large": 5,
    "purpose:web": 2,
    "purpose:mobile": 1,
    "purpose:infra": 5,
    "purpose:ai": 3,
    "team:solo": 2,
    "team:small_team": 3,
    "team:large_team": 5,
    "priority:speed": 2,
    "priority:stability": 5,
    "priority:cost": 1,
    "priority:learning": 3,
    "level:beginner": 0,
    "level:mid": 3,
    "level:senior": 5,
  },
  "docker-kubernetes": {
    "scale:small": 0,
    "scale:medium": 3,
    "scale:large": 5,
    "purpose:web": 2,
    "purpose:mobile": 1,
    "purpose:infra": 5,
    "purpose:ai": 2,
    "team:solo": 1,
    "team:small_team": 3,
    "team:large_team": 5,
    "priority:speed": 1,
    "priority:stability": 5,
    "priority:cost": 1,
    "priority:learning": 3,
    "level:beginner": 0,
    "level:mid": 2,
    "level:senior": 5,
  },
};

export function getRecommendation(answers: Answers): TechStack {
  const scores: StackScore = {};

  for (const stack of stacks) {
    scores[stack.id] = 0;
  }

  for (const [questionId, optionId] of Object.entries(answers)) {
    const key = `${questionId}:${optionId}`;
    for (const stack of stacks) {
      const matrix = scoreMatrix[stack.id];
      if (matrix && key in matrix) {
        scores[stack.id] += matrix[key];
      }
    }
  }

  const bestId = Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0];
  return stacks.find((s) => s.id === bestId) ?? stacks[0];
}

export function getTopThree(answers: Answers): TechStack[] {
  const scores: StackScore = {};

  for (const stack of stacks) {
    scores[stack.id] = 0;
  }

  for (const [questionId, optionId] of Object.entries(answers)) {
    const key = `${questionId}:${optionId}`;
    for (const stack of stacks) {
      const matrix = scoreMatrix[stack.id];
      if (matrix && key in matrix) {
        scores[stack.id] += matrix[key];
      }
    }
  }

  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([id]) => stacks.find((s) => s.id === id)!)
    .filter(Boolean);
}

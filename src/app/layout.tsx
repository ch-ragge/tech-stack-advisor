import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const URL_SELF = "https://ch-ragge.github.io/tech-stack-advisor/";

export const metadata: Metadata = {
  metadataBase: new URL("https://ch-ragge.github.io/tech-stack-advisor"),
  title: "SE向け技術スタック診断ツール | らがSEブログ",
  description: "5問に答えるだけで、あなたのプロジェクトに最適な技術スタックを診断。Next.js・Laravel・WordPressなどの使い分けも解説。フリーランスSE・副業エンジニア向け完全無料ツール。",
  alternates: { canonical: URL_SELF },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: URL_SELF,
    siteName: "らがSE",
    title: "SE向け技術スタック診断ツール",
    description: "5問に答えるだけで、プロジェクトに最適な技術スタックを診断。完全無料・ブラウザ完結。",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SE向け技術スタック診断ツール",
  url: URL_SELF,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
  description: "5問に答えるだけで、プロジェクトに最適な技術スタックを診断する無料ツール。",
  inLanguage: "ja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable}`}>{children}</body>
    </html>
  );
}

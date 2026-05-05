import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SE向け技術スタック診断ツール | らがSEブログ",
  description: "5問に答えるだけで、あなたのプロジェクトに最適な技術スタックを診断。フリーランスSE・副業エンジニア向け完全無料ツール。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

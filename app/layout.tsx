import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftWithAI — AI Tools for Small Business Owners",
  description: "Step-by-step AI courses built for small business owners. Stop losing customers to tech-savvy competitors. Start using AI today for $75/month.",
  keywords: "AI for small business, AI courses, business automation, AI tools, small business AI",
  openGraph: {
    title: "ShiftWithAI — AI Tools for Small Business Owners",
    description: "Your competitors are already using AI. Are you? Join 500+ small business owners learning AI for $75/month.",
    url: "https://shiftwithai.co",
    siteName: "ShiftWithAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

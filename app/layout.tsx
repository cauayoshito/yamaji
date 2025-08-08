import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Yamaji Studio — Design, Sites e SEO",
  description:
    "Agência digital focada em design estratégico, desenvolvimento de sites e SEO. Portfólio e cases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

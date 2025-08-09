import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Yamaji Studio — Design, Sites e SEO",
  description:
    "Agência digital focada em design estratégico, desenvolvimento de sites e SEO. Portfólio e cases.",
  // cor da barra/aba no mobile
  themeColor: "#000000",
  icons: {
    icon: "/icons/favicon-32.png",
    shortcut: "/icons/favicon-32.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}

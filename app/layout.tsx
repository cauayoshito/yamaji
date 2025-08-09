// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

const SITE_URL = "https://www.yamajistudio.com.br";
const SITE_NAME = "Yamaji Studio";
const SITE_DESC =
  "Agência digital focada em design estratégico, desenvolvimento de sites e SEO. Portfólio e cases.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Design, Sites e SEO`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Design, Sites e SEO`,
    description: SITE_DESC,
    images: [
      {
        url: "/images/logo-yamaji-aqua.jpg", // coloque essa imagem em /public/images/ (1200x630)
        width: 1200,
        height: 630,
        alt: "Yamaji Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Design, Sites e SEO`,
    description: SITE_DESC,
    images: ["/images/logo-yamaji-aqua.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  themeColor: "#19E0CB",
  manifest: "/site.webmanifest",
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

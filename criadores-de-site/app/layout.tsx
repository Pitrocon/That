import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "That Studio — Fábrica de Sites Multi-Nicho | Apple Pro Dark",
  description:
    "Vitrine modular de engenharia web multi-nicho no estilo Apple Pro Dark: design exclusivo por segmento, SEO técnico, WCAG AA e captura validada de leads.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "That Studio — Fábrica de Sites Multi-Nicho",
    description:
      "Sites sob medida com estética Apple Pro Dark, diversidade visual por nicho e captura segura de leads.",
    url: "/",
    siteName: "That Studio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "That Studio — Fábrica de Sites Multi-Nicho",
    description:
      "Engenharia web multi-nicho com estética Apple Pro Dark, SEO técnico e captura validada.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "That Studio — Criadores de Site",
  description:
    "Criação de sites multi-nicho com identidade visual sob medida, SEO técnico, acessibilidade WCAG AA e captura validada de leads.",
  url: siteUrl,
  areaServed: "BR",
  serviceType: "Desenvolvimento Web Multi-Nicho",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-obsidian font-sans text-titanium antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
        {children}
      </body>
    </html>
  );
}

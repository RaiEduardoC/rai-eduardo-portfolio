import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import { PERFIL } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRICAO =
  "Portfólio de Raí Eduardo Cardoso — Analista de Dados Sênior em Logística " +
  "e Business Intelligence. KPIs, OKRs, ETL, Power BI, SQL (Oracle), Python " +
  "e automação de processos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERFIL.nome} | Analista de Dados`,
    template: `%s | ${PERFIL.nome}`,
  },
  description: DESCRICAO,
  applicationName: "Portfólio Raí Eduardo Cardoso",
  authors: [{ name: PERFIL.nome, url: PERFIL.linkedin }],
  creator: PERFIL.nome,
  keywords: [
    "Raí Eduardo Cardoso",
    "Analista de Dados",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Oracle PL/SQL",
    "Python",
    "ETL",
    "KPIs",
    "OKRs",
    "Logística",
    "Automação de Processos",
    "Maringá",
    "Portfólio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: `${PERFIL.nome} — Portfólio`,
    title: `${PERFIL.nome} | ${PERFIL.cargo}`,
    description: DESCRICAO,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERFIL.nome} | ${PERFIL.cargo}`,
    description: DESCRICAO,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0E14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** Dados estruturados (schema.org) — melhora a exibição no Google. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERFIL.nome,
  jobTitle: PERFIL.cargo,
  description: PERFIL.resumo,
  email: `mailto:${PERFIL.email}`,
  url: SITE_URL,
  image: `${SITE_URL}/assets/foto-perfil.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maringá",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  sameAs: [PERFIL.linkedin, PERFIL.github],
  knowsAbout: [
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Oracle PL/SQL",
    "Python",
    "ETL",
    "Análise de Dados",
    "Logística",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
// app/page.tsx

import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

const baseUrl = "https://studiodue.com.ar";

export const metadata: Metadata = {
  title: "Studio Due | Diseño web, branding y marketing digital",
  description:
    "Estudio digital boutique en Buenos Aires especializado en diseño web, branding, gestión de redes sociales y email marketing para marcas argentinas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Studio Due | Diseño web, branding y marketing digital",
    description:
      "Diseño web, branding, redes sociales y email marketing para marcas argentinas que buscan una presencia digital estratégica.",
    url: baseUrl,
    siteName: "Studio Due",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Studio Due - Estudio digital boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Due | Diseño web, branding y marketing digital",
    description:
      "Estudio digital boutique especializado en diseño web, branding, redes sociales y email marketing.",
    images: ["/icon.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
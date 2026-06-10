// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://studiodue.com.ar";

const services = [
  {
    name: "Gestión de redes sociales",
    description:
      "Gestión estratégica de redes sociales para marcas argentinas, incluyendo estrategia de contenido, calendario mensual, diseño de piezas gráficas, copies, publicación, seguimiento y reportes.",
    url: `${baseUrl}/#servicios`,
  },
  {
    name: "Branding",
    description:
      "Desarrollo de identidad visual para marcas, incluyendo benchmarking, estrategia de comunicación, sistema visual, paleta cromática, tipografías y elementos gráficos.",
    url: `${baseUrl}/#servicios`,
  },
  {
    name: "Email marketing",
    description:
      "Diseño y planificación de campañas de email marketing, newsletters, automatizaciones, segmentación de audiencias, copywriting, reportes y optimizaciones.",
    url: `${baseUrl}/#servicios`,
  },
  {
    name: "Diseño y desarrollo web",
    description:
      "Diseño y desarrollo de sitios web responsive, con diseño UI, desarrollo web, animaciones, interacciones, optimización mobile e integración con formularios y herramientas externas.",
    url: `${baseUrl}/#servicios`,
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Studio Due",
  alternateName: "studio due",
  url: baseUrl,
  logo: `${baseUrl}/icon.png`,
  image: `${baseUrl}/icon.png`,
  description:
    "Studio Due es un estudio digital boutique de Argentina especializado en diseño web, branding, gestión de redes sociales y email marketing.",
  email: "info@studiodue.com.ar",
  telephone: "+5491136888661",
  sameAs: ["https://www.instagram.com/studiodue___"],
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  knowsAbout: [
    "Diseño web",
    "Branding",
    "Gestión de redes sociales",
    "Email marketing",
    "Marketing digital",
    "Diseño UI",
    "Comunicación digital",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "Studio Due",
  url: baseUrl,
  image: `${baseUrl}/icon.png`,
  logo: `${baseUrl}/icon.png`,
  description:
    "Estudio digital boutique en Buenos Aires, Argentina, especializado en diseño web, branding, redes sociales y email marketing.",
  email: "info@studiodue.com.ar",
  telephone: "+5491136888661",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Argentina",
    },
    {
      "@type": "City",
      name: "Buenos Aires",
    },
  ],
  sameAs: ["https://www.instagram.com/studiodue___"],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#professionalservice`,
  name: "Studio Due",
  url: baseUrl,
  image: `${baseUrl}/icon.png`,
  description:
    "Servicios profesionales de diseño web, branding, gestión de redes sociales y email marketing para empresas y marcas argentinas.",
  email: "info@studiodue.com.ar",
  telephone: "+5491136888661",
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  provider: {
    "@id": `${baseUrl}/#organization`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Studio Due",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: "Studio Due",
  alternateName: "studio due",
  url: baseUrl,
  inLanguage: "es-AR",
  publisher: {
    "@id": `${baseUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${baseUrl}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: baseUrl,
    },
  ],
};

const serviceSchemas = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}/#service-${service.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`,
  name: service.name,
  description: service.description,
  url: service.url,
  provider: {
    "@id": `${baseUrl}/#organization`,
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: service.name,
}));

const jsonLd = [
  organizationSchema,
  localBusinessSchema,
  professionalServiceSchema,
  websiteSchema,
  breadcrumbSchema,
  ...serviceSchemas,
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Studio Due | Diseño web, branding y marketing digital",
    template: "%s | Studio Due",
  },
  description:
    "Studio Due es un estudio digital boutique de Buenos Aires especializado en diseño web, branding, gestión de redes sociales y email marketing para marcas argentinas.",
  applicationName: "Studio Due",
  authors: [{ name: "Studio Due", url: baseUrl }],
  creator: "Studio Due",
  publisher: "Studio Due",
  category: "Marketing digital",
  keywords: [
    "Studio Due",
    "studio due",
    "estudio digital",
    "agencia de marketing boutique",
    "diseño web Argentina",
    "diseño web Buenos Aires",
    "branding Argentina",
    "gestión de redes sociales",
    "email marketing",
    "agencia creativa Buenos Aires",
    "marketing digital Argentina",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: baseUrl,
    siteName: "Studio Due",
    title: "Studio Due | Diseño web, branding y marketing digital",
    description:
      "Estudio digital boutique especializado en diseño web, branding, redes sociales y email marketing para marcas argentinas.",
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
      "Estudio digital boutique especializado en diseño web, branding, redes sociales y email marketing para marcas argentinas.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col">
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
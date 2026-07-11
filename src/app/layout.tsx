import type { Metadata } from "next";
import { Playfair_Display, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-vibes",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theskinateliere.com"),
  title: "The Skin Ateliere | Best Beauty Parlour & Salon in Medinipur",
  description: "Experience premium beauty & wellness at The Skin Ateliere, Keranitola, Medinipur. Bridal makeup, expert hair styling, facials, nail art & spa. Book your luxury experience today!",
  keywords: [
    "Best Beauty Parlour in Medinipur",
    "Best Salon in Medinipur",
    "Bridal Makeup Artist in Medinipur",
    "Hair Spa Near Me",
    "Beauty Parlour Near Me",
    "The Skin Ateliere",
    "Midnapore Salon"
  ],
  authors: [{ name: "The Skin Ateliere" }],
  openGraph: {
    title: "The Skin Ateliere | Best Beauty Parlour & Salon in Medinipur",
    description: "Premium beauty services in Medinipur. Bridal makeup, hair care, skin therapy & nail styling. ⭐ 4.9 rated. Book appointment.",
    url: "https://theskinateliere.com",
    siteName: "The Skin Ateliere",
    images: [
      {
        url: "/images/salon-front.jpeg",
        width: 1200,
        height: 630,
        alt: "The Skin Ateliere Salon Front View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema markup data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "The Skin Ateliere",
    "image": "https://theskinateliere.com/images/salon-front.jpeg",
    "priceRange": "$$",
    "telephone": "+919134161165",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Midnapore Railway Station Road, Ashok Nagar, Keranitola",
      "addressLocality": "Medinipur",
      "addressRegion": "West Bengal",
      "postalCode": "721101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.4298541,
      "longitude": 87.3097561
    },
    "url": "https://theskinateliere.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What bridal packages does The Skin Ateliere offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer premium bridal packages including Bengali Traditional Bridal Makeup, Reception HD Makeup, Airbrush Makeup, pre-bridal grooming treatments, and hair styling. Services can be customized based on requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the salon located in Medinipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at Midnapore Railway Station Road, Ashok Nagar, Keranitola, Medinipur, West Bengal 721101. It is very close to the railway station and easily accessible."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book directly via the website's booking form, call us at +91 91341 61165, or drop us a WhatsApp message. Walk-ins are subject to availability."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${greatVibes.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-bg-cream text-text-dark">
        {children}
      </body>
    </html>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { Plants } from "@/components/sections/Plants";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { siteContent } from "@/content/site-content";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteContent.business.name,
    image: "/images/logo.png",
    description: siteContent.seo.description,
    telephone: siteContent.business.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
      streetAddress: siteContent.business.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.8984706,
      longitude: 46.6249185,
    },
    hasMap: siteContent.business.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "00:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "12:30",
        closes: "00:30",
      },
    ],
    url: "/",
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Plants />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickIntentNavigator } from "@/components/sections/QuickIntentNavigator";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Plants } from "@/components/sections/Plants";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { siteContent } from "@/content/site-content";

export default function HomePage() {
  const { business, seo, faq, services } = siteContent;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. GardenStore & LocalBusiness Entity
      {
        "@type": ["GardenStore", "LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://emma-nursery.sa/#business",
        name: business.name,
        alternateName: [business.nameShort, "Emma Smile Agricultural Nursery", "مشتل بصمة ايما"],
        url: "https://emma-nursery.sa",
        logo: "https://emma-nursery.sa/images/logo.png",
        image: "https://emma-nursery.sa/images/nursery-greenhouse.jpg",
        description: seo.description,
        telephone: business.phone,
        priceRange: "$$",
        currenciesAccepted: "SAR",
        paymentAccepted: "Cash, Credit Card, Mada, Apple Pay",
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address,
          addressLocality: "الرياض",
          addressRegion: "منطقة الرياض",
          addressCountry: "SA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.8984706,
          longitude: 46.6249185,
        },
        hasMap: business.googleMapsUrl,
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
        areaServed: [
          {
            "@type": "City",
            name: "الرياض",
          },
          {
            "@type": "AdministrativeArea",
            name: "منطقة الرياض",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات بصمة ايما الزراعية",
          itemListElement: services.items.map((s, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
            },
            position: idx + 1,
          })),
        },
      },

      // 2. FAQ Rich Snippet Schema (Google Search Accordion)
      {
        "@type": "FAQPage",
        "@id": "https://emma-nursery.sa/#faq",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },

      // 3. BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://emma-nursery.sa/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://emma-nursery.sa",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "موسوعة نباتات الرياض",
            item: "https://emma-nursery.sa/projects",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />
      <main>
        <Hero />
        <QuickIntentNavigator />
        <About />
        <Services />
        <Plants />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

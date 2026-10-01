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
    description: siteContent.seo.description,
    telephone: siteContent.business.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
      streetAddress: siteContent.business.address,
    },
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

import { pageMetadata } from "@/lib/seo";
import { corePages } from "@/content/page-info";
export const metadata = pageMetadata(corePages.home);
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickIntentNavigator } from "@/components/sections/QuickIntentNavigator";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Plants } from "@/components/sections/Plants";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/ui/JsonLd";
import { homeSchema } from "@/lib/structured-data";
import { readSiteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema(readSiteConfig().origin)} />
      <Header />
      <main id="main-content" tabIndex={-1}>
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

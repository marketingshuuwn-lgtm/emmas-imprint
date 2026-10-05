import { siteContent } from "@/content/site-content";
import { businessHours } from "@/content/business-hours";
import { corePages } from "@/content/page-info";
import type { PlantPageContent } from "@/content/plant-pages";
import type { CatalogPlant } from "@/content/plants-catalog-data";
import { siteUrl } from "@/lib/site-config";

type Node = Record<string, unknown>;
const id = (path: string, origin?: string) => siteUrl(path, origin);

export function businessSchema(origin?: string): Node {
  const { business } = siteContent;
  return {
    "@type": "GardenStore", "@id": id("/#business", origin), name: business.name, alternateName: business.nameShort,
    url: id("/", origin), logo: id(business.logo ?? "/images/logo.png", origin), description: corePages.home.description,
    telephone: business.phone,
    address: { "@type": "PostalAddress", streetAddress: business.address, addressLocality: "الرياض", addressCountry: "SA" },
    geo: { "@type": "GeoCoordinates", latitude: business.coordinates.latitude, longitude: business.coordinates.longitude },
    hasMap: business.googleMapsUrl,
    openingHoursSpecification: businessHours.map(hours => ({ "@type": "OpeningHoursSpecification", dayOfWeek: hours.days.map(day => `https://schema.org/${day}`), opens: hours.opens, closes: hours.closes })),
    areaServed: { "@type": "City", name: "الرياض" },
  };
}

function common(origin?: string): Node[] {
  return [businessSchema(origin), { "@type": "WebSite", "@id": id("/#website", origin), url: id("/", origin), name: siteContent.business.name,
    inLanguage: "ar-SA", publisher: { "@id": id("/#business", origin) } }];
}

export function breadcrumbSchema(items: { name: string; path: string }[], path: string, origin?: string): Node {
  return { "@type": "BreadcrumbList", "@id": id(`${path}#breadcrumb`, origin), itemListElement: items.map((item, index) => ({
    "@type": "ListItem", position: index + 1, name: item.name, item: id(item.path, origin),
  })) };
}

function webPage(page: { path: string; title: string; description: string }, type: string, origin?: string): Node {
  return { "@type": type, "@id": id(`${page.path}#webpage`, origin), url: id(page.path, origin), name: page.title, description: page.description,
    inLanguage: "ar-SA", isPartOf: { "@id": id("/#website", origin) }, about: { "@id": id("/#business", origin) } };
}
const graph = (nodes: Node[]) => ({ "@context": "https://schema.org", "@graph": nodes });
const homeCrumb = { name: "الرئيسية", path: "/" };

export function homeSchema(origin?: string) {
  return graph([...common(origin), webPage(corePages.home, "WebPage", origin), {
    "@type": "FAQPage", "@id": id("/#faq", origin), url: id("/#faq", origin), isPartOf: { "@id": id("/#webpage", origin) },
    mainEntity: siteContent.faq.items.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  }]);
}

function plantList(plants: { name: string }[]): Node {
  return { "@type": "ItemList", name: "خيارات النباتات المعروضة", numberOfItems: plants.length,
    itemListElement: plants.map((plant, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Thing", name: plant.name } })) };
}

export function catalogSchema(visiblePlants: CatalogPlant[], origin?: string) {
  return graph([...common(origin), {
    ...webPage(corePages.catalog, "CollectionPage", origin), mainEntity: plantList(visiblePlants), breadcrumb: { "@id": id("/plants#breadcrumb", origin) },
  }, breadcrumbSchema([homeCrumb, { name: "دليل النباتات", path: "/plants" }], "/plants", origin)]);
}

export function plantPageSchema(page: PlantPageContent, origin?: string) {
  const path = `/plants/${page.slug}`;
  const nodes: Node[] = [...common(origin), {
    ...webPage({ ...page, path }, "CollectionPage", origin), mainEntity: plantList(page.plants), breadcrumb: { "@id": id(`${path}#breadcrumb`, origin) },
  }, breadcrumbSchema([homeCrumb, { name: "دليل النباتات", path: "/plants" }, { name: page.label, path }], path, origin)];
  if (page.slug === "offices") nodes.push({ "@type": "Service", "@id": id(`${path}#service`, origin), url: id(path, origin), name: "تنسيق نباتات المكاتب", description: page.introduction,
    provider: { "@id": id("/#business", origin) }, areaServed: { "@type": "City", name: "الرياض" } });
  return graph(nodes);
}

export function servicesSchema(origin?: string) {
  const services = siteContent.services.items.map(service => ({ "@type": "Service", "@id": id(`/services#${service.id}`, origin),
    url: id(`/services#${service.id}`, origin), name: service.title, description: service.description, serviceType: service.title,
    provider: { "@id": id("/#business", origin) }, areaServed: { "@type": "City", name: "الرياض" },
  }));
  return graph([...common(origin), { ...webPage(corePages.services, "WebPage", origin),
    breadcrumb: { "@id": id("/services#breadcrumb", origin) }, mainEntity: { "@type": "ItemList", numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@id": service["@id"] } })) } },
    breadcrumbSchema([homeCrumb, { name: "خدمات الحدائق", path: "/services" }], "/services", origin), ...services]);
}

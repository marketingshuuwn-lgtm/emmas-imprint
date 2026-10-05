import { plantsData } from "@/content/featured-plants";
import { allPlantsCatalog } from "@/content/plants-catalog-data";
import { PlantTabs } from "./PlantTabs";

export function Plants() {
  const plants = plantsData.map(item => {
    const photo = allPlantsCatalog.find(plant => plant.name === item.catalogName);
    return { ...item, image: photo?.image, imageCredit: photo?.imageCredit };
  });
  return <PlantTabs plants={plants} />;
}

import { AllCategoryData } from "@/data/AllCategoryData";
import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

export function TopCategories() {
  return <ReusableCategoryCard topBanner={AllCategoryData.topCategories} />;
}

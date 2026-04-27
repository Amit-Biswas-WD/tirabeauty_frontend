import { AllCategoryData } from "@/data/AllCategoryData";
import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

export const TopCategories = () => {
  return <ReusableCategoryCard topBanner={AllCategoryData.topCategories} />;
};

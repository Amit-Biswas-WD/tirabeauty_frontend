"use client";

import { AllCategoryData } from "@/data/AllCategoryData";
import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

export const TrendingCategoriesSection = () => {
  return (
    <div>
      <ReusableCategoryCard
        headingTitle="Trending Categories"
        topBanner={AllCategoryData.trending}
      />
    </div>
  );
};

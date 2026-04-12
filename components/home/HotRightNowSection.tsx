"use client";

import { AllCategoryData } from "@/data/AllCategoryData";
import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

export const HotRightNowSection = () => {
  return (
    <ReusableCategoryCard
      headingTitle="Hot Right Now"
      topBanner={AllCategoryData.hotRightNow}
      responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
      height={210}
    />
  );
};

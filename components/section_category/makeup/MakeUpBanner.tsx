"use client";

import { ReusableHeroBanner } from "@/components/common/ReusableHeroBanner";
import { sectionCategoryData } from "@/data/section_category/section_category";

export const MakeUpBanner = () => {
  const banners = sectionCategoryData.makeup;

  return (
    <div>
      <ReusableHeroBanner banners={banners} />
    </div>
  );
};

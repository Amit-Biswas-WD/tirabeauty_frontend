"use client";

import { ReusableHeroBanner } from "@/components/common/ReusableHeroBanner";
import { sectionCategoryData } from "@/data/section_category/section_category";

export const MenBanner = () => {
  const banners = sectionCategoryData.men;

  return (
    <div>
      <ReusableHeroBanner banners={banners} />
    </div>
  );
};

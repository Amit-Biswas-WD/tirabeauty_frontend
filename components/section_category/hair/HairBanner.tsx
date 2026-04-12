"use client";

import { ReusableHeroBanner } from "@/components/common/ReusableHeroBanner";
import { sectionCategoryData } from "@/data/section_category/section_category";

export const HairBanner = () => {
  const banners = sectionCategoryData.hair;

  return (
    <div>
      <ReusableHeroBanner banners={banners} />
    </div>
  );
};

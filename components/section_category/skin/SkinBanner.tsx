"use client";

import { ReusableHeroBanner } from "@/components/common/ReusableHeroBanner";
import { sectionCategoryData } from "@/data/section_category/section_category";

export const SkinBanner = () => {
  const banners = sectionCategoryData.skin;

  return (
    <div>
      <ReusableHeroBanner banners={banners} />
    </div>
  );
};

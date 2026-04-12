"use client";

import { ReusableHeroBanner } from "@/components/common/ReusableHeroBanner";
import { sectionCategoryData } from "@/data/section_category/section_category";

export const BathBodyBanner = () => {
  const banners = sectionCategoryData.bath_body;

  return (
    <div>
      <ReusableHeroBanner banners={banners} />
    </div>
  );
};

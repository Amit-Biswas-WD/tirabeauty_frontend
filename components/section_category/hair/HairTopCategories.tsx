"use client";

import { ReusableCategoryCard } from "@/components/common/ReusableCategoryCard";
import { CollectionImgData } from "@/data/section_category/collection_img";

export const HairTopCategories = () => {
  return (
    <div>
      <ReusableCategoryCard
        topBanner={CollectionImgData.hair}
        headingTitle="Hair Top Categories"
        responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
        height={210}
      />
    </div>
  );
};

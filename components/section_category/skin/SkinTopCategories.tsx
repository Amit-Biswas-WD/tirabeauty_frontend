"use client";

import { ReusableCategoryCard } from "@/components/common/ReusableCategoryCard";
import { CollectionImgData } from "@/data/section_category/collection_img";

export const SkinTopCategories = () => {
  return (
    <div>
      <ReusableCategoryCard
        topBanner={CollectionImgData.skin}
        headingTitle="Skin Top Categories"
        responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
        height={210}
      />
    </div>
  );
};

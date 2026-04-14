"use client";

import { ReusableCategoryCard } from "@/components/common/ReusableCategoryCard";
import { AllBrandCollection } from "@/data/AllBrandCollection";

export const MakeUpBeautyOffer = () => {
  return (
    <div>
      <ReusableCategoryCard
        topBanner={AllBrandCollection.makeUp}
        headingTitle="Best Of Beauty On Offer"
        responsive={{ xl: 3, lg: 3, md: 2, sm: 1.5 }}
        height={`lg:h-[280px] md:h-[250px] sm:h-[220px] h-[200px]`}
      />
    </div>
  );
};

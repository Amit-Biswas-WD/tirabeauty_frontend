"use client";

import { ReusableFeaturedProducts } from "@/components/common/ReusableFeaturedProducts";
import { AllProductData } from "@/data/AllProductData";

export const MakeupProductCard = () => {
  return (
    <ReusableFeaturedProducts
      productData={AllProductData.makeUp}
      headingTitle="Makeup Finds For You"
    />
  );
};

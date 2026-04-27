"use client";

import { ReusableFeaturedProducts } from "@/components/common/ReusableFeaturedProducts";
import { AllProductData } from "@/data/AllProductData";

export const HairProductCard = () => {
  return (
    <ReusableFeaturedProducts
      productData={AllProductData.hair}
      headingTitle="Curated For Your Hair"
    />
  );
};

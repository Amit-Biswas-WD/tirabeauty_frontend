"use client";

import { ReusableFeaturedProducts } from "@/components/common/ReusableFeaturedProducts";
import { AllProductData } from "@/data/AllProductData";

export const SkinProductCard = () => {
  return (
    <ReusableFeaturedProducts
      productData={AllProductData.skin}
      headingTitle="Skincare Finds For You"
    />
  );
};

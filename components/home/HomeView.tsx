import React from "react";
import { TopCategories } from "@/components/layout/TopCategories";
import { BannerSection } from "./BannerSection";
import { YourWishlist } from "./YourWishlist";
import { PromoBanner } from "./PromoBanner";
import FeaturedProduct from "./FeaturedProduct";
import { NewBrandCardSection } from "./NewBrandCardSection";
import { BrandsKnowSection } from "./BrandsKnowSection";

const HomeView: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <TopCategories />
      <PromoBanner />
      <YourWishlist />
      <FeaturedProduct />
      <NewBrandCardSection />
      <BrandsKnowSection />
    </div>
  );
};

export default HomeView;

import React from "react";
import { TopCategories } from "@/components/layout/TopCategories";
import { BannerSection } from "./BannerSection";
import { YourWishlist } from "./YourWishlist";
import { PromoBanner } from "./PromoBanner";
import FeaturedProduct from "./FeaturedProduct";
import { NewBrandCardSection } from "./NewBrandCardSection";

const HomeView: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <TopCategories />
      <PromoBanner />
      <YourWishlist />
      <FeaturedProduct />
      <NewBrandCardSection />
    </div>
  );
};

export default HomeView;

import React from "react";
import { TopCategories } from "@/components/layout/TopCategories";
import { BannerSection } from "./BannerSection";
import { YourWishlist } from "./YourWishlist";
import { PromoBanner } from "./PromoBanner";

const HomeView: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <TopCategories />
      <PromoBanner />
      <YourWishlist />
    </div>
  );
};

export default HomeView;

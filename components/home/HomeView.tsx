import React from "react";
import { TopCategories } from "@/components/layout/TopCategories";
import { BannerSection } from "./BannerSection";
import { YourWishlist } from "./YourWishlist";

const HomeView: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <TopCategories />
      <YourWishlist />
    </div>
  );
};

export default HomeView;

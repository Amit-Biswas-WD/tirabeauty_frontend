import React from "react";
import { TopCategories } from "@/components/layout/TopCategories";
import { BannerSection } from "./BannerSection";

const HomeView: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <TopCategories />
    </div>
  );
};

export default HomeView;

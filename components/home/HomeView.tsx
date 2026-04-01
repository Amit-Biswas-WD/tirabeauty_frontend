import React from "react";
import { TopCategories } from "@/components/layout/TopCategories";
import { BannerSection } from "./BannerSection";
import { YourWishlist } from "./YourWishlist";
import { PromoBanner } from "./PromoBanner";
import FeaturedProduct from "./FeaturedProduct";
import { NewBrandCardSection } from "./NewBrandCardSection";
import { BrandsKnowSection } from "./BrandsKnowSection";
import { TopShelfSection } from "./TopShelfSection";
import { BenefitBarSection } from "./BenefitBarSection";
import { ChatNowSection } from "./ChatNowSection";
import { ChosenProductSection } from "./ChosenProductSection";
import { CollectionSection } from "./CollectionSection";
import { TrendingCategoriesSection } from "./TrendingCategoriesSection";
import { DiscountImageSection } from "./DiscountImageSection";
import { BrandToWatchSection } from "./BrandToWatchSection";
import { OnlyTiraSection } from "./OnlyTiraSection";
import { JustDroppedSection } from "./JustDroppedSection";
import { HotRightNowSection } from "./HotRightNowSection";

const HomeView: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <TopCategories />
      <PromoBanner />
      <YourWishlist />
      <ChosenProductSection />
      <CollectionSection />
      <TrendingCategoriesSection />
      <DiscountImageSection />
      <FeaturedProduct />
      <NewBrandCardSection />
      <BrandToWatchSection />
      <HotRightNowSection />
      <BrandsKnowSection />
      <JustDroppedSection />
      <TopShelfSection />
      <OnlyTiraSection />
      <ChatNowSection />
      <BenefitBarSection />
    </div>
  );
};

export default HomeView;

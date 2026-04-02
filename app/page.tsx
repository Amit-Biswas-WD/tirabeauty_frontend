"use client";

import { BannerSection } from "@/components/home/BannerSection";
import { BenefitBarSection } from "@/components/home/BenefitBarSection";
import { BrandsKnowSection } from "@/components/home/BrandsKnowSection";
import { BrandToWatchSection } from "@/components/home/BrandToWatchSection";
import { ChatNowSection } from "@/components/home/ChatNowSection";
import { ChosenProductSection } from "@/components/home/ChosenProductSection";
import { CollectionSection } from "@/components/home/CollectionSection";
import { DiscountImageSection } from "@/components/home/DiscountImageSection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import { HotRightNowSection } from "@/components/home/HotRightNowSection";
import { JustDroppedSection } from "@/components/home/JustDroppedSection";
import { NewBrandCardSection } from "@/components/home/NewBrandCardSection";
import { OnlyTiraSection } from "@/components/home/OnlyTiraSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { TopShelfSection } from "@/components/home/TopShelfSection";
import { TrendingCategoriesSection } from "@/components/home/TrendingCategoriesSection";
import { YourWishlist } from "@/components/home/YourWishlist";
import { TopCategories } from "@/components/home/TopCategories";
import { JSX } from "react";

export default function HomeView(): JSX.Element {
  return (
    <div className="">
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
}

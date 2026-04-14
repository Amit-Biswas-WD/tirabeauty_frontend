"use client";

import { MakeUpArticle } from "@/components/section_category/makeup/MakeUpArticle";
import { MakeUpBanner } from "@/components/section_category/makeup/MakeUpBanner";
import { MakeUpBeautyOffer } from "@/components/section_category/makeup/MakeUpBeautyOffer";
import { MakeupProductCard } from "@/components/section_category/makeup/MakeupProductCard";
import { MakeUpTopCategories } from "@/components/section_category/makeup/MakeUpTopCategories";

export default function MakeupPage() {
  return (
    <div>
      <MakeUpBanner />
      <MakeUpTopCategories />
      <MakeupProductCard />
      <MakeUpBeautyOffer />
      <MakeUpArticle />
    </div>
  );
}

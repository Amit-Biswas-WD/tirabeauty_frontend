"use client";

import { MakeUpBanner } from "@/components/section_category/makeup/MakeUpBanner";
import { MakeUpTopCategories } from "@/components/section_category/makeup/MakeUpTopCategories";
import { SkinProductCard } from "@/components/section_category/skin/SkinProductCard";

export default function MakeupPage() {
  return (
    <div>
      <MakeUpBanner />
      <MakeUpTopCategories />
      <SkinProductCard/>
    </div>
  );
}

"use client";

import { MakeUpBanner } from "@/components/section_category/makeup/MakeUpBanner";
import { MakeupProductCard } from "@/components/section_category/makeup/MakeupProductCard";
import { MakeUpTopCategories } from "@/components/section_category/makeup/MakeUpTopCategories";

export default function MakeupPage() {
  return (
    <div>
      <MakeUpBanner />
      <MakeUpTopCategories />
      <MakeupProductCard/>
    </div>
  );
}

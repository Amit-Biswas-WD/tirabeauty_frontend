"use client";

import { ManProductCard } from "@/components/section_category/men/ManProductCard";
import { MenBanner } from "@/components/section_category/men/MenBanner";
import { MenTopCategories } from "@/components/section_category/men/MenTopCategories";

export default function MenPage() {
  return (
    <div>
      <MenBanner />
      <MenTopCategories />
      <ManProductCard/>
    </div>
  );
}

"use client";

import { ManProductCard } from "@/components/section_category/man/ManProductCard";
import { MenBanner } from "@/components/section_category/man/MenBanner";
import { MenTopCategories } from "@/components/section_category/man/MenTopCategories";

export default function MenPage() {
  return (
    <div>
      <MenBanner />
      <MenTopCategories />
      <ManProductCard />
    </div>
  );
}

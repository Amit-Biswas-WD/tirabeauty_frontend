"use client";

import { HairBanner } from "@/components/section_category/hair/HairBanner";
import { HairProductCard } from "@/components/section_category/hair/HairProductCard";
import { HairTopCategories } from "@/components/section_category/hair/HairTopCategories";

export default function HairPage() {
  return (
    <div>
      <HairBanner />
      <HairTopCategories />
      <HairProductCard/>
    </div>
  );
}

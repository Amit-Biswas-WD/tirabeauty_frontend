"use client";

import { SkinBanner } from "@/components/section_category/skin/SkinBanner";
import { SkinProductCard } from "@/components/section_category/skin/SkinProductCard";
import { SkinTopCategories } from "@/components/section_category/skin/SkinTopCategories";

export default function SkinPage() {
  return (
    <div>
      <SkinBanner />
      <SkinTopCategories />
      <SkinProductCard/>
    </div>
  );
}

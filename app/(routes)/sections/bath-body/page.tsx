import { BathBodyBanner } from "@/components/section_category/bath_body/BathBodyBanner";
import { BathBodyTopCategories } from "@/components/section_category/bath_body/BathBodyTopCategories";
import { BothBodyProductCard } from "@/components/section_category/bath_body/BothBodyProductCard";

export default function BathBodyPage() {
  return (
    <div>
      <BathBodyBanner />
      <BathBodyTopCategories />
      <BothBodyProductCard/>
    </div>
  );
}

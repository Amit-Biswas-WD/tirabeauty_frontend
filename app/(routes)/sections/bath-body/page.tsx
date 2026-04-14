import { BathBodyBanner } from "@/components/section_category/bath_body/BathBodyBanner";
import { BathBodyTopCategories } from "@/components/section_category/bath_body/BathBodyTopCategories";
import { BothBodyArticle } from "@/components/section_category/bath_body/BothBodyArticle";
import { BothBodyProductCard } from "@/components/section_category/bath_body/BothBodyProductCard";

export default function BathBodyPage() {
  return (
    <div>
      <BathBodyBanner />
      <BathBodyTopCategories />
      <BothBodyProductCard />
      <BothBodyArticle />
    </div>
  );
}

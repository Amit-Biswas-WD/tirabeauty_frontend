import { AllCategoryData } from "@/data/AllCategoryData";
import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

export function YourWishlist() {
  return (
    <ReusableCategoryCard
      headingTitle="For Your Wishlist"
      topBanner={AllCategoryData.wishlist}
      responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
      height={210}
    />
  );
}

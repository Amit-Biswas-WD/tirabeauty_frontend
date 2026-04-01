import React from "react";
import { ReusableNewBrandCard } from "../common/ReusableNewBrandCard";

const newBrandData = [
  {
    id: 1,
    brand: "Spritz by Typsy",
    category: "Fragrance",
    tagline: "Diverse notes",
    description:
      "A collection of lasting, luxury fragrances crafted for every mood",
    offer: null,
    image_path: "/images/home/new_brand/image1.jpeg",
  },
  {
    id: 2,
    brand: "Kryolan",
    category: "Makeup",
    tagline: "Lasting formulas",
    description: "Pro makeup loved by backstage artists",
    offer: "up to 10% off",
    image_path: "/images/home/new_brand/image2.jpeg",
  },
  {
    id: 3,
    brand: "Celimax",
    category: "Skincare",
    tagline: "Sensitive skin",
    description: "Discover research-backed & gentle formulations",
    offer: "up to 10% off",
    image_path: "/images/home/new_brand/image3.jpeg",
  },
  {
    id: 4,
    brand: "Manetain",
    category: "Haircare",
    tagline: "Gentle formulas",
    description: "Explore effective haircare for strong, sleek hair",
    offer: "up to 15% off",
    image_path: "/images/home/new_brand/image4.jpeg",
  },
];

export const NewBrandCardSection: React.FC = () => {
  return (
    <div>
      <ReusableNewBrandCard
        cardData={newBrandData}
        headingTitle="New On Tira"
      />
    </div>
  );
};

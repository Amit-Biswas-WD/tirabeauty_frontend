"use client";

import { ReusableBrandsKnowCard } from "../common/ReusableBrandsKnowCard";

const brandsKnowData = [
  {
    id: 1,
    image: "/images/home/brands_know/image1.jpeg",
    title: "Refreshing masks, mists & more - up to 10% off",
  },
  {
    id: 2,
    image: "/images/home/brands_know/image2.jpeg",
    title:
      "Explore iconic beauty finds for your next haul. This is a very long title for testing purposes.",
  },
  {
    id: 3,
    image: "/images/home/brands_know/image3.jpeg",
    title: "Discover French beauty finds for your vanity",
  },
];

export const BrandsKnowSection = () => {
  return <ReusableBrandsKnowCard brandKnowData={brandsKnowData} />;
};

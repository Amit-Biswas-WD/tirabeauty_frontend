"use client";

import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

const topBanner = [
  {
    id: 1,
    title: "Wedding",
    image: "/images/home/trending_categories_section/image1.jpeg",
  },
  {
    id: 2,
    title: "Homegrown",
    image: "/images/home/trending_categories_section/image2.jpeg",
  },
  {
    id: 3,
    title: "Gen Z",
    image: "/images/home/trending_categories_section/image3.jpeg",
  },
  {
    id: 4,
    title: "Festive Faves",
    image: "/images/home/trending_categories_section/image4.jpeg",
  },
  {
    id: 5,
    title: "Derm 101",
    image: "/images/home/trending_categories_section/image5.jpeg",
  },
  {
    id: 6,
    title: "K-Beauty",
    image: "/images/home/trending_categories_section/image6.jpeg",
  },
];

export const TrendingCategoriesSection = () => {
  return (
    <div>
      <ReusableCategoryCard
        headingTitle="Trending Categories"
        topBanner={topBanner}
      />
    </div>
  );
};

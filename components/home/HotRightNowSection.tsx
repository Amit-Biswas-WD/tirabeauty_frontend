"use client";

import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

const topBanner = [
  {
    id: 1,
    category: "Bond Repair Era",
    title: "Cold-weather care for stronger, smoother hair",
    image: "/images/home/hot_right_section/image1.jpeg",
  },
  {
    id: 2,
    category: "Spicy Scents",
    title: "Cozy, sultry scents made for the holiday szn",
    image: "/images/home/hot_right_section/image2.jpeg",
  },
  {
    id: 3,
    category: "Toasted Beauty",
    title: "Warm bronzed hues to create a sun-kissed glow",
    image: "/images/home/hot_right_section/image3.jpeg",
  },
  {
    id: 4,
    category: "Nostalgic Scents",
    title: "Scents that take you back",
    image: "/images/home/hot_right_section/image4.jpeg",
  },
  {
    id: 5,
    category: "Moisture Layering",
    title: "Layer hydrating essentials for lasting everyday comfort",
    image: "/images/home/hot_right_section/image5.jpeg",
  },
  {
    id: 6,
    category: "Chrome Eyes",
    title: "High-shine lids that catch the light all night long",
    image: "/images/home/hot_right_section/image6.jpeg",
  },
];

export const HotRightNowSection = () => {
  return (
    <ReusableCategoryCard
      headingTitle="Hot Right Now"
      topBanner={topBanner}
      responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
      height={210}
    />
  );
};

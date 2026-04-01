"use client";
import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

const topBanner = [
  {
    id: 1,
    title: "Min. 5% off",
    image: "/images/home/brand_watch/image1.webp",
  },
  {
    id: 2,
    title: "Up to 25% off",
    image: "/images/home/brand_watch/image2.webp",
  },
  {
    id: 3,
    title: "Free sample on all orders",
    image: "/images/home/brand_watch/image3.webp",
  },
  {
    id: 4,
    title: "Flat 10% off",
    image: "/images/home/brand_watch/image4.webp",
  },
  {
    id: 5,
    title: "Bath-and-Body",
    image: "/images/home/brand_watch/image5.webp",
  },
  {
    id: 6,
    title: "Explore glam that delivers",
    image: "/images/home/brand_watch/image6.webp",
  },
  {
    id: 7,
    title: "Up to 50% off",
    image: "/images/home/brand_watch/image7.webp",
  },
  {
    id: 8,
    title: "Up to 50% off",
    image: "/images/home/brand_watch/image8.webp",
  },
];

export const BrandToWatchSection = () => {
  return (
    <ReusableCategoryCard
      headingTitle="Brands To Watch"
      topBanner={topBanner}
      responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
      height={210}
    />
  );
};

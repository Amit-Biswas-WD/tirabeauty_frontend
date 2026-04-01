"use client";

import { ReusableHeroBanner } from "../common/ReusableHeroBanner";

const bannerData = [
  {
    src: "/images/home/collection_section/image1.webp",
    link: "/collection/makeup-face-blush",
  },
  {
    src: "/images/home/collection_section/image2.jpeg",
    link: "/collection/skin-sun-care-sunscreen",
  },
];

export const CollectionSection = () => {
  return <ReusableHeroBanner banners={bannerData} isSmall={true} />;
};

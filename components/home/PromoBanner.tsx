"use client";

import { ReusableHeroBanner } from "../common/ReusableHeroBanner";

const bannerData = [
  { src: "/images/home/promo_banner/image1.webp", link: "/products" },
  { src: "/images/home/promo_banner/image2.jpg", link: "/collections" },
  { src: "/images/home/promo_banner/image3.jpeg", link: "/deals" },
];

export const PromoBanner = () => {
  return <ReusableHeroBanner banners={bannerData} isSmall={true} />;
};

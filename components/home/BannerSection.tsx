import { JSX } from "react";
import { ReusableHeroBanner } from "../common/ReusableHeroBanner";

const banners: string[] = [
  "/images/home/banner_section/imageOne.jpg",
  "/images/home/banner_section/imageTwo.webp",
  "/images/home/banner_section/imageThree.webp",
  "/images/home/banner_section/imageFour.webp",
  "/images/home/banner_section/imageFive.webp",
  "/images/home/banner_section/14days.jpeg",
];

export const BannerSection = (): JSX.Element => {
  return <ReusableHeroBanner banners={banners} />;
};

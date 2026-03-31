import { ReusableHeroBanner } from "../common/ReusableHeroBanner";

const bannerData = [
  {
    src: "/images/home/banner_section/imageOne.jpg",
    link: "/shop/makeup",
  },
  {
    src: "/images/home/banner_section/imageTwo.webp",
    link: "/shop/skincare",
  },
  {
    src: "/images/home/banner_section/imageThree.webp",
    link: "/shop/haircare",
  },
  {
    src: "/images/home/banner_section/imageFour.webp",
    link: "/offers",
  },
  {
    src: "/images/home/banner_section/imageFive.webp",
  },
  {
    src: "/images/home/banner_section/14days.jpeg",
    link: "/promo/14days-challenge",
  },
];

export function BannerSection() {
  // return <ReusableHeroBanner banners={banners} />;
  return <ReusableHeroBanner banners={bannerData} />;
}

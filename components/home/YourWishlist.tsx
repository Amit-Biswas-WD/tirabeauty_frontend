import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

interface TopBanner {
  id: number;
  title: string;
  image: string;
}

const topBanner: TopBanner[] = [
  {
    id: 1,
    title: "Make-up",
    image: "/images/home/top_banner_section/Make-up.jpeg",
  },
  {
    id: 2,
    title: "Skin",
    image: "/images/home/top_banner_section/Skin.jpeg",
  },
  {
    id: 3,
    title: "Hair",
    image: "/images/home/top_banner_section/Hair.jpeg",
  },
  {
    id: 4,
    title: "Fragrance",
    image: "/images/home/top_banner_section/Fragrance.jpeg",
  },
  {
    id: 5,
    title: "Bath-and-Body",
    image: "/images/home/top_banner_section/Bath-and-Body.jpeg",
  },
  {
    id: 6,
    title: "Men",
    image: "/images/home/top_banner_section/Men.jpeg",
  },
  {
    id: 7,
    title: "Wellness",
    image: "/images/home/top_banner_section/Wellness.jpeg",
  },
];

export function YourWishlist() {
  return (
    <ReusableCategoryCard headingTitle="Your Wishlist" topBanner={topBanner} />
  );
}

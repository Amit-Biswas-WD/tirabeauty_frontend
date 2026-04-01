import { ReusableCategoryCard } from "../common/ReusableCategoryCard";

const topBanner = [
  {
    id: 1,
    title: "Make-up",
    image: "/images/home/wait_list/image1.webp",
  },
  {
    id: 2,
    title: "Skin",
    image: "/images/home/wait_list/image2.webp",
  },
  {
    id: 3,
    title: "Hair",
    image: "/images/home/wait_list/image3.webp",
  },
  {
    id: 4,
    title: "Fragrance",
    image: "/images/home/wait_list/image4.webp",
  },
  {
    id: 5,
    title: "Bath-and-Body",
    image: "/images/home/wait_list/image5.webp",
  },
  {
    id: 6,
    title: "Men",
    image: "/images/home/wait_list/image6.webp",
  },
  {
    id: 7,
    title: "Wellness",
    image: "/images/home/wait_list/image7.webp",
  },
];

export function YourWishlist() {
  return (
    <ReusableCategoryCard
      headingTitle="For Your Wishlist"
      topBanner={topBanner}
      responsive={{ xl: 4, lg: 4, md: 3, sm: 2 }}
      height={210}
    />
  );
}

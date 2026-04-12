export interface CategoryItem {
  id: number;
  title: string;
  image: string;
  category?: string;
  link?: string;
}

export const AllCategoryData: Record<string, CategoryItem[]> = {
  wishlist: [
    { id: 1, title: "Make-up", image: "/images/home/wait_list/image1.webp" },
    { id: 2, title: "Skin", image: "/images/home/wait_list/image2.webp" },
    { id: 3, title: "Hair", image: "/images/home/wait_list/image3.webp" },
    { id: 4, title: "Fragrance", image: "/images/home/wait_list/image4.webp" },
    {
      id: 5,
      title: "Bath-and-Body",
      image: "/images/home/wait_list/image5.webp",
    },
    { id: 6, title: "Men", image: "/images/home/wait_list/image6.webp" },
    { id: 7, title: "Wellness", image: "/images/home/wait_list/image7.webp" },
  ],
  trending: [
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
  ],
  topCategories: [
    {
      id: 1,
      title: "Make-up",
      image: "/images/home/top_banner_section/Make-up.jpeg",
      link: "/sections/makeup",
    },
    {
      id: 2,
      title: "Skin",
      image: "/images/home/top_banner_section/Skin.jpeg",
      link: "/sections/skin",
    },
    {
      id: 3,
      title: "Hair",
      image: "/images/home/top_banner_section/Hair.jpeg",
      link: "/sections/hair",
    },
    {
      id: 4,
      title: "Fragrance",
      image: "/images/home/top_banner_section/Fragrance.jpeg",
      link: "/sections/fragrance",
    },
    {
      id: 5,
      title: "Bath-and-Body",
      image: "/images/home/top_banner_section/Bath-and-Body.jpeg",
      link: "/sections/bath_body",
    },
    {
      id: 6,
      title: "Men",
      image: "/images/home/top_banner_section/Men.jpeg",
      link: "/sections/men",
    },
    {
      id: 7,
      title: "Wellness",
      image: "/images/home/top_banner_section/Wellness.jpeg",
      link: "/sections/men",
    },
  ],
  hotRightNow: [
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
  ],
  brandWatch: [
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
  ],
};

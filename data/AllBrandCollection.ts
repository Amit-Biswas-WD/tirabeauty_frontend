export interface ProductItem {
  id: number;
  title: string;
  image: string;
  link?: string;
  category?: string;
  description?: string;
}

export const AllBrandCollection: Record<string, ProductItem[]> = {
  makeUp: [
    {
      id: 1,
      title: "Up to 30% off",
      image: "/images/section/makeup/b_img5.jpeg",
      description: "",
    },
    {
      id: 2,
      title: "Min 15% off + free lipstick over 1499+",
      image: "/images/section/makeup/b_img2.jpeg",
      description: "",
    },
    {
      id: 3,
      title: "Up to 15% off",
      image: "/images/section/makeup/b_img3.jpeg",
      description: "",
    },
    {
      id: 4,
      title: "Up to 35% off + buy 1, get 1 on lip minis",
      image: "/images/section/makeup/b_img4.jpeg",
      description: "",
    },
  ],
};

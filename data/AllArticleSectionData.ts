export interface ProductItem {
  id: number;
  title: string;
  image: string;
  link?: string;
  category: string;
}

export const AllArticleSectionData: Record<string, ProductItem[]> = {
  makeUp: [
    {
      id: 1,
      category: "MAKEUP",
      title: "6 blushes to help you recreate the blush draping trend",
      image: "/images/section/makeup/a_img1.jpg",
      link: "/article/article",
    },
    {
      id: 2,
      category: "MAKEUP",
      title: "7 plum lipsticks for every kind of lip moment",
      image: "/images/section/makeup/a_img2.jpg",
      link: "/article/article",
    },
    {
      id: 3,
      category: "MAKEUP | HAIR | SKIN",
      title: "8 beauty launches in March that are on our radar RN",
      image: "/images/section/makeup/a_img3.jpg",
      link: "/article/article",
    },
    {
      id: 4,
      category: "MAKEUP",
      title: "You haven’t been taking your makeup off properly",
      image: "/images/section/makeup/a_img4.jpg",
      link: "/article/article",
    },
    {
      id: 5,
      category: "MAKEUP | SKIN",
      title: "Beauty trends to recreate according to your zodiac sign",
      image: "/images/section/makeup/a_img5.jpg",
      link: "/article/article",
    },
    {
      id: 6,
      category: "MAKEUP",
      title: "7 lip products you need to recreate the ballet-slipper lip trend",
      image: "/images/section/makeup/a_img6.jpg",
      link: "/article/article",
    },
  ],
};

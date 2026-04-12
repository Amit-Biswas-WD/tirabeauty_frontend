export interface TopCategoriesItem {
  id: number;
  title: string;
  image: string;
  link?: string;
}

export const CollectionImgData: Record<string, TopCategoriesItem[]> = {
  makeup: [
    {
      id: 1,
      title: "Face Makeup",
      image: "/images/section/makeup/c_img1.jpeg",
      link: "/collection/makeup",
    },
    {
      id: 2,
      title: "Eye Makeup",
      image: "/images/section/makeup/c_img2.jpeg",
      link: "/collection/makeup",
    },
    {
      id: 3,
      title: "Lipstick",
      image: "/images/section/makeup/c_img3.jpeg",
      link: "/collection/makeup",
    },
    {
      id: 4,
      title: "Nails",
      image: "/images/section/makeup/c_img4.jpeg",
      link: "/collection/makeup",
    },
  ],
  skin: [
    {
      id: 1,
      title: "Cleansers",
      image: "/images/section/skin/c_img1.jpeg",
      link: "/collection/skin",
    },
    {
      id: 2,
      title: "Moisturizers",
      image: "/images/section/skin/c_img2.jpeg",
      link: "/collection/skin",
    },
    {
      id: 3,
      title: "Sunscreen",
      image: "/images/section/skin/c_img3.jpeg",
      link: "/collection/skin",
    },
    {
      id: 4,
      title: "Serums",
      image: "/images/section/skin/c_img4.jpeg",
      link: "/collection/skin",
    },
    {
      id: 5,
      title: "Masks",
      image: "/images/section/skin/c_img5.jpeg",
      link: "/collection/skin",
    },
    {
      id: 6,
      title: "Eye Care",
      image: "/images/section/skin/c_img6.jpeg",
      link: "/collection/skin",
    },
  ],
  hair: [
    {
      id: 1,
      title: "Shampoo",
      image: "/images/section/hair/c_img1.jpeg",
      link: "/collection/hair",
    },
    {
      id: 2,
      title: "Conditioner",
      image: "/images/section/hair/c_img2.jpeg",
      link: "/collection/hair",
    },
    {
      id: 3,
      title: "Hair Oil",
      image: "/images/section/hair/c_img3.jpeg",
      link: "/collection/hair",
    },
    {
      id: 4,
      title: "Hair Mask",
      image: "/images/section/hair/c_img4.jpeg",
      link: "/collection/hair",
    },
    {
      id: 5,
      title: "Hair Serum",
      image: "/images/section/hair/c_img5.jpeg",
      link: "/collection/hair",
    },
    {
      id: 6,
      title: "Styling",
      image: "/images/section/hair/c_img6.jpeg",
      link: "/collection/hair",
    },
  ],
  men: [
    {
      id: 1,
      title: "Face Wash",
      image: "/images/section/men/c_img1.jpeg",
      link: "/collection/men",
    },
    {
      id: 2,
      title: "Beard Care",
      image: "/images/section/men/c_img2.jpeg",
      link: "/collection/men",
    },
    {
      id: 3,
      title: "Shaving",
      image: "/images/section/men/c_img3.jpeg",
      link: "/collection/men",
    },
    {
      id: 4,
      title: "Hair Care",
      image: "/images/section/men/c_img4.jpeg",
      link: "/collection/men",
    },
    {
      id: 5,
      title: "Deodorants",
      image: "/images/section/men/c_img5.jpeg",
      link: "/collection/men",
    },
    {
      id: 6,
      title: "Skincare",
      image: "/images/section/men/c_img6.jpeg",
      link: "/collection/men",
    },
  ],
  bath_body: [
    {
      id: 1,
      title: "Body Wash",
      image: "/images/section/bath_body/c_img1.jpeg",
      link: "/collection/bath-body",
    },
    {
      id: 2,
      title: "Body Lotion",
      image: "/images/section/bath_body/c_img2.jpeg",
      link: "/collection/bath-body",
    },
    {
      id: 3,
      title: "Hand Care",
      image: "/images/section/bath_body/c_img3.jpeg",
      link: "/collection/bath-body",
    },
    {
      id: 4,
      title: "Foot Care",
      image: "/images/section/bath_body/c_img4.jpeg",
      link: "/collection/bath-body",
    },
    {
      id: 5,
      title: "Scrubs",
      image: "/images/section/bath_body/c_img5.jpeg",
      link: "/collection/bath-body",
    },
    {
      id: 6,
      title: "Soaps",
      image: "/images/section/bath_body/c_img6.jpeg",
      link: "/collection/bath-body",
    },
  ],
};

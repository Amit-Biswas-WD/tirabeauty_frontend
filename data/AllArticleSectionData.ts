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
  skin: [
    {
      id: 1,
      category: "SKIN",
      title: "7 Korean skincare products for skin that needs to chill",
      image: "/images/section/skin/a_img1.webp",
      link: "/article/article",
    },
    {
      id: 2,
      category: "SKIN",
      title: "6 oily-skin-friendly sunscreens worth having on your radar",
      image: "/images/section/skin/a_img2.jpg",
      link: "/article/article",
    },
    {
      id: 3,
      category: "SKIN",
      title: "6 K-beauty under-eye creams that Team Tira swears by",
      image: "/images/section/skin/a_img3.png",
      link: "/article/article",
    },
    {
      id: 4,
      category: "SKIN",
      title: "10 hyaluronic acid serums for dewy, hydrated glass skin",
      image: "/images/section/skin/a_img4.jpg",
      link: "/article/article",
    },
    {
      id: 5,
      category: "SKIN",
      title: "How to tell if you're overusing actives, according to a...",
      image: "/images/section/skin/a_img5.jpg",
      link: "/article/article",
    },
  ],
  hair: [
    {
      id: 1,
      category: "HAIR",
      title: "How to choose the best dry shampoo for your hair",
      image: "/images/section/hair/a_img1.jpg",
      link: "/article/article",
    },
    {
      id: 2,
      category: "HAIR",
      title: "Celebrity hairstyles to try as per your zodiac sign",
      image: "/images/section/hair/a_img2.jpg",
      link: "/article/article",
    },
    {
      id: 3,
      category: "HAIR",
      title: "6 hair mists for all-day fragrance and shine",
      image: "/images/section/hair/a_img3.jpg",
      link: "/article/article",
    },
    {
      id: 4,
      category: "HAIR",
      title: "8 best hyaluronic acid shampoos for glossy and hydrated hair",
      image: "/images/section/hair/a_img4.jpg",
      link: "/article/article",
    },
    {
      id: 5,
      category: "HAIR",
      title: "Your go-to winter haircare guide for hydrated, healthy strands",
      image: "/images/section/hair/a_img5.jpg",
      link: "/article/article",
    },
  ],
  man: [
    {
      id: 1,
      category: "MEN | SKIN",
      title: "8 skincare essentials for men that Team Tira swears by",
      image: "/images/section/man/a_img1.webp",
      link: "/article/article",
    },
    {
      id: 2,
      category: "MEN",
      title: "8 grooming essentials that every man needs this summer",
      image: "/images/section/man/a_img2.jpg",
      link: "/article/article",
    },
    {
      id: 3,
      category: "FRAGRANCE | MEN",
      title: "Not your average guy's scent: 8 most unique perfumes for men",
      image: "/images/section/man/a_img3.webp",
      link: "/article/article",
    },
    {
      id: 4,
      category: "SKIN",
      title: "7 K-beauty essentials that every man needs on his skincare shelf",
      image: "/images/section/man/a_img4.jpeg",
      link: "/article/article",
    },
    {
      id: 5,
      category: "MEN | SKIN",
      title: "9 skincare products that he will actually use (and love)",
      image: "/images/section/man/a_img5.webp",
      link: "/article/article",
    },
  ],
  bath_body: [
    {
      id: 1,
      category: "BATH & BODY",
      title:
        "A step-by-step bodycare guide to refresh your skin after every workout",
      image: "/images/section/bath_body/a_img1.webp",
      link: "/article/article",
    },
    {
      id: 2,
      category: "BATH & BODY",
      title:
        "Bodycare essentials that leave you smelling like your favourite dessert",
      image: "/images/section/bath_body/a_img2.webp",
      link: "/article/article",
    },
    {
      id: 3,
      category: "BATH & BODY",
      title: "7 bodycare products team Tira is obsessed with rn",
      image: "/images/section/bath_body/a_img3.webp",
      link: "/article/article",
    },
    {
      id: 4,
      category: "BATH & BODY",
      title: "8 best bodycare kits for an all-in-one routine",
      image: "/images/section/bath_body/a_img4.jpg",
      link: "/article/article",
    },
    {
      id: 5,
      category: "BATH & BODY | FRAGRANCE",
      title:
        "8 fragrant body lotions and butters to layer under your fragrance",
      image: "/images/section/bath_body/a_img5.jpg",
      link: "/article/article",
    },
  ],
};

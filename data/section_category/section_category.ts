export interface BannerItem {
  src: string;
  link?: string;
}

export const sectionCategoryData: Record<string, BannerItem[]> = {
  makeup: [
    { src: "/images/section/makeup/image1.jpeg", link: "/shop/makeup" },
    { src: "/images/section/makeup/image2.jpeg", link: "/shop/makeup" },
    { src: "/images/section/makeup/image3.jpeg", link: "/shop/makeup" },
    { src: "/images/section/makeup/image4.jpeg", link: "/shop/makeup" },
  ],
  skin: [
    { src: "/images/section/skin/img1.jpeg", link: "/shop/skin" },
    { src: "/images/section/skin/img2.jpeg", link: "/shop/skin" },
    { src: "/images/section/skin/img3.jpeg", link: "/shop/skin" },
    { src: "/images/section/skin/img4.jpeg", link: "/shop/skin" },
    { src: "/images/section/skin/img5.jpeg", link: "/shop/skin" },
  ],
  hair: [
    { src: "/images/section/hair/img1.webp", link: "/shop/hair" },
    { src: "/images/section/hair/img2.webp", link: "/shop/hair" },
    { src: "/images/section/hair/img3.webp", link: "/shop/hair" },
    { src: "/images/section/hair/img4.jpeg", link: "/shop/hair" },
  ],
  men: [
    { src: "/images/section/man/img1.jpeg", link: "/shop/man" },
    { src: "/images/section/man/img2.jpeg", link: "/shop/man" },
    { src: "/images/section/man/img3.jpeg", link: "/shop/man" },
  ],
  bath_body: [
    { src: "/images/section/bath_body/img1.webp", link: "/shop/bath-body" },
    { src: "/images/section/bath_body/img3.webp", link: "/shop/bath-body" },
    { src: "/images/section/bath_body/img4.jpeg", link: "/shop/bath-body" },
  ],
};

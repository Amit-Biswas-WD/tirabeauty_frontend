"use client";

import { ReusableFeaturedProducts } from "../common/ReusableFeaturedProducts";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    brand: "Tira",
    title: "Tira Peachy Pink Vanity Bag – Limited KKK Edition",
    image: "/images/home/only_tira_section/image1.jpg",
    price: 1756,
    regularPrice: 2195,
    discount: "20% Off",
    offer: "1 Offer",
    rating: 3.3,
    review_count: 3,
  },
  {
    id: 2,
    brand: "Kimirica",
    title: "Kimirica X Tira Illuminating Wishes Gift Box Festive Gift Set",
    image: "/images/home/only_tira_section/image2.jpg",
    price: 1784,
    regularPrice: 2099,
    discount: "15% Off",
    offer: "1 Offer",
    rating: 4.5,
    review_count: 266,
  },
  {
    id: 3,
    brand: "Tira",
    title: "Tira Water Tumbler (1200 ml)",
    image: "/images/home/only_tira_section/image3.jpg",
    price: 1646,
    regularPrice: 2195,
    discount: "25% Off",
    offer: "1 Offer",
    rating: 4,
    review_count: 12,
  },
  {
    id: 4,
    brand: "Ikonic Me",
    title: "Ikonic Me 3 in 1 Express Styler - Black & Rosegold",
    image: "/images/home/only_tira_section/image4.jpg",
    price: 2010,
    regularPrice: 3350,
    discount: "40% Off",
    offer: "1 Offer",
    rating: 4,
    review_count: 166,
  },
  {
    id: 5,
    brand: "Swiss Beauty",
    title: "Liquid Concealer - 03 Light Moyen (6g)",
    image: "/images/home/only_tira_section/image5.jpg",
    price: 224,
    regularPrice: 249,
    discount: "10% Off",
    offer: "1 offer",
    rating: 4.1,
    review_count: 8,
  },
  {
    id: 6,
    brand: "KIKO Milano",
    title: "KIKO Milano Colored Lip Balm - 06 Blackberry (3 g)",
    image: "/images/home/only_tira_section/image6.jpg",
    price: 690,
    regularPrice: 690,
    discount: "0% Off",
    offer: "1 Offer",
    rating: 4.3,
    review_count: 571,
  },
];

export const OnlyTiraSection = () => {
  return (
    <ReusableFeaturedProducts
      productData={FEATURED_PRODUCTS}
      headingTitle="Only On Tira"
    />
  );
};

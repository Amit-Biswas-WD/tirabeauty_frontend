"use client";

import { ReusableFeaturedProducts } from "../common/ReusableFeaturedProducts";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    brand: "medicube",
    title: "medicube Collagen Night Wrapping Mask (75 ml)",
    image: "/images/home/just_dropped_section/image1.jpg",
    price: 2470,
    regularPrice: 2600,
    discount: "5% Off",
    offer: "1 Offer",
    rating: 3.8,
    review_count: 58,
  },
  {
    id: 2,
    brand: "Huda Beauty",
    title: "Huda Beauty Blush Filter - Rose Berry (7.5 g)",
    image: "/images/home/just_dropped_section/image2.jpg",
    price: 3740,
    regularPrice: 3740,
    discount: "0% Off",
    offer: "1 Offer • Free gifts",
    rating: 4.5,
    review_count: 42,
  },
  {
    id: 3,
    brand: "Thick Fiber",
    title: "Thick Fiber Root Touch Up Powder with Precision Brush",
    image: "/images/home/just_dropped_section/image3.jpg",
    price: 984,
    regularPrice: 984,
    discount: "0% Off",
    offer: "1 Offer",
    rating: 4.2,
    review_count: 11,
  },
  {
    id: 4,
    brand: "HYUE BEAUTY",
    title: "Hyue Amplifeye Eyeshadow-Liner-Kohl Multiuse Eye Crayon",
    image: "/images/home/just_dropped_section/image4.jpg",
    price: 949,
    regularPrice: 999,
    discount: "5% Off",
    offer: "3 Offers",
    rating: 3.8,
    review_count: 16,
  },
  {
    id: 5,
    brand: "Manetain",
    title: "Manetain Co-Wash Shampoo With Peppermint & Neem (237 ml)",
    image: "/images/home/just_dropped_section/image5.jpg",
    price: 944,
    regularPrice: 1049,
    discount: "10% Off",
    offer: "2 Offers",
    rating: 4.5,
    review_count: 2,
  },
  {
    id: 6,
    brand: "RESOLVE",
    title: "Resolve Bear Hug Barrier Restoring Lotion (50 g)",
    image: "/images/home/just_dropped_section/image6.jpg",
    price: 1899,
    regularPrice: 1999,
    discount: "5% Off",
    offer: "1 Offer",
    rating: 4.5,
    review_count: 2,
  },
  {
    id: 7,
    brand: "Daily Life Forever52",
    title: "Daily Life Forever52 Dewdrop Serum Foundation - SRF004",
    image: "/images/home/just_dropped_section/image7.jpg",
    price: 1529,
    regularPrice: 1699,
    discount: "10% Off",
    offer: "1 Offer",
    rating: 3.6,
    review_count: 8,
  },
  {
    id: 8,
    brand: "Manetain",
    title: "Manetain Multipurpose Hair Oil with Castor & Black Seed Oil",
    image: "/images/home/just_dropped_section/image8.jpg",
    price: 719,
    regularPrice: 799,
    discount: "10% Off",
    offer: "2 Offers",
    rating: 4.5,
    review_count: 2,
  },
];

export const JustDroppedSection = () => {
  return (
    <ReusableFeaturedProducts
      productData={FEATURED_PRODUCTS}
      headingTitle="Just Dropped"
    />
  );
};

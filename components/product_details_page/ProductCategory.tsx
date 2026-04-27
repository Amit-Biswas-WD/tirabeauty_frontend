"use client";

import { ReusableFeaturedProducts } from "../common/ReusableFeaturedProducts";

const chosenProduct = [
  {
    id: 1,
    brand: "PAC",
    title: "PAC Spotlight Cushion Foundation - SC Light 140 (11 g)",
    image: "/images/home/chosen_product/image1.jpg",
    price: 895,
    regularPrice: 995,
    discount: "10% Off",
    offer: "1 offer",
    rating: 4.6,
    review_count: 85,
  },
  {
    id: 2,
    brand: "TIRTIR",
    title: "TIRTIR Mask Fit Red Mini Cushion - 25N Mocha (4.5 g)",
    image: "/images/home/chosen_product/image2.webp",
    price: 1140,
    regularPrice: 1200,
    discount: "5% Off",
    offer: "1 offer",
    rating: 4.8,
    review_count: 120,
  },
  {
    id: 3,
    brand: "PAC",
    title: "PAC Matte Touch Compact Powder - 130 Biscuit (12 g)",
    image: "/images/home/chosen_product/image3.jpg",
    price: 612,
    regularPrice: 645,
    discount: "5% Off",
    offer: "1 offer",
    rating: 4.4,
    review_count: 56,
  },
  {
    id: 4,
    brand: "TIRTIR",
    title: "TIRTIR Mask Fit Red Cushion Mini - 13W Cream (4.5 g)",
    image: "/images/home/chosen_product/image4.jpg",
    price: 1140,
    regularPrice: 1200,
    discount: "5% Off",
    offer: "1 offer",
    rating: 4.7,
    review_count: 92,
  },
  {
    id: 5,
    brand: "TFIT",
    title: "TFIT Layering Fit Cover Cushion Ex - C01 Porcelain (12 g)",
    image: "/images/home/chosen_product/image5.jpg",
    price: 1413,
    regularPrice: 1570,
    discount: "10% Off",
    offer: "1 offer",
    rating: 4.5,
    review_count: 34,
  },
  {
    id: 6,
    brand: "L'Oreal Paris",
    title: "L'Oreal Paris Infallible 32H Fresh Wear Foundation - 235 Honey",
    image: "/images/home/chosen_product/image6.jpg",
    price: 1099,
    regularPrice: 1099,
    discount: "0% Off",
    offer: "No offers",
    rating: 4.3,
    review_count: 210,
  },
  {
    id: 7,
    brand: "TIRTIR",
    title: "TIRTIR Mask Fit Red Cushion - 28N Oat (18 g)",
    image: "/images/home/chosen_product/image7.jpg",
    price: 1947,
    regularPrice: 2050,
    discount: "5% Off",
    offer: "1 offer",
    rating: 4.9,
    review_count: 158,
  },
];

export const ProductCategory = () => {
  return (
    <div>
      <ReusableFeaturedProducts
        productData={chosenProduct}
        headingTitle="More Like This"
      />
    </div>
  );
};

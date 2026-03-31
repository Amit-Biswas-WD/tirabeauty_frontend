"use client";

import ReusableFeaturedProducts from "../common/ReusableFeaturedProducts";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    brand: "Beauty of Joseon Glowing",
    title:
      "Glow Replenishing Rice Milk Toner Glow Replenishing Rice Milk Toner",
    image: "/images/home/future_product/image1.jpg",
    price: 1350,
    regularPrice: 1500,
    discount: "10% Off",
    offer: "1 Offer Free gifts",
    rating: 1.5,
    review_count: 2,
  },
  {
    id: 2,
    brand: "Maybelline New York",
    title: "Fit Me Matte + Poreless Liquid Foundation",
    image: "/images/home/future_product/image2.jpg",
    price: 538,
    regularPrice: 649,
    discount: "17% Off",
    offer: "1 offer",
    rating: 2.5,
    review_count: 33,
  },
  {
    id: 3,
    brand: "Maybelline New York",
    title: "Sensational Liquid Matte Lipstick",
    image: "/images/home/future_product/image3.jpg",
    price: 381,
    regularPrice: 429,
    discount: "11% Off",
    offer: "1 offer",
    rating: 2.5,
    review_count: 2,
  },
  {
    id: 4,
    brand: "Lakme",
    title: "Glitterati Chroma Chic Eye Shadow Palette",
    image: "/images/home/future_product/image4.jpg",
    price: 695,
    regularPrice: 1199,
    discount: "42% Off",
    offer: "2 offer",
    rating: 4.3,
    review_count: 42,
  },
  {
    id: 5,
    brand: "Swiss Beauty",
    title: "Liquid Concealer - 03 Light Moyen (6g)",
    image: "/images/home/future_product/image5.jpg",
    price: 224,
    regularPrice: 249,
    discount: "10% Off",
    offer: "1 offer",
    rating: 4.1,
    review_count: 8,
  },
  {
    id: 6,
    brand: "Pond's",
    title: "Super Light Gel Oil-Free Moisturizer",
    image: "/images/home/future_product/image6.jpg",
    price: 331,
    regularPrice: 349,
    discount: "5% Off",
    offer: "3 offer",
    rating: 4.4,
    review_count: 20,
  },
  {
    id: 7,
    brand: "RENEE",
    title: "Disney Frozen Princess Candy 3-In-1 Lip Color",
    image: "/images/home/future_product/image7.jpg",
    price: 473,
    regularPrice: 550,
    discount: "14% Off",
    offer: "1 offer",
    rating: 4.5,
    review_count: 12,
  },
];

export default function FeaturedProduct() {
  return (
    <div>
      <ReusableFeaturedProducts
        headingTitle="Top Categories"
        productData={FEATURED_PRODUCTS}
      />
    </div>
  );
}

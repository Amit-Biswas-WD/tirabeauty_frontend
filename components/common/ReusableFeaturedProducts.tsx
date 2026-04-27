// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { GoHeart } from "react-icons/go";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const FEATURED_PRODUCTS = [
//   {
//     id: 1,
//     brand: "Beauty of Joseon Glowing",
//     title:
//       "Glow Replenishing Rice Milk Toner Glow Replenishing Rice Milk Toner",
//     image: "/images/home/future_product/image1.jpg",
//     price: 1350,
//     regularPrice: 1500,
//     discount: "10% Off",
//     offer: "1 Offer Free gifts",
//     rating: 1.5,
//     review_count: 2,
//   },
//   {
//     id: 2,
//     brand: "Maybelline New York",
//     title: "Fit Me Matte + Poreless Liquid Foundation",
//     image: "/images/home/future_product/image2.jpg",
//     price: 538,
//     regularPrice: 649,
//     discount: "17% Off",
//     offer: "1 offer",
//     rating: 2.5,
//     review_count: 33,
//   },
//   {
//     id: 3,
//     brand: "Maybelline New York",
//     title: "Sensational Liquid Matte Lipstick",
//     image: "/images/home/future_product/image3.jpg",
//     price: 381,
//     regularPrice: 429,
//     discount: "11% Off",
//     offer: "1 offer",
//     rating: 2.5,
//     review_count: 2,
//   },
//   {
//     id: 4,
//     brand: "Lakme",
//     title: "Glitterati Chroma Chic Eye Shadow Palette",
//     image: "/images/home/future_product/image4.jpg",
//     price: 695,
//     regularPrice: 1199,
//     discount: "42% Off",
//     offer: "2 offer",
//     rating: 4.3,
//     review_count: 42,
//   },
//   {
//     id: 5,
//     brand: "Swiss Beauty",
//     title: "Liquid Concealer - 03 Light Moyen (6g)",
//     image: "/images/home/future_product/image5.jpg",
//     price: 224,
//     regularPrice: 249,
//     discount: "10% Off",
//     offer: "1 offer",
//     rating: 4.1,
//     review_count: 8,
//   },
//   {
//     id: 6,
//     brand: "Pond's",
//     title: "Super Light Gel Oil-Free Moisturizer",
//     image: "/images/home/future_product/image6.jpg",
//     price: 331,
//     regularPrice: 349,
//     discount: "5% Off",
//     offer: "3 offer",
//     rating: 4.4,
//     review_count: 20,
//   },
//   {
//     id: 7,
//     brand: "RENEE",
//     title: "Disney Frozen Princess Candy 3-In-1 Lip Color",
//     image: "/images/home/future_product/image7.jpg",
//     price: 473,
//     regularPrice: 550,
//     discount: "14% Off",
//     offer: "1 offer",
//     rating: 4.5,
//     review_count: 12,
//   },
// ];

// const GAP = 20;

// export function ReusableFeaturedProducts({
//   headingTitle = "Top Categories",
// }: {
//   headingTitle?: string;
// }) {
//   const [index, setIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(4);
//   const [cardWidth, setCardWidth] = useState(0);

//   useEffect(() => {
//     const updateVisibleCards = () => {
//       const w = window.innerWidth;
//       let cards = 4;
//       if (w >= 1024) cards = 4;
//       else if (w >= 768) cards = 3;
//       else cards = 1.5;

//       setVisibleCards(cards);

//       const container = document.getElementById("top-categories-container");
//       if (container) {
//         const width = container.offsetWidth;
//         const totalGap = (Math.ceil(cards) - 1) * GAP;
//         setCardWidth((width - totalGap) / cards);
//       }
//     };

//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, []);

//   const maxIndex = Math.max(
//     0,
//     FEATURED_PRODUCTS.length - Math.floor(visibleCards),
//   );

//   const handleNext = () =>
//     setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
//   const handlePrev = () => setIndex((prev) => (prev <= 0 ? prev : prev - 1));

//   return (
//     <div
//       id="top-categories-container"
//       className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden py-6"
//     >
//       <div className="text-2xl mb-6 px-2 sm:px-0 font-medium">
//         {headingTitle}
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className={`absolute left-2 sm:left-4 top-[40%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200 transition-opacity duration-200 ${
//           index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//       >
//         <MdKeyboardArrowLeft className="text-3xl" />
//       </button>

//       {/* Content Container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-300"
//           style={{
//             transform: `translateX(-${index * (cardWidth + GAP)}px)`,
//             gap: `${GAP}px`,
//           }}
//         >
//           {FEATURED_PRODUCTS.map((item) => (
//             <div
//               key={item.id}
//               className="flex-shrink-0 group relative "
//               style={{ width: cardWidth }}
//             >
//               {/* Image Box */}
//               <div className="relative h-[288px] w-full rounded-lg overflow-hidden ">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//                 {/* Heart Icon */}
//                 <div className="absolute top-2 right-2 bg-white p-[6px] rounded-full shadow-md cursor-pointer flex items-center justify-center z-20">
//                   <GoHeart size={18} className="text-[#211a1e]" />
//                 </div>
//               </div>

//               {/* Product */}
//               <div className="mt-3 px-3 text-start">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm text-[#635E61] truncate">
//                     {item.brand.length > 20
//                       ? `${item.brand.substring(0, 20)}...`
//                       : item.brand}
//                   </h3>
//                   <div className="text-sm text-[#211A1E] font-medium flex items-center gap-1">
//                     {item?.rating} <span className="text-[#ce7c6d]">★</span>{" "}
//                     <span className="text-[#AAAAAA]">
//                       {" "}
//                       | {item?.review_count}
//                     </span>
//                   </div>
//                 </div>
//                 <h3 className="mt-1 text-base text-[#211a1e] font-medium line-clamp-2">
//                   {item.title.length > 40
//                     ? `${item.title.substring(0, 40)}...`
//                     : item.title}
//                 </h3>
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="text-base font-medium text-[#211A1E]">
//                     ${item.price.toFixed(2)}
//                   </span>
//                   <span className="text-sm text-[#635E61] line-through">
//                     ${item.regularPrice.toFixed(2)}
//                   </span>
//                   <span className="text-sm font-medium">({item.discount})</span>
//                 </div>

//                 {/* Offer */}
//                 <div className="mt-1.5 mb-2">
//                   <p className="bg-[#f4f4f4] w-fit px-2.5 p-1 rounded-full">
//                     <span className="text-sm">{item?.offer}</span>
//                   </p>
//                 </div>

//                 <div className="absolute bottom-0 left-0 w-full bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
//                   <button className="w-full bg-[#000000] text-white py-3 px-4 rounded-b-md font-medium text-sm text-center hover:bg-[#333333]">
//                     Add to Bag
//                   </button>
//                 </div>

//                 <div className="h-[56px] visibility-hidden"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className={`absolute right-2 sm:right-4 top-[40%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200 transition-opacity duration-200 ${
//           index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//       >
//         <MdKeyboardArrowRight className="text-3xl" />
//       </button>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { GoHeart } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";

// Constant for spacing
const GAP = 20;

// Types for better safety
interface Product {
  id: number;
  brand: string;
  title: string;
  image: string;
  price: number;
  regularPrice: number;
  discount: string;
  offer: string;
  rating: number;
  review_count: number;
}

interface ReusableProps {
  productData: Product[];
  headingTitle?: string;
}

// Main Slider Component
export const ReusableFeaturedProducts = ({
  productData,
  headingTitle = "Chosen For You",
}: ReusableProps) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      let cards = 4;
      if (w >= 1024) cards = 4;
      else if (w >= 768) cards = 3;
      else cards = 1.5;

      setVisibleCards(cards);

      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const totalGap = (Math.ceil(cards) - 1) * GAP;
        setCardWidth((width - totalGap) / cards);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [productData]);

  const maxIndex = Math.max(0, productData.length - Math.floor(visibleCards));

  const handleNext = () =>
    setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  const handlePrev = () => setIndex((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div
      ref={containerRef}
      className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden lg:my-8 md:my-6 sm:my-4 my-2"
    >
      <div className="text-2xl lg:mb-6 md:mb-5 sm:mb-4 mb-2 px-2 sm:px-0 font-medium">
        {headingTitle}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className={`absolute left-2 sm:left-4 top-[40%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200 transition-opacity duration-200 ${
          index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MdKeyboardArrowLeft className="text-3xl" />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${index * (cardWidth + GAP)}px)`,
            gap: `${GAP}px`,
          }}
        >
          {productData.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/products/${item.id}`)}
              className="flex-shrink-0 group relative cursor-pointer"
              style={{ width: cardWidth }}
            >
              {/* Image Box */}
              <div className="relative h-[288px] w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                {/* Wishlist Button - e.stopPropagation()*/}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Added to wishlist");
                  }}
                  className="absolute top-2 right-2 bg-white p-[6px] rounded-full shadow-md cursor-pointer flex items-center justify-center z-20"
                >
                  <GoHeart size={18} className="text-[#211a1e]" />
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-3 px-3 text-start">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-[#635E61] truncate">
                    {item.brand.length > 20
                      ? `${item.brand.substring(0, 20)}...`
                      : item.brand}
                  </h3>
                  <div className="text-sm text-[#211A1E] font-medium flex items-center gap-1">
                    {item.rating}{" "}
                    <FaStar size={12} className="text-[#ce7c6d]" />
                    <span className="text-[#AAAAAA]">
                      {" "}
                      | {item.review_count}
                    </span>
                  </div>
                </div>
                <h3 className="mt-1 text-base text-[#211a1e] font-medium line-clamp-2">
                  {item.title.length > 40
                    ? `${item.title.substring(0, 40)}...`
                    : item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-base font-medium text-[#211A1E]">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-[#635E61] line-through">
                    ${item.regularPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium">({item.discount})</span>
                </div>

                <div className="mt-1.5 mb-2">
                  <p className="bg-[#f4f4f4] w-fit px-2.5 p-1 rounded-full">
                    <span className="text-sm">{item.offer}</span>
                  </p>
                </div>

                {/* Add to Bag Button on Hover */}
                <div className="absolute bottom-0 left-0 w-full bg-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Added to bag");
                    }}
                    className="w-full bg-black text-white py-3 px-4 rounded-b-md font-medium text-sm hover:bg-[#333]"
                  >
                    Add to Bag
                  </button>
                </div>
                <div className="h-[56px] invisible"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className={`absolute right-2 sm:right-4 top-[40%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200 transition-opacity duration-200 ${
          index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MdKeyboardArrowRight className="text-3xl" />
      </button>
    </div>
  );
};

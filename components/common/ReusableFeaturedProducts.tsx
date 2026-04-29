"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoHeart } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { SectionTitle } from "../ui/SectionTitle";
import { SliderButtons } from "./SliderButtons";
import { useSlider } from "@/hooks/useSlider";

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

export const ReusableFeaturedProducts = ({
  productData,
  headingTitle = "Chosen For You",
}: ReusableProps) => {
  const router = useRouter();

  const {
    containerRef,
    index,
    handleNext,
    handlePrev,
    maxIndex,
    cardWidth,
    gap,
  } = useSlider({
    dataLength: productData.length,
    variant: "product",
    gap: 20,
  });

  return (
    <div className="section-spacing container mx-auto text-[#211A1E] font-normal relative overflow-hidden">
      <SectionTitle>{headingTitle}</SectionTitle>

      <SliderButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={index <= 0}
        isLast={index >= maxIndex}
      />

      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${index * (cardWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {productData.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/products/${item.id}`)}
              className="flex-shrink-0 group relative cursor-pointer"
              style={{ width: cardWidth }}
            >
              <div className="relative h-[288px] w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
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
    </div>
  );
};

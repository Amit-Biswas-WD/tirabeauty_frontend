"use client";

import Image from "next/image";
import { SliderButtons } from "./SliderButtons";
import { useSlider } from "@/hooks/useSlider";
import { SectionTitle } from "../ui/SectionTitle";

export interface BrandItem {
  id: number;
  brand: string;
  category: string;
  tagline: string;
  description: string;
  offer: string | null;
  image_path: string;
}

interface ReusableNewBrandCardProps {
  cardData: BrandItem[];
  headingTitle?: string;
}

export const ReusableNewBrandCard = ({
  cardData,
  headingTitle = "Top Categories",
}: ReusableNewBrandCardProps) => {
  const {
    containerRef,
    index,
    handleNext,
    handlePrev,
    maxIndex,
    cardWidth,
    gap,
  } = useSlider({
    dataLength: cardData.length,
    variant: "brand",
    gap: 20,
  });

  return (
    <div className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden section-spacing">
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
          {cardData.map((item) => (
            <div
              key={item.id}
              className="text-center flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <div className="relative h-[262px] w-full overflow-hidden">
                <Image
                  src={item?.image_path}
                  alt={item?.brand}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <p className="backdrop-blur-md bg-white/20 shadow-lg rounded-r-full px-4 py-1.5 absolute top-3 left-0 text-[#211A1E] text-xs font-medium">
                  {item?.tagline}
                </p>
              </div>
              <div className="text-start text-sm text-[#211A1E] font-normal bg-[#fcf2ef] p-4 rounded-b-sm h-20">
                <h3 className="font-medium">{item?.brand}</h3>
                <p className="pt-0.5">
                  {item?.description}
                  {item?.offer && (
                    <>
                      {" "}
                      - <span>${item.offer}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { useSlider } from "@/hooks/useSlider";
import { SliderButtons } from "./SliderButtons";
import { SectionTitle } from "../ui/SectionTitle";

interface BrandItem {
  id: number;
  image: string;
  title: string;
}

interface ReusableBrandsKnowCardProps {
  brandKnowData: BrandItem[];
}

export const ReusableBrandsKnowCard = ({
  brandKnowData,
}: ReusableBrandsKnowCardProps) => {
  const {
    containerRef,
    index,
    handleNext,
    handlePrev,
    maxIndex,
    cardWidth,
    gap,
  } = useSlider({ dataLength: brandKnowData.length, variant: "brand" });

  return (
    <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-20 relative group">
      <SectionTitle className="text-center lg:mb-9 md:mb-7 mb-5">
        Brands To Know
      </SectionTitle>

      <SliderButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={index <= 0}
        isLast={index >= maxIndex}
      />

      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (cardWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {brandKnowData.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 flex flex-col h-full"
              style={{ width: cardWidth }}
            >
              <div className="relative h-[262px] w-full overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <h3 className="text-xl font-normal pt-4">{brand.title}</h3>
                <button className="text-sm font-normal flex items-center gap-1 mt-auto mx-auto pt-4">
                  Shop Now <FaAngleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

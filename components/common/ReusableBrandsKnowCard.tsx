"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface BrandItem {
  id: number;
  image: string;
  title: string;
}

interface ReusableBrandsKnowCardProps {
  brandKnowData: BrandItem[];
}

const GAP = 16;

export const ReusableBrandsKnowCard = ({
  brandKnowData,
}: ReusableBrandsKnowCardProps) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      let cards = 3;
      if (w >= 1024) cards = 3;
      else if (w >= 768) cards = 2;
      else cards = 1.2;

      setVisibleCards(cards);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalGapWidth = (Math.ceil(cards) - 1) * GAP;
        setCardWidth((containerWidth - totalGapWidth) / cards);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [brandKnowData]);

  const maxIndex = Math.max(0, brandKnowData.length - Math.floor(visibleCards));

  const handleNext = () =>
    setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  const handlePrev = () => setIndex((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-20 relative group">
      <h3 className="text-2xl font-normal text-center pb-6">Brands To Know</h3>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        disabled={index <= 0}
        className={`absolute left-2 top-[60%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 border border-gray-100 transition-opacity duration-300 ${
          index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        disabled={index >= maxIndex}
        className={`absolute right-2 top-[60%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 border border-gray-100 transition-opacity duration-300 ${
          index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <MdKeyboardArrowRight size={24} />
      </button>

      {/* Slider Wrapper */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (cardWidth + GAP)}px)`,
            gap: `${GAP}px`,
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <h3
                  className={`text-xl font-normal pt-4 ${
                    brand.title.length > 55 ? "text-center" : "text-left"
                  }`}
                >
                  {brand.title}
                </h3>

                <button className="text-sm font-normal flex items-center gap-1 mt-auto mx-auto pt-4 hover:underline">
                  Shop Now
                  <FaAngleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

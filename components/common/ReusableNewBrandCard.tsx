import Image from "next/image";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const GAP = 14;

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
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      let cards = 3;
      if (w >= 1024) cards = 3;
      // else if (w >= 1024) cards = 4;
      else if (w >= 768) cards = 2;
      else cards = 1.5;

      setVisibleCards(cards);

      const container = document.getElementById("top-categories-container");
      if (container) {
        const width = container.offsetWidth;
        const totalGap = (cards - 1) * GAP;
        setCardWidth((width - totalGap) / cards);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, cardData.length - visibleCards);

  const handleNext = () => {
    setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? prev : prev - 1));
  };

  return (
    <div
      id="top-categories-container"
      className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden"
    >
      <div className="text-2xl mb-6 px-2 sm:px-0">{headingTitle}</div>

      <button
        onClick={handlePrev}
        className={`absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
          transition-opacity duration-200
          ${index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
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

      <button
        onClick={handleNext}
        className={`absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
          transition-opacity duration-200
          ${index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <MdKeyboardArrowRight className="text-3xl" />
      </button>
    </div>
  );
};

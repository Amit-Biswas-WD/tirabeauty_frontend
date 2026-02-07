import Image from "next/image";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const GAP = 14;

export function ReusableCategoryCard({
  topBanner,
  headingTitle = "Top Categories",
}: {
  topBanner: { id: number; title: string; image: string }[];
  headingTitle?: string;
}) {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);
  const [cardWidth, setCardWidth] = useState(0);

  // Responsive visible cards
  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      let cards = 5;
      if (w >= 1280) cards = 5;
      else if (w >= 1024) cards = 4;
      else if (w >= 768) cards = 3;
      else cards = 2;

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

  const maxIndex = Math.max(0, topBanner.length - visibleCards);

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

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className={`absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
          transition-opacity duration-200
          ${index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <MdKeyboardArrowLeft className="text-3xl" />
      </button>

      {/* Content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${index * (cardWidth + GAP)}px)`,
            gap: `${GAP}px`,
          }}
        >
          {topBanner.map((item) => (
            <div
              key={item.id}
              className="text-center flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <div className="relative h-[185px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm py-3">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
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
}

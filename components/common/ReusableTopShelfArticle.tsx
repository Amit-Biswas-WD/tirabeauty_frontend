"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface BrandItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

interface ReusableTopShelfArticleProps {
  brandKnowData: BrandItem[];
}

const GAP = 16;

export const ReusableTopShelfArticle = ({
  brandKnowData,
}: ReusableTopShelfArticleProps) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      let cards = 3;
      if (w >= 1024) cards = 3;
      else if (w >= 768) cards = 2;
      else cards = 1.2;

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
  }, [brandKnowData]);

  const maxIndex = Math.max(0, brandKnowData.length - Math.floor(visibleCards));

  const handleNext = () =>
    setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  const handlePrev = () => setIndex((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-20 relative overflow-hidden">
      <h3 className="text-2xl font-normal text-center pb-6">Brands To Know</h3>

      <div className="max-w-[1200px] mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className={`absolute 2xl:left-[10%] xl:left-5 -left-0.5 top-[55%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200 transition-opacity duration-200 ${
            index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <MdKeyboardArrowLeft className="text-2xl" />
        </button>

        <button
          onClick={handleNext}
          className={`absolute 2xl:right-[10%] xl:right-5 -right-0.5 top-[55%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200 transition-opacity duration-200 ${
            index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <MdKeyboardArrowRight className="text-2xl" />
        </button>

        {/* Slider Container */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * (cardWidth + GAP)}px)`,
              gap: `${GAP}px`,
            }}
          >
            {brandKnowData.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 flex flex-col gap-5"
                style={{ width: cardWidth }}
              >
                <div className="relative h-[262px] w-full overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col flex-grow text-[#211A1E] font-normal">
                  <p className="text-[10px] uppercase">{brand.category}</p>
                  <h3 className="text-2xl py-4 min-h-[60px]">{brand.title}</h3>
                  <div className="bg-[#e9c7c0] px-4 py-1.5 rounded-full w-fit mt-auto">
                    <button className="text-xs flex items-center gap-1">
                      Read More <FaAngleRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// "use client";
// import { useSlider } from "@/hooks/useSlider";
// import Image from "next/image";
// import { useRef } from "react";
// import { FaAngleRight } from "react-icons/fa6";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// interface BrandItem {
//   id: number;
//   category: string;
//   image: string;
//   title: string;
// }

// interface ReusableTopShelfArticleProps {
//   brandKnowData: BrandItem[];
//   displayCount?: number;
// }

// export const ReusableTopShelfArticle = ({
//   brandKnowData,
//   displayCount = 3, // Default value
// }: ReusableTopShelfArticleProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Custom Hook
//   const { index, cardWidth, handleNext, handlePrev, maxIndex, gap } = useSlider(
//     {
//       dataLength: brandKnowData.length,
//       containerRef: containerRef,
//       initialVisibleCards: displayCount,
//       gap: 16,
//     },
//   );

//   return (
//     <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-20 relative overflow-hidden">
//       <h3 className="text-2xl font-normal text-center pb-6">Brands To Know</h3>

//       <div className="max-w-[1200px] mx-auto">
//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrev}
//           className={`absolute 2xl:left-[10%] xl:left-5 -left-0.5 top-[55%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-opacity ${
//             index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <MdKeyboardArrowLeft size={24} />
//         </button>

//         <button
//           onClick={handleNext}
//           className={`absolute 2xl:right-[10%] xl:right-5 -right-0.5 top-[55%] -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-opacity ${
//             index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <MdKeyboardArrowRight size={24} />
//         </button>

//         {/* Slider Viewport */}
//         <div ref={containerRef} className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${index * (cardWidth + gap)}px)`,
//               gap: `${gap}px`,
//             }}
//           >
//             {brandKnowData.map((brand) => (
//               <div
//                 key={brand.id}
//                 className="flex-shrink-0 flex flex-col gap-5"
//                 style={{ width: cardWidth }}
//               >
//                 <div className="relative h-[262px] w-full overflow-hidden">
//                   <Image
//                     src={brand.image}
//                     alt={brand.title}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>

//                 <div className="flex flex-col flex-grow text-[#211A1E] font-normal">
//                   <p className="text-[10px] uppercase">{brand.category}</p>
//                   <h3 className="text-2xl py-4 min-h-[60px]">{brand.title}</h3>
//                   <div className="bg-[#e9c7c0] px-4 py-1.5 rounded-full w-fit mt-auto">
//                     <button className="text-xs flex items-center gap-1">
//                       Read More <FaAngleRight />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

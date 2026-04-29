"use client";

import Link from "next/link";
import Image from "next/image";
import { useSlider } from "@/hooks/useSlider";
import { FaAngleRight, FaCircleArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface BrandItem {
  id: number;
  category: string;
  image: string;
  title: string;
  link?: string;
}

interface ReusableTopShelfArticleProps {
  brandKnowData: BrandItem[];
}

export const ReusableTopShelfArticle = ({
  brandKnowData,
}: ReusableTopShelfArticleProps) => {
  const {
    containerRef,
    index,
    handleNext,
    handlePrev,
    maxIndex,
    cardWidth,
    gap,
  } = useSlider({
    dataLength: brandKnowData.length,
    variant: "brand",
    gap: 20,
  });

  const CardInner = ({ brand }: { brand: BrandItem }) => (
    <>
      <div className="relative h-[262px] w-full overflow-hidden">
        <Image
          src={brand.image}
          alt={brand.title}
          fill
          className="object-cover rounded-lg"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col flex-grow text-[#211A1E] font-normal">
        <p className="text-[10px] uppercase">{brand.category}</p>
        <h3 className="text-2xl py-4 min-h-[60px]">{brand.title}</h3>
        <div className="bg-[#e9c7c0] px-4 py-1.5 rounded-full w-fit mt-auto">
          <div className="text-xs flex items-center gap-1">
            Read More <FaAngleRight />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative">
      <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-12 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto mt-12">
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
              index >= maxIndex
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </button>

          {/* Slider Container */}
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * (cardWidth + gap)}px)`,
                gap: `${gap}px`,
              }}
            >
              {brandKnowData.map((brand) =>
                brand.link ? (
                  <Link
                    key={brand.id}
                    href={brand.link}
                    className="flex-shrink-0 flex flex-col gap-5 cursor-pointer"
                    style={{ width: cardWidth }}
                  >
                    <CardInner brand={brand} />
                  </Link>
                ) : (
                  <div
                    key={brand.id}
                    className="flex-shrink-0 flex flex-col gap-5"
                    style={{ width: cardWidth }}
                  >
                    <CardInner brand={brand} />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer SVG Section */}
      <div className="absolute -top-5 lg:left-42 md:left-7 sm:left-5 left-3 text-black">
        <div className="flex items-center gap-3">
          <Image
            src="/images/home/Beauty.svg"
            alt="Decorative"
            width={300}
            height={100}
            className="object-contain opacity-50"
          />
          <FaCircleArrowRight className="text-4xl text-black" />
        </div>
        <p className="text-base text-[#211A1E] font-normal mt-3">
          Beauty news, reviews and hot takes
        </p>
      </div>
    </div>
  );
};

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaAngleRight, FaCircleArrowRight } from "react-icons/fa6";
// import { SliderButtons } from "./SliderButtons";
// import { useSlider } from "@/hooks/useSlider";

// interface BrandItem {
//   id: number;
//   category: string;
//   image: string;
//   title: string;
//   link?: string;
// }

// interface ReusableTopShelfArticleProps {
//   brandKnowData: BrandItem[];
// }

// export const ReusableTopShelfArticle = ({
//   brandKnowData,
// }: ReusableTopShelfArticleProps) => {
//   const {
//     containerRef,
//     index,
//     handleNext,
//     handlePrev,
//     maxIndex,
//     cardWidth,
//     gap,
//   } = useSlider({
//     dataLength: brandKnowData.length,
//     variant: "product",
//     gap: 20,
//   });

//   const CardInner = ({ brand }: { brand: BrandItem }) => (
//     <>
//       <div className="relative h-[262px] w-full overflow-hidden">
//         <Image
//           src={brand.image}
//           alt={brand.title}
//           fill
//           className="object-cover rounded-lg"
//           sizes="100vw"
//         />
//       </div>

//       <div className="flex flex-col flex-grow text-[#211A1E] font-normal">
//         <p className="text-[10px] uppercase">{brand.category}</p>
//         <h3 className="text-2xl py-4 min-h-[60px]">{brand.title}</h3>
//         <div className="bg-[#e9c7c0] px-4 py-1.5 rounded-full w-fit mt-auto">
//           <div className="text-xs flex items-center gap-1">
//             Read More <FaAngleRight />
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <div className="relative">
//       <div className="bg-[#fcf1ed] rounded-lg pt-10 pb-6 px-3 my-12 relative overflow-hidden">
//         <div className="max-w-[1200px] mx-auto mt-12">
//           {/* Navigation Buttons */}
//           <SliderButtons
//             onPrev={handlePrev}
//             onNext={handleNext}
//             isFirst={index <= 0}
//             isLast={index >= maxIndex}
//           />

//           {/* Slider Container */}
//           <div ref={containerRef} className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${index * (cardWidth + gap)}px)`,
//                 gap: `${gap}px`,
//               }}
//             >
//               {brandKnowData.map((brand) =>
//                 brand.link ? (
//                   <Link
//                     key={brand.id}
//                     href={brand.link}
//                     className="flex-shrink-0 flex flex-col gap-5 cursor-pointer"
//                     style={{ width: cardWidth }}
//                   >
//                     <CardInner brand={brand} />
//                   </Link>
//                 ) : (
//                   <div
//                     key={brand.id}
//                     className="flex-shrink-0 flex flex-col gap-5"
//                     style={{ width: cardWidth }}
//                   >
//                     <CardInner brand={brand} />
//                   </div>
//                 ),
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer SVG Section */}
//       <div className="absolute -top-5 lg:left-42 md:left-7 sm:left-5 left-3 text-black">
//         <div className="flex items-center gap-3">
//           <Image
//             src="/images/home/Beauty.svg"
//             alt="Decorative"
//             width={300}
//             height={100}
//             className="object-contain opacity-50"
//           />
//           <FaCircleArrowRight className="text-4xl text-black" />
//         </div>
//         <p className="text-base text-[#211A1E] font-normal mt-3">
//           Beauty news, reviews and hot takes
//         </p>
//       </div>
//     </div>
//   );
// };

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const GAP = 14;

// interface ResponsiveCards {
//   xl?: number;
//   lg?: number;
//   md?: number;
//   sm?: number;
// }

// interface TopBanner {
//   id: number;
//   title: string;
//   image: string;
//   link?: string;
//   category?: string;
//   description?: string,
// }

// export function ReusableCategoryCard({
//   topBanner,
//   headingTitle = "Top Categories",
//   responsive = { xl: 6, lg: 5, md: 4, sm: 2 },
//   height = 185,
// }: {
//   topBanner: TopBanner[];
//   headingTitle?: string;
//   responsive?: ResponsiveCards;
//   height?: number | string;
// }) {
//   const [index, setIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(responsive.lg || 5);
//   const [cardWidth, setCardWidth] = useState(0);

//   useEffect(() => {
//     const updateVisibleCards = () => {
//       const w = window.innerWidth;
//       let cards = responsive.xl || 6;

//       if (w >= 1280) cards = responsive.xl || 6;
//       else if (w >= 1024) cards = responsive.lg || 5;
//       else if (w >= 768) cards = responsive.md || 4;
//       else cards = responsive.sm || 2;

//       setVisibleCards(cards);

//       const container = document.getElementById("top-categories-container");
//       if (container) {
//         const width = container.offsetWidth;
//         const totalGap = (cards - 1) * GAP;
//         setCardWidth((width - totalGap) / cards);
//       }
//     };

//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, [responsive]);

//   const maxIndex = Math.max(0, topBanner.length - visibleCards);

//   const handleNext = () => {
//     setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev <= 0 ? prev : prev - 1));
//   };

//   return (
//     <div
//       id="top-categories-container"
//       className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden lg:my-8 md:my-6 sm:my-4 my-2"
//     >
//       <div className="text-2xl mb-6 px-2 sm:px-0">{headingTitle}</div>

//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
//           transition-opacity duration-200
//           ${index <= 0 ? "opacity-0 pointer-events-none" : "opacity-100"}
//         `}
//       >
//         <MdKeyboardArrowLeft className="text-3xl" />
//       </button>

//       {/* Content */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-300"
//           style={{
//             transform: `translateX(-${index * (cardWidth + GAP)}px)`,
//             gap: `${GAP}px`,
//           }}
//         >
//           {topBanner.map((item) => (
//             <div
//               key={item.id}
//               className="flex-shrink-0"
//               style={{ width: cardWidth }}
//             >
//               {item.link ? (
//                 <Link href={item.link}>
//                   <div
//                     className="relative w-full overflow-hidden"
//                     style={{ height: `${height}px` }}
//                   >
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                       sizes="100vw"
//                     />
//                   </div>
//                 </Link>
//               ) : (
//                 <div
//                   className="relative w-full overflow-hidden"
//                   style={{ height: `${height}px` }}
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                     sizes="100vw"
//                   />
//                 </div>
//               )}

//               <div className="py-3 pr-3 flex flex-col gap-1">
//                 {item?.category && (
//                   <p className="text-sm text-[#211A1E] font-normal">
//                     {item.category}
//                   </p>
//                 )}
//                 {item?.description && (
//                   <p className="text-sm text-[#211A1E] font-normal">
//                     {item.description}
//                   </p>
//                 )}
//                 <h3 className="text-sm text-start">{item?.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
//           transition-opacity duration-200
//           ${index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"}
//         `}
//       >
//         <MdKeyboardArrowRight className="text-3xl" />
//       </button>
//     </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const GAP = 14;

interface ResponsiveCards {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

interface TopBanner {
  id: number;
  title: string;
  image: string;
  link?: string;
  category?: string;
  description?: string;
}

export function ReusableCategoryCard({
  topBanner,
  headingTitle = "Top Categories",
  responsive = { xl: 6, lg: 5, md: 4, sm: 2 },
  height = 185,
}: {
  topBanner: TopBanner[];
  headingTitle?: string;
  responsive?: ResponsiveCards;
  height?: number | string;
}) {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(responsive.lg || 5);
  const [cardWidth, setCardWidth] = useState(0);

  const isTailwind = typeof height === "string" && height.includes(":");
  const finalStyle = !isTailwind ? { height: typeof height === "number" ? `${height}px` : height } : {};
  const finalClass = isTailwind ? height : "";

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      let cards = responsive.xl || 6;

      if (w >= 1280) cards = responsive.xl || 6;
      else if (w >= 1024) cards = responsive.lg || 5;
      else if (w >= 768) cards = responsive.md || 4;
      else cards = responsive.sm || 2;

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
  }, [responsive]);

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
      className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden lg:my-8 md:my-6 sm:my-4 my-2"
    >
      <div className="text-2xl mb-6 px-2 sm:px-0">{headingTitle}</div>

      <button
        onClick={handlePrev}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
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
          {topBanner.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: cardWidth }}
            >
              {item.link ? (
                <Link href={item.link}>
                  <div
                    className={`relative w-full overflow-hidden ${finalClass}`}
                    style={finalStyle}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </Link>
              ) : (
                <div
                  className={`relative w-full overflow-hidden ${finalClass}`}
                  style={finalStyle}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              )}

              <div className="py-3 pr-3 flex flex-col gap-1">
                {item?.category && (
                  <p className="text-sm text-[#211A1E] font-normal">
                    {item.category}
                  </p>
                )}
                {item?.description && (
                  <p className="text-sm text-[#211A1E] font-normal">
                    {item.description}
                  </p>
                )}
                <h3 className="text-sm text-start">{item?.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-1 border border-gray-200
          transition-opacity duration-200
          ${index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <MdKeyboardArrowRight className="text-3xl" />
      </button>
    </div>
  );
}
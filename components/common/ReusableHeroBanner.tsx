// "use client";

// import Image from "next/image";
// import { JSX, useEffect, useState } from "react";

// interface ReusableHeroBannerProps {
//   banners?: string[];
//   autoSlide?: boolean;
//   intervalTime?: number;
// }

// export const ReusableHeroBanner = ({
//   banners,
//   autoSlide = true,
//   intervalTime = 4000,
// }: ReusableHeroBannerProps): JSX.Element | null => {
//   const [current, setCurrent] = useState(0);
//   const [duration, setDuration] = useState(300);

//   // 🔁 Hook always called (no conditional hook issue)
//   useEffect(() => {
//     if (!banners || banners.length === 0) return;
//     if (!autoSlide) return;

//     const interval = setInterval(() => {
//       setDuration(300);
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [banners, autoSlide, intervalTime]);

//   if (!banners || banners.length === 0) {
//     return null;
//   }

//   const handleClick = (index: number) => {
//     setDuration(1000);
//     setCurrent(index);
//   };

//   return (
//     <div className="w-full">
//       <div className="relative w-full h-[460px] overflow-hidden">
//         <div
//           className="flex h-full"
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//             transition: `transform ${duration}ms ease-in-out`,
//           }}
//         >
//           {banners.map((src, index) => (
//             <div key={index} className="relative min-w-full h-full">
//               <Image
//                 src={src}
//                 alt={`Banner ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 sizes="100vw"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="my-4 flex justify-center gap-2">
//         {banners.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             className={`transition-all duration-300 rounded-full ${
//               current === index ? "w-6 h-2 bg-black" : "w-2 h-2 bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import Image from "next/image";
import { JSX, useEffect, useState } from "react";

interface ReusableHeroBannerProps {
  banners?: string[];
  autoSlide?: boolean;
  intervalTime?: number;
}

export const ReusableHeroBanner = ({
  banners,
  autoSlide = true,
  intervalTime = 4000,
}: ReusableHeroBannerProps): JSX.Element | null => {
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(300);

  useEffect(() => {
    if (!banners || banners.length === 0 || !autoSlide) return;

    const interval = setInterval(() => {
      setDuration(300);
      setCurrent((prev) => (prev + 1) % banners.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [banners, autoSlide, intervalTime]);

  if (!banners || banners.length === 0) return null;

  const handleClick = (index: number) => {
    setDuration(1000);
    setCurrent(index);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Container with dynamic aspect ratio to prevent cropping */}
      <div className="relative w-full aspect-[16/6] sm:aspect-[21/9] md:aspect-[3/1] lg:h-[460px] overflow-hidden">
        <div
          className="flex h-full w-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: `transform ${duration}ms ease-in-out`,
          }}
        >
          {banners.map((src, index) => (
            <div
              key={index}
              className="relative min-w-full w-full h-full flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-contain sm:object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="my-4 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index ? "w-6 h-2 bg-black" : "w-2 h-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

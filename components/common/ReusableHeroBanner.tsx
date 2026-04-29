"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

interface BannerItem {
  src: string;
  link?: string;
}

interface ReusableHeroBannerProps {
  banners?: BannerItem[];
  autoSlide?: boolean;
  intervalTime?: number;
  isSmall?: boolean;
}

export const ReusableHeroBanner = ({
  banners,
  autoSlide = true,
  intervalTime = 4000,
  isSmall = false,
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

  const heightClass = isSmall
    ? "aspect-[16/4] sm:aspect-[21/6] md:aspect-[5/1] lg:h-[260px]"
    : "aspect-[16/6] sm:aspect-[21/9] md:aspect-[3/1] lg:h-[460px]";

  return (
    <div className="w-full overflow-hidden">
      <div className={`relative w-full overflow-hidden ${heightClass}`}>
        <div
          className="flex h-full w-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: `transform ${duration}ms ease-in-out`,
          }}
        >
          {banners.map((item, index) => {
            const content = (
              <div className="relative min-w-full w-full h-full flex-shrink-0">
                <Image
                  src={item.src}
                  alt={`Banner ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            );

            return item.link ? (
              <Link key={index} href={item.link} className="min-w-full block">
                {content}
              </Link>
            ) : (
              <div key={index} className="min-w-full">
                {content}
              </div>
            );
          })}
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

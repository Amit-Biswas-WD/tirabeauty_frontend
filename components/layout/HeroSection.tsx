"use client";

import Image from "next/image";
import { JSX, useEffect, useState } from "react";

const banners: string[] = [
  "/images/home/banner_section/imageOne.jpg",
  "/images/home/banner_section/imageTwo.webp",
  "/images/home/banner_section/imageThree.webp",
  "/images/home/banner_section/imageFour.webp",
  "/images/home/banner_section/imageFive.webp",
];

export const HeroSection = (): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(300);

  // 🔁 Auto slide (4s, 300ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(300);
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 👉 Button click (1s duration)
  const handleClick = (index: number) => {
    setDuration(1000);
    setCurrent(index);
  };

  return (
    <div className="w-full">
      {/* Carousel Image */}
      <div className="relative w-full h-[460px] overflow-hidden">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: `transform ${duration}ms ease-in-out`,
          }}
        >
          {banners.map((src, index) => (
            <div key={index} className="relative min-w-full h-full">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
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

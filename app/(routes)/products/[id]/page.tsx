"use client";

import { useState } from "react";
import Image from "next/image";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { GoShareAndroid } from "react-icons/go";

const images = [
  "/images/single_product/big_image.jpg",
  "/images/single_product/image1.jpg",
  "/images/single_product/image2.jpg",
  "/images/single_product/image3.jpg",
  "/images/single_product/image4.jpg",
  "/images/single_product/image5.jpg",
  "/images/single_product/image6.jpg",
  "/images/single_product/image7.jpg",
  "/images/single_product/image8.jpg",
  "/images/single_product/image9.jpg",
  "/images/single_product/image10.jpg",
  "/images/single_product/image11.jpg",
];

const THUMB_SIZE = 65;
const GAP = 12;
const ITEM_HEIGHT = THUMB_SIZE + GAP;
const VISIBLE_COUNT = 5;
const STEP = 2;
const VIEWPORT_HEIGHT = VISIBLE_COUNT * THUMB_SIZE + (VISIBLE_COUNT - 1) * GAP;

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < images.length)
      setStartIndex((prev) =>
        Math.min(prev + STEP, images.length - VISIBLE_COUNT),
      );
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex((prev) => Math.max(prev - STEP, 0));
  };

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 p-5">
      {/* LEFT SIDE */}
      <div className="flex gap-4 items-start">
        {/* Thumbnails */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-1 ${startIndex === 0 ? "text-gray-300" : "text-black"}`}
          >
            <SlArrowUp size={18} />
          </button>

          {/* Viewport: always 5 thumbnails visible */}
          <div
            style={{ height: `${VIEWPORT_HEIGHT}px`, width: `${THUMB_SIZE}px` }}
            className="overflow-hidden"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: `${GAP}px`,
                transform: `translateY(-${startIndex * ITEM_HEIGHT}px)`,
                transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {images.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  style={{
                    width: `${THUMB_SIZE}px`,
                    height: `${THUMB_SIZE}px`,
                    flexShrink: 0,
                  }}
                  className={`relative cursor-pointer overflow-hidden border transition-all ${
                    selectedImage === item
                      ? "border-black shadow-sm"
                      : "border-transparent bg-gray-50"
                  }`}
                >
                  <Image
                    src={item}
                    alt={`Thumbnail ${index}`}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="65px"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + VISIBLE_COUNT >= images.length}
            className={`p-1 ${
              startIndex + VISIBLE_COUNT >= images.length
                ? "text-gray-300"
                : "text-black"
            }`}
          >
            <SlArrowDown size={18} />
          </button>
        </div>

        {/* Main Big Image */}
        <div className="flex-1 lg:h-[600px] md:h-[550px] sm:h-[500px] h-[450px] relative border border-[#eeeeee] overflow-hidden">
          <Image
            src={selectedImage}
            alt="Product Zoom"
            fill
            priority
            unoptimized
            quality={100}
            className="object-contain "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-0.5 left-0.5 flex items-center gap-1.5">
            <p className="backdrop-blur-md bg-[#f6f6f6] rounded-sm px-1.5 py-1 text-[#211A1E] text-xs font-medium w-max">
              only
            </p>
            <p className="backdrop-blur-md bg-[#f6f6f6] rounded-sm px-1.5 py-1 text-[#211A1E] text-xs font-medium w-max">
              only on tira
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] text-[#908C8E] font-medium uppercase">
          Home / makeup / face / blush
        </p>
        <p className="text-sm text-[#635E61] font-normal underline">
          Huda Beauty
        </p>

        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-[#211A1E] font-medium">
            Huda Beauty Blush Filter - Toasty Peach (7.5 g)
          </h1>
          <GoShareAndroid size={28} className="text-[#211A1E] cursor-pointer" />
        </div>

        <div className="">
          <div className="text-sm text-[#211A1E] font-medium flex items-center gap-1">
            rating <span className="text-[#ce7c6d]">★</span>{" "}
            <span className="text-[#AAAAAA]"> | review_count</span>
          </div>
        </div>
      </div>
    </div>
  );
}

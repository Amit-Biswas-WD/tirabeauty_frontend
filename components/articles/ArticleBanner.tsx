"use client";

import Image from "next/image";

export const ArticleBanner = () => {
  return (
    <div className="relative w-full mt-[60px] mb-[100px] bg-[#1a1518] flex items-center text-white font-normal">
      <div className="absolute right-0 w-[94%] h-[440px] bg-[#1a1518] rounded-md -z-10" />

      <div className="flex items-center relative gap-12 w-full max-w-[1200px] mx-auto px-4">
        {/* Left Side: Image Section */}
        <div className="relative h-[530px] w-[540px] shrink-0">
          <Image
            src="/images/article/a_b_img.jpg"
            alt="Article Banner"
            fill
            className="object-cover rounded-sm shadow-2xl"
            sizes="(max-width: 768px) 100vw, 540px"
          />
          {/* Tira Loves Badge */}
          <div className="backdrop-blur-sm bg-white/20 shadow-lg rounded-full px-4 py-1.5 absolute top-3 left-3  text-xs font-medium">
            Tira Loves
          </div>
        </div>

        {/* Right Side: Content Section */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] mb-4">Skin</p>

          <h3 className="text-[32px] font-medium uppercase leading-tight max-w-[450px]">
            7 SPF-infused essentials for your summer skincare kit
          </h3>

          <p className="text-sm text-gray-300 mt-4 italic">
            By Tatiana Dias &bull; 16 Apr &apos;26
          </p>

          <div className="mt-16 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider">
              3 Min Read
            </p>
            <p className="text-sm text-gray-400">
              The backup to your sunscreen army
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

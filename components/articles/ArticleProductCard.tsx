"use client";

import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export const ArticleProductCard = () => {
  return (
    <div className="flex items-stretch gap-8 w-1150px mx-auto px-4 mb-16">
      <div className="relative h-[180px] w-[180px] flex-shrink-0 border border-[#f4e1dd]">
        <Image
          src="/images/article/a_product_image.avif"
          alt="Article Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 180px"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 text-[#211A1E]">
        <div className="space-y-2">
          <h3 className="text-base font-semibold">
            82°E Pomegranate Sheen SPF 15 PA++ Illuminating Lip Oil with
            Pomegranate and Ceramides (6 ml)
          </h3>
          <p className="text-sm font-light">
            With ceramides, hyaluronic acid, avocado butter, petrolatum and shea
            butter, this lip balm is deeply moisturising and ideal for chapped
            lips. The photostable UV filters offer protection against UVA and
            UVB rays, helping to prevent pigmentation and sun damage.
          </p>
        </div>

        <p className="text-xl font-semibold flex items-center gap-2 mt-4 cursor-pointer">
          Add to Cart <BiChevronRight className="w-6 h-6" />
        </p>
      </div>
    </div>
  );
};

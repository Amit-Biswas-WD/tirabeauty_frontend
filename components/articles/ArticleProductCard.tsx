"use client";

import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

export const ArticleProductCard = () => {
  return (
    <div className="px-4 lg:my-16 md:my-12 my-10 text-[#211A1E]">
      <div className="mb-8 lg:mb-12 max-w-4xl md:w-2xl min-w-[300px] mx-auto text-center">
        <h2 className="md:text-3xl text-xl font-medium">
          Whether you,re revisiting a nostalgic favourite or trying it for the
          first time, we,ve rounded up the best blue eyeliners out there.
        </h2>
      </div>
      <div className="flex items-stretch md:gap-8 gap-4 w-1150px mx-auto ">
        <div className="relative h-[180px] w-[180px] flex-shrink-0 border border-[#f4e1dd]">
          <Image
            src="/images/article/a_product_image.avif"
            alt="Article Banner"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 180px"
          />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="space-y-2">
            <h3 className="text-base font-medium lg:font-semibold">
              82°E Pomegranate Sheen SPF 15 PA++ Illuminating Lip Oil with
              Pomegranate and Ceramides (6 ml)
            </h3>
            <p className="text-sm font-light">
              With ceramides, hyaluronic acid, avocado butter, petrolatum and
              shea butter, this lip balm is deeply moisturising and ideal for
              chapped lips. The photostable UV filters offer protection against
              UVA and UVB rays, helping to prevent pigmentation and sun damage.
            </p>
          </div>

          <p className="md:text-xl text-lg font-semibold flex items-center gap-2 mt-4 cursor-pointer">
            Add to Cart <BiChevronRight className="w-6 h-6" />
          </p>
        </div>
      </div>
    </div>
  );
};

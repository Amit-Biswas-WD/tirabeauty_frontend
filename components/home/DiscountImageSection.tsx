"use client";

import Image from "next/image";

export const DiscountImageSection = () => {
  return (
    <div>
      <div className="relative w-full h-[145px] overflow-hidden">
        <Image
          src="/images/home/discount_image.avif"
          alt="Discount Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../ui/SectionTitle";
import { SliderButtons } from "./SliderButtons";
import { useSlider } from "@/hooks/useSlider";

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

export const ReusableCategoryCard = ({
  topBanner,
  headingTitle = "Top Categories",
  responsive = { xl: 6, lg: 5, md: 4, sm: 2 },
  height = 185,
}: {
  topBanner: TopBanner[];
  headingTitle?: string;
  responsive?: ResponsiveCards;
  height?: number | string;
}) => {
  const {
    containerRef,
    index,
    handleNext,
    handlePrev,
    maxIndex,
    cardWidth,
    gap,
  } = useSlider({
    dataLength: topBanner.length,
    variant: "category",
    gap: 14,
    responsive,
  });

  const isTailwind = typeof height === "string" && height.includes(":");
  const finalStyle = !isTailwind
    ? { height: typeof height === "number" ? `${height}px` : height }
    : {};
  const finalClass = isTailwind ? height : "";

  return (
    <div className="container mx-auto text-[#211A1E] font-normal relative overflow-hidden section-spacing">
      <SectionTitle>{headingTitle}</SectionTitle>

      <SliderButtons
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={index <= 0}
        isLast={index >= maxIndex}
      />

      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${index * (cardWidth + gap)}px)`,
            gap: `${gap}px`,
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
    </div>
  );
};

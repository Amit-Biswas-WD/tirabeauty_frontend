import { useState, useEffect, useRef } from "react";

interface ResponsiveConfig {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

type SliderVariant = "brand" | "product" | "category";

interface SliderProps {
  dataLength: number;
  gap?: number;
  variant: SliderVariant;
  responsive?: ResponsiveConfig;
}

export const useSlider = ({
  dataLength,
  gap = 16,
  variant,
  responsive,
}: SliderProps) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      let cards = 3;

      // responsive props
      if (responsive) {
        if (w >= 1280) cards = responsive.xl || 6;
        else if (w >= 1024) cards = responsive.lg || 5;
        else if (w >= 768) cards = responsive.md || 4;
        else cards = responsive.sm || 2;
      }
      // variant
      else {
        if (variant === "brand") {
          if (w >= 1024) cards = 3;
          else if (w >= 768) cards = 2;
          else cards = 1.2;
        } else if (variant === "product") {
          if (w >= 1024) cards = 4;
          else if (w >= 768) cards = 3;
          else cards = 1.5;
        } else if (variant === "category") {
          if (w >= 1280) cards = 6;
          else if (w >= 1024) cards = 5;
          else if (w >= 768) cards = 4;
          else cards = 2;
        }
      }

      setVisibleCards(cards);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalGapWidth = (Math.ceil(cards) - 1) * gap;
        setCardWidth((containerWidth - totalGapWidth) / cards);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dataLength, gap, variant, responsive]);

  const maxIndex = Math.max(0, dataLength - Math.floor(visibleCards));

  const handleNext = () =>
    setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  const handlePrev = () => setIndex((prev) => (prev <= 0 ? prev : prev - 1));

  return {
    index,
    handleNext,
    handlePrev,
    maxIndex,
    containerRef,
    cardWidth,
    gap,
  };
};

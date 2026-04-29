import { useState, useEffect, useRef, RefObject } from "react";

interface UseSliderReturn {
  index: number;
  handleNext: () => void;
  handlePrev: () => void;
  maxIndex: number;
  containerRef: RefObject<HTMLDivElement | null>;
  cardWidth: number;
  gap: number;
}

export const useSlider = (
  dataLength: number,
  gap: number = 16,
): UseSliderReturn => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      let cards = 3;
      if (w >= 1024) cards = 3;
      else if (w >= 768) cards = 2;
      else cards = 1.2;

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
  }, [dataLength, gap]);

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

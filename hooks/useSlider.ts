import { useState, useEffect, RefObject } from "react";

interface SliderProps {
  dataLength: number;
  containerRef: RefObject<HTMLDivElement | null>;
  initialVisibleCards?: number;
  gap?: number;
}

export const useSlider = ({
  dataLength,
  containerRef,
  initialVisibleCards = 4,
  gap = 20,
}: SliderProps) => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      let cards = initialVisibleCards;

      if (w < 640)
        cards = 1.2; // Mobile
      else if (w < 1024)
        cards = initialVisibleCards > 2 ? 2.5 : initialVisibleCards; // Tablet
      else cards = initialVisibleCards; // Desktop

      setVisibleCards(cards);

      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const totalGap = (Math.ceil(cards) - 1) * gap;
        setCardWidth((width - totalGap) / cards);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [dataLength, initialVisibleCards, gap, containerRef]);

  const maxIndex = Math.max(0, dataLength - Math.floor(visibleCards));

  const handleNext = () =>
    setIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  const handlePrev = () => setIndex((prev) => (prev <= 0 ? prev : prev - 1));

  return {
    index,
    cardWidth,
    visibleCards,
    maxIndex,
    handleNext,
    handlePrev,
    gap,
  };
};

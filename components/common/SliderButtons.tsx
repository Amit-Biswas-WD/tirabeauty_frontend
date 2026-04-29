import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface SliderButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const SliderButtons = ({
  onPrev,
  onNext,
  isFirst,
  isLast,
}: SliderButtonsProps) => {
  return (
    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none z-10">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`pointer-events-auto bg-white shadow-md rounded-full p-2 border border-gray-100 transition-opacity duration-300 ${
          isFirst ? "opacity-0 cursor-default" : "opacity-100"
        }`}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>

      <button
        onClick={onNext}
        disabled={isLast}
        className={`pointer-events-auto bg-white shadow-md rounded-full p-2 border border-gray-100 transition-opacity duration-300 ${
          isLast ? "opacity-0 cursor-default" : "opacity-100"
        }`}
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
};

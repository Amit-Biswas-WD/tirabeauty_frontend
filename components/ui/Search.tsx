import { JSX } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const Search = ({
  isExpanded,
  setIsExpanded,
  className,
}: SearchProps): JSX.Element => {
  return (
    <div
      className={`relative p-2 transition-all duration-300 ${
        isExpanded ? "w-full" : "w-[450px]"
      } ${className}`}
    >
      <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 lg:block hidden" />

      <input
        type="text"
        placeholder="Search"
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        className="w-full rounded-lg border border-gray-200 bg-black/5 lg:px-10 px-4 lg:py-3.5 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none"
      />
    </div>
  );
};

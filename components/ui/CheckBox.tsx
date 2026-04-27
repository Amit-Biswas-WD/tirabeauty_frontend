"use client";

import { FaCheck } from "react-icons/fa6";

type CheckBoxProps = {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
};

export const CheckBox = ({
  label,
  count,
  checked,
  onChange,
}: CheckBoxProps) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center justify-between w-full max-w-[250px] px-4 py-0.5 cursor-pointer group text-[#211A1E]"
    >
      <div className="flex items-center gap-3">
        <span
          className={`
            w-[18px] h-[18px] flex items-center justify-center rounded-[4px]
            transition-all duration-200 border
            ${
              checked
                ? "bg-black border-black"
                : "bg-white border-gray-400 group-hover:border-gray-600"
            }
          `}
        >
          {checked && <FaCheck size={12} className="text-white" />}
        </span>

        <span
          className={`text-[15px] transition-colors ${
            checked ? "font-medium text-[#211A1E]" : "text-gray-700"
          }`}
        >
          {label}
        </span>
      </div>

      {count !== undefined && (
        <span className="text-[14px] text-gray-600">{count}</span>
      )}
    </button>
  );
};

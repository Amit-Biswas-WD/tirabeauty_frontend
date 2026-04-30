"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className="md:text-base text-sm font-medium text-[#211A1E] cursor-pointer"
        >
          {label}
        </label>
      )}

      <input
        {...props}
        id={id}
        className="border border-[#dbdadb] w-full rounded-sm px-8 py-3 md:text-base text-sm text-[#211A1E] font-normal outline-none focus:ring-1 focus:ring-[#e98c7e] transition-all"
      />
    </div>
  );
};

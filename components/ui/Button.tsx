import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

const baseStyle =
  "px-5 py-2 text-xs sm:px-8 md:px-10 md:text-base lg:px-12 font-medium rounded-md transition-all";

export const Button = ({
  children = "Add To Bag",
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[#211A1E] text-white"
      : "text-[#211A1E] border border-[#c7c7c7]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles}`}
    >
      {children}
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) => (
  <Button {...props} variant="primary" />
);
export const SecondaryButton = (props: ButtonProps) => (
  <Button {...props} variant="secondary" />
);

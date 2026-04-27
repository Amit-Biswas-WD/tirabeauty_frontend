import React from "react";

// Props type define
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`container mx-auto md:my-10 sm:my-8 my-6 ${className}`}>
      {children}
    </div>
  );
};

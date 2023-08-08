import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children
}) => {
  return (
    <h2 className="mb-8 text-3xl font-medium text-center capitalize">
      {children}
    </h2>
  );
}

export default SectionHeading;


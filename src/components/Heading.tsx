import React from "react";

interface HeadingProps {
  name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <div className="relative mx-auto mb-5 w-fit rounded-xl bg-gradient-to-b from-white to-[#4444] p-[1px]">
      <div className="rounded-xl bg-[#1a1a1a] px-6 py-3 text-center">
        <h1 className="text-3xl font-bold text-white">{name}</h1>
      </div>
    </div>
  );
};

export default Heading;

import React from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  links: { linkedin: string; github: string; email: string };
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  imageUrl,
  description,
  links,
}) => {
  return (
    <div className="group relative">
      {/* Gradient Border */}
      <div className="absolute -inset-[2px] rounded-br-2xl rounded-tl-2xl bg-gradient-to-b from-white to-[#4444] opacity-40 transition-opacity"></div>
      {/* Card Content */}
      <div className="relative max-w-xs overflow-hidden rounded-br-2xl rounded-tl-2xl bg-[url('/TeamCardBg.png')] p-4 text-white shadow-lg">
        <img
          src={imageUrl}
          alt={name}
          className="mb-4 h-48 w-full rounded-br-2xl rounded-tl-2xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold transition-opacity duration-300 group-hover:opacity-30">
            {name}
          </h3>
          <p className="text-sm text-gray-400 transition-opacity duration-300 group-hover:opacity-30">
            {role}
          </p>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#413978] to-[#1f5668] opacity-0 transition-opacity duration-300 group-hover:opacity-90">
          <p className="mb-4 text-center text-sm text-white">{description}</p>
          <div className="flex space-x-4">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-blue-400"
            >
              <Image
                src="/linkedin.png"
                alt="devsoc-logo"
                height={30}
                width={30}
              />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-gray-400"
            >
              <Image
                src="/github.png"
                alt="devsoc-logo"
                height={30}
                width={30}
              />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="text-xl text-white hover:text-red-400"
            >
              <Image
                src="/email.png"
                alt="devsoc-logo"
                height={30}
                width={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

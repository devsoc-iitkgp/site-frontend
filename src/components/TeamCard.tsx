import React from 'react';
import Image from 'next/image'

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
    <div className="relative group">
      {/* Gradient Border */}
      <div className="absolute -inset-[3px] bg-gradient-to-b from-white  to-[#4444] rounded-tl-2xl rounded-br-2xl opacity-40  transition-opacity"></div>
      {/* Card Content */}
      <div className="relative bg-black text-white rounded-tl-2xl rounded-br-2xl shadow-lg p-4 max-w-xs overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full rounded-tl-2xl rounded-br-2xl object-cover h-48 mb-4 transition-transform duration-300 group-hover:scale-105 "
          
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold group-hover:opacity-30 transition-opacity duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-400 group-hover:opacity-30 transition-opacity duration-300">
            {role}
          </p>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(300deg,#451F65_0%,#620C85_20%,#3F0F41_60%,#2A002E_80%)] flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
          <p className="text-white text-sm mb-4 text-center">{description}</p>
          <div className="flex space-x-4">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-blue-400"
            >
            <Image src="/linkedin.png" alt='devsoc-logo' height={30} width={30} />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-400"
            >
            <Image src="/github.png" alt='devsoc-logo' height={30} width={30} />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="text-white text-xl hover:text-red-400"
            >
            <Image src="/email.png" alt='devsoc-logo' height={30} width={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

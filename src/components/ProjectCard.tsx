"use client";

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
}) => {
  return (
    <div className="h-[100%] w-[100%] rounded-2xl bg-gradient-to-r from-[#CEFCFF] via-white to-[#8726B7]">
      <div className="m-[1px] max-w-[800px] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-lg">
        {/* Header Section */}
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-yellow-400 p-2">
            <Image src="" alt="JS Logo" className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {/* Description */}
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Tags */}
        <div className="mt-3 flex space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Learn More Link */}
        <a
          href={link}
          className="mt-4 inline-block flex items-center text-purple-400 hover:underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

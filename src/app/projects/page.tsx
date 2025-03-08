"use client";

import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: " ",
      description: "Description 1",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      image: " ",
      description: "Description 2",
      tags: ["Next.js", "Tailwind CSS", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      image: " ",
      description: "Description 3",
      tags: ["PHP", "Laravel", "MySQL"],
      link: "#",
    },
    {
      id: 4,
      title: "Project 4",
      image: " ",
      description: "Description 4",
      tags: ["Vue.js", "Nuxt.js", "PostgreSQL"],
      link: "#",
    },
    {
      id: 5,
      title: "Project 5",
      image: " ",
      description: "Description 5",
      tags: ["Angular", "TypeScript", "GraphQL"],
      link: "#",
    },
    {
      id: 6,
      title: "Project 6",
      image: " ",
      description: "Description 6",
      tags: ["Django", "Python", "SQLite"],
      link: "#",
    },
    {
      id: 7,
      title: "Project 7",
      image: " ",
      description: "Description 7",
      tags: ["Flask", "PostgreSQL", "Bootstrap"],
      link: "#",
    },
    {
      id: 8,
      title: "Project 8",
      image: " ",
      description: "Description 8",
      tags: ["Spring Boot", "Java", "Thymeleaf"],
      link: "#",
    },
    {
      id: 9,
      title: "Project 9",
      image: " ",
      description: "Description 9",
      tags: ["Express.js", "MongoDB", "JWT"],
      link: "#",
    },
    {
      id: 10,
      title: "Project 10",
      image: " ",
      description: "Description 10",
      tags: ["Svelte", "Supabase", "CSS Modules"],
      link: "#",
    },
    {
      id: 11,
      title: "Project 11",
      image: " ",
      description: "Description 11",
      tags: ["PHP", "Laravel", "MySQL"],
      link: "#",
    },
  ];

  const [index, setIndex] = useState(0);
  const projectsPerPage = 4;
  const totalSlides = Math.ceil(projects.length / projectsPerPage);

  const nextProjects = () =>
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  const prevProjects = () =>
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[url('/TeamsBg.png')] bg-cover bg-center py-10">
      <Heading name="PROJECTS" />

      {/* For larg screen 4 projects per slide */}
      <div className="hidden max-w-[800px] overflow-hidden md:block">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, i) => {
            const slideProjects = projects.slice(
              i * projectsPerPage,
              (i + 1) * projectsPerPage
            );
            const isLastSlide = i === totalSlides - 1;
            const remainingProjects = projects.length % projectsPerPage;

            return (
              <div
                key={i}
                className={`grid w-full flex-shrink-0 gap-6 ${
                  isLastSlide &&
                  (remainingProjects === 1 || remainingProjects === 2)
                    ? "grid-cols-1" // Last slide with 1 or 2 projects → single column
                    : "grid-cols-2" // Default → 2 columns
                }`}
              >
                {slideProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    link={project.link}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* For small screen 1 project and per row and continuous scrolling */}
      <div className="mx-auto flex w-[90%] flex-col gap-6 px-4 sm:max-w-[95%] md:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>

      {/* Navigation Buttons (for large screens) */}
      <button
        onClick={prevProjects}
        className="absolute left-5 top-1/2 hidden -translate-y-1/2 rounded-full p-3 text-3xl text-white hover:bg-gray-800 md:block"
      >
        {"<"}
      </button>
      <button
        onClick={nextProjects}
        className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-full p-3 text-3xl text-white hover:bg-gray-800 md:block"
      >
        {">"}
      </button>

      {/* Slider Indicator */}
      <div className="mt-6 flex hidden gap-2 md:flex">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-6 rounded-md transition-all ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Project;

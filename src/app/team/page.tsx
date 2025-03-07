// pages/teams.tsx
import React from "react";
import TeamCard from "@/components/TeamCard";
import Heading from "@/components/Heading";

const TeamsPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },
    {
      name: "John Doe",
      role: "Executive Head",
      imageUrl:
        "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
      links: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        email: "https://mail.google.com/mail/u/0/#inbox",
      },
    },

    // Add more members here
  ];

  return (
    <div className="bg-[url('/TeamsBg.png')] bg-cover bg-center">
      <div className="justify-content-center flex min-h-screen flex-col items-center bg-transparent p-8 font-montserrat">
        <Heading name="Heads" />
        <div className="mt-4 grid w-[75%] grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              description={member.description}
              links={member.links}
            />
          ))}
        </div>
      </div>

      <div className="justify-content-center flex min-h-screen flex-col items-center bg-transparent p-8 font-montserrat">
        <Heading name="SubHeads" />
        <div className="mt-4 grid w-[75%] grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              description={member.description}
              links={member.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;

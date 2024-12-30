// pages/teams.tsx
import React from 'react';
import TeamCard from '@/components/TeamCard';

const TeamsPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    {
      name: 'John Doe',
      role: 'Executive Head',
      imageUrl: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
      links: {linkedin: 'https://www.linkedin.com/feed/', github:'https://github.com/', email:'https://mail.google.com/mail/u/0/#inbox'},
    },
    
    // Add more members here
  ];

  return (
    <div className="flex flex-col justify-content-center items-center min-h-screen bg-black p-8 font-mont">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Heads
      </h1>
      <div className="grid grid-cols-4 w-[75%]  gap-12 justify-items-center ">
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
  );
};

export default TeamsPage;

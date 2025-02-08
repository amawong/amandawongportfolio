import React from 'react';
import ExperienceEntry from './ExperienceEntry/ExperienceEntry';
import boeing from '../assets/boeing.svg';
import neighborshare from '../assets/neighborshare.jpeg';
import innod from '../assets/innod.png';

const experiences = [
    {
        icon: neighborshare,
        company: 'NeighborShare',
        role: 'Software Engineering Intern',
        dates: ['Jun 2024', 'Aug 2024'],
        tech: ['React', 'Hasura', 'GraphQL'],
        tasks: [
            'Developed a customizable landing page template in React to increase user engagement and donations, improving traction of new users by 30%',
            'Integrated batched GraphQL queries to fetch user data efficiently, optimizing API latency by 75% and reducing overall webpage load time by 20%',
            'Implemented an enhanced filtering mechanism on the homepage to streamline navigation and improve UI/UX'
        ]
    },

    {
      icon: innod,
      company: 'Innovative Design',
      role: 'Front-End & UI/UX Developer',
      dates: ['Feb 2024', 'May 2024'],
      tech: ['React', 'Figma'],
      tasks: [
          'Collaborated closely with clients to design intuitive and aesthetic user interfaces for an optimal user experience',
          'Translated design mock-ups into responsive and functional web pages with HTML/CSS and Javascript',
          'Implemented interactive pages and visual assets to register members and display informative resources in React',
          'Optimized site organization and streamlined UX flow to enhance site interactivity, resulting in SEO increase of 10%'
      ]
  },
    
    {
        icon: boeing,
        company: 'The Boeing Company',
        role: 'Systems Engineering Intern',
        dates: ['Jun 2020', 'Aug 2020'],
        tech: ['Microsoft Office Suite', 'React'],
        tasks: [
            'Developed a Ground Systems Design Package that provided sales engineers with detailed infrastructure and system requirements to present and customize aerospace ground solutions, enhancing client alignment and sales', 
            'Enhanced system efficiency and employee productivity by 20% by streamlining system processes', 
            'Collaborated with senior lead engineers and cross-functional teams to ensure project success'
        ]
    }
];

function ExperienceList() {
  return (
    <div className='exp-list'>
      {experiences.map((experience, index) => (
        <ExperienceEntry
            key={index}
            icon={experience.icon}
            company={experience.company}
            role={experience.role}
            dates={experience.dates}
            technologies={experience.tech}
            tasks={experience.tasks}
        />    
      ))}
    </div>
  );
};

export default ExperienceList

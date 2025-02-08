import React from 'react';
import ProjectEntry from './ProjectEntry/ProjectEntry';
import Smile from '../assets/smile.webp';

const projects = [
    {
        icon: Smile,
        title: 'LED Gameboard',
        dates: ['Feb 2022', 'Apr 2022'],
        technologies: ['C', 'HTML/CSS', 'JavaScript', 'Arduino'],
        descriptions: [
            'Programmed minimax/expectimax algorithms for an LED game board that hosts Tic-Tac-Toe, Connect4, and Snake', 
            'Developed front-end of website (design, timeline, about pages) that showcases gameboard and design process with features such as image carousels and hover animations', 
            'Constructed board with cedar wood, 3D-printed components, Arduino, and soldered LED strips'
        ]
    }
];


function ProjectList() {
  
  return (
    <div className='proj-list'>
      {projects.map((project, index) => (
        <ProjectEntry
            key={index}
            icon={project.icon}
            title={project.title}
            dates={project.dates}
            technologies={project.technologies}
            descriptions={project.descriptions}
        />    
      ))}
    </div>
  );
};

export default ProjectList;

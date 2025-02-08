import React from 'react';
import './Projects.css';
import ProjectEntry from '../../common/ProjectEntry/ProjectEntry';
import Smile from '../../assets/smile.webp';
import githubWhite from '../../assets/githubWhite.svg';
import linkWhite from '../../assets/linkWhite.svg';
import ledIcon from '../../assets/ledicon.jpg';

const projects = [
    {
      icon: ledIcon,
      title: 'LED Gameboard',
      dates: ['Feb 2022', 'Apr 2022'],
      technologies: ['C', 'HTML/CSS', 'JavaScript', 'Arduino'],
      descriptions: [
          'Programmed minimax/expectimax algorithms for an LED game board that hosts Tic-Tac-Toe, Connect4, and Snake', 
          ],
      linkIcon: linkWhite,
      link: 'https://led-game-board.glitch.me/',
      githubIcon: githubWhite,
      github: 'https://github.com/agcdragon/led-game-board'
    },

    {
      icon: Smile,
      title: 'Voice-Controlled Car',
      dates: ['Oct 2021', 'Dec 2021'],
      technologies: ['Python', 'Java'],
      descriptions: [ 
          'Developed front-end of website (design, timeline, about pages) that showcases gameboard and design process with features such as image carousels and hover animations'      ]
  },

  {
    icon: Smile,
    title: 'Gitlet',
    dates: ['Feb 2022', 'Apr 2022'],
    technologies: ['C', 'HTML/CSS', 'JavaScript', 'Arduino'],
    descriptions: [
        'Constructed board with cedar wood, 3D-printed components, Arduino, and soldered LED strips'
    ]
  }
]


function Projects() {
  return (
    <div className='projects'>
        <p className='proj-header'><b>Projects</b></p>        
            <div className='proj-entries'>
            {projects.map((project, index) => (
              <ProjectEntry
                key={index}
                icon={project.icon}
                title={project.title}
                dates={project.dates}
                technologies={project.technologies}
                descriptions={project.descriptions}
                linkIcon={project.linkIcon}
                link={project.link}
                githubIcon={project.githubIcon}
                github={project.github}
        />    
      ))}
            </div>
    </div>
  );
}

export default Projects;

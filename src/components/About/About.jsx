import React from 'react';
import './About.css';
import Amanda from '../../assets/amanda.svg';
import aboutRect from '../../assets/aboutRect.svg';
import aboutTextYellow from '../../assets/about-text-yellow.svg';
import aboutTextRed from '../../assets/about-text-red.svg';
import pencil from '../../assets/pencil.svg';
import paper from '../../assets/paper.svg';
import skillsRect from '../../assets/skillsHeader.svg';
import sticky1 from '../../assets/sticky1.svg';
import sticky2 from '../../assets/sticky2.svg';

function About() {
  
  return (
    <div className='about'>
      <img src={aboutRect} className='about-header-rect' />
      <div className='about-me'><b>About Me</b></div>

      <div className='about-contents'>
        
        <div className='about-text'>
          <img src={aboutTextYellow} className='about-text-yellow' />
          <img src={aboutTextRed} className='about-text-red' />
          <div className='about-pg'>
            Hello! My name is Amanda Wong. I am an innovative and resourceful computer science graduate with strong skills in programming, algorithms, and software development using technologies such as Python, JavaScript, and React. 
            I am passionate about collaborating in dynamic team environments to build innovative, user-centered solutions. 
            Currently, I am seeking an entry-level software engineering role to leverage technical expertise, contribute creative problem-solving, and drive impactful projects. 
            In my free time I love reading 📚, journaling 📝, solving puzzles (NYT and LinkedIn games) 🧩, playing sports ⚽️🏐🏀, and trying new foods 🍴.
          </div>
        </div>
        <img className='about-img' src={Amanda} width='450' />
        
      </div>

      <div className='edu-skills'>
        <div className='education'>

          <div className='edu-header'>
            <img src={pencil} className='pencil' />
            <div className='edu-text'><b>Education</b></div>
          </div>
          
          <div className='paper'>

            <img src={paper} className='paper-img' />

            <div className='paper-text'>
              <div className='paper-text-top'>
                <div><b>University of California, Berkeley</b></div>
                <div><b>Graduated: </b>May 2024</div>
                <div><b>Major:</b> Electrical Engineering and Computer Science (<b>EECS</b>)</div>
                <br></br>
              </div>

              <div className='classes'>
                <div className='classes-header'><b>Relevant Coursework:</b></div>
                <ul>
                  <li>Data Structures</li>
                  <li>Artificial Intelligence</li>
                  <li>Computer Security</li>
                  <li>Database Systems</li>
                  <li>Internet Architecture and Protocols</li>
                  <li>Efficient Algorithms</li>
                  <li>Computer Architecture</li>
                  <li>Principles of Data Science</li>
                  <li>Discrete Math & Probability Theory</li>
                  <li>Linear Algebra & Differential Equations</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <div className='skills'>

          <div className='skills-header'>
            <img src={skillsRect} className='skills-Rect' />
            <div className='skills-header-text'><b>Skills</b></div>
          </div>

          <div className='skills-text'>

            <div className='sticky1'>
              <img src={sticky1} className='sticky1' />
              <div className='sticky1-text'>
                <div className='lang-head'><b>Languages:</b></div>
                <ul className='lang-list'>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>SQL</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>

            <div className='sticky2'>
              <img src={sticky2} className='sticky2' />
              <div className='sticky2-text'>
                <div className='lib-frames'><b>Libraries/Frameworks:</b> React, Typescript, Flask, MongoDB, REST API, NumPy, Pandas, Matplotlib, Seaborn </div>
                <div className='dev-tools'><b>Developer Tools:</b> Figma, Git, Linux/UNIX, Agile, Unit Testing, VS Code, IntelliJ</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;

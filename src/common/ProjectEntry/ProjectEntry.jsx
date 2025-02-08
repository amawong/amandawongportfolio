import React, { useState } from 'react';
import './ProjectEntry.css';
import polaroid from '../../assets/polaroid.svg';

function ProjectEntry({icon, title, dates, technologies, descriptions, linkIcon, link, githubIcon, github}) {

    const [hovered, setHovered] = useState(false);
    
    return (
            <div className='icon-container'>
                <div className="polaroid-wrapper">
                    <img src={polaroid} className='polaroid'/>
                    <div className='proj-info'>
                        <h3 className="title">{title}</h3>
                        <p className="proj-dates">{dates.join(' - ')}</p>
                    </div>
                    
                    <div className='icon-wrapper'
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={icon} alt="icon" className="icon"/>
                        
                        {hovered && <div className='overlay-text'>
                            <p className="proj-tech"><b>Technologies: </b>{technologies.join(', ')}</p>
                            {descriptions}
                            
                            <div className='live-links'>
                                <a href={link}><img src={linkIcon} className='link-icon'/></a>
                                <a href={github}><img src={githubIcon} className='github-icon'/></a>
                            </div> 
                        </div>}

                    </div>

                </div>
                
            </div>
            /* <div className='proj-info'>
                <h3 className="title">{title}</h3>
                <p className="proj-dates">{dates.join(' - ')}</p>
            </div> */
    );
  }
  
  export default ProjectEntry;
  
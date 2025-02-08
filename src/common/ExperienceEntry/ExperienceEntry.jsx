import React from 'react';
import './ExperienceEntry.css';
import entryImg from '../../assets/experienceEntry.svg';

function ExperienceEntry({icon, company, role, dates, technologies, tasks}) {
    return (
      <div className="entry-card">
        <img src={entryImg} className='entry-img' />
        <div className='entry-info'>
            <div className="role-stats">
                <img src={icon} alt="logo" className="logo"/>
            
                <div className='info'>
                    <h3 className="company">{company}</h3>
                    <p className="role">{role}</p>
                    <p className="dates">{dates.join(' - ')}</p>
                </div>
            </div>
       
            <div className="role-description">
                <p className="tech"><b>Technologies: </b>{technologies.join(', ')}</p>
                <p className="tasks-header"><b>Responsibilities: </b></p>
                {tasks && tasks.length > 0 && (
                    <ul className="tasks">
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

      </div>
    );
  }
  
  export default ExperienceEntry;
  
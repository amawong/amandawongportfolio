import React from 'react';
import './Experience.css';
import ExperienceList from '../../common/ExperienceList';
import expRect from '../../assets/expRect.svg';

function Experience() {
  return (
    <div className='experience'>
      <img src={expRect} className='exp-rect' />
      <div className='exp-header'><b>Experience</b></div>
      <ExperienceList />
    </div>
  );
}

export default Experience;

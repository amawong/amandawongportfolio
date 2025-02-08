import React from 'react';
import './Footer.css';
import twitterIcon from '../../assets/twitter.svg';
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import gmailIcon from '../../assets/gmail.png';
import resume from '../../assets/resume.svg';

const Footer = () => {
  return (
    <footer className="foot">
      <div className="footer-content">
        <div className='social-links'>
          <a href="https://twitter.com/amanduhhwong" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" className='twitter'/>
          </a>
          <a href="https://github.com/amawong" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/amandawong10" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://drive.google.com/file/d/1oW29P729pxlHXjJ5JI2_3vR6Fh0VUDEM/view?usp=sharing" target="_blank">
            <img src={resume} alt="resume icon" />
          </a>
        </div>
        <p>Contact: <a href="mailto:aewong02@gmail.com">aewong02@gmail.com</a></p>
        <p>&copy; {new Date().getFullYear()} Amanda Wong. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

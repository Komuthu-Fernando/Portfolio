import React, { useState, useEffect } from 'react';
import '../css/ProjectCard.css'; 

const ProjectCard = ({ logo, title, year, image }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='project-card-container'>
      <div
        className={`project-card ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <div className="logo-container">
          <img src={isMobile || hovered ? logo.color : logo.ash} alt={title} className="logo" />
        </div>
        {hovered && <img src={image} alt={title} className="background-image" />}
      </div>
      <p className='title'>{title} <span className='year'>{year}</span></p>
    </div>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import '../css/ProjectCard.css'; 

const ProjectCard = ({ logo, title, year, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='project-card-container'>
    <div
      className={`project-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logo-container">
        <img src={hovered ? logo.color : logo.ash} alt={title} className="logo" />
      </div>
      {hovered && <img src={image} alt={title} className="background-image" />}
    </div>
    <p className='title'>{title} <span className='year'>{year}</span></p>
    </div>
  );
};

export default ProjectCard;

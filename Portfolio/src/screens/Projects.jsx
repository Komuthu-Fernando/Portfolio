import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';

import freshLogoColor from '../assets/freshlyy-logo-color.webp';
import freshLogoAsh from '../assets/freshlyy-logo-ash.webp';
import freshImage from '../assets/freshlyy-project-image.webp';

import esImage from '../assets/es-project-image.webp';
import esLogoColor from '../assets/es-logo-color.webp';
import esLogoAsh from '../assets/es-logo-ash.webp';

import dobImage from '../assets/dob-project-image.webp';
import dobLogoColor from '../assets/dob-logo-color.webp';
import dobLogoAsh from '../assets/dob-logo-ash.webp';

import dcmImage from '../assets/dcm-project-image.webp';
import dcmLogoColor from '../assets/dcm-logo-color.webp';
import dcmLogoAsh from '../assets/dcm-logo-ash.webp';

import '../css/Projects.css';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'linear' } },
  };

  const staggerAnimation = {
    visible: {
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="project"
      variants={staggerAnimation} 
    >
      <center>
        <motion.div className="project-div" variants={textAnimation}>
          <div>
            <span className="project-text">Work</span>
          </div>
        </motion.div>
      </center>

      <center>
        <motion.span className="project-heading" variants={textAnimation}>
          <span className="title-color">My Latest</span> Projects
        </motion.span>
      </center>

      <div className="projects-grid">
        
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: esLogoColor, ash: esLogoAsh }}
            title="Earndeck Shipping Website"
            year="2024"
            image={esImage}
          />
        </motion.div>

        
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: dobLogoColor, ash: dobLogoAsh }}
            title="Doctor of Bat Website"
            year="2024"
            image={dobImage}
          />
        </motion.div>


        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: dcmLogoColor, ash: dcmLogoAsh }}
            title="DCM Desktop Application"
            year="2024"
            image={dcmImage} 
          />
        </motion.div>

        
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: freshLogoColor, ash: freshLogoAsh }}
            title="Freshlyy Mobile App"
            year="2023"
            image={freshImage} 
          />
        </motion.div>
      </div>

      <center>
        <motion.div className="project-paragraph" variants={textAnimation}>
          Building tech solutions that not only work seamlessly{' '}
          <span className="title-color">but deliver real impact. With my skills, we ensure success for everyone. Let's scale your</span>{' '}
          vision to new heights!
        </motion.div>
      </center>
    </motion.div>
  );
}

export default Projects;

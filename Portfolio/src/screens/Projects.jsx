import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';

import freshLogoColor from '../assets/freshlyy-logo-color.png';
import freshLogoAsh from '../assets/freshlyy-logo-ash.png';
import freshImage from '../assets/freshlyy-project-image.png';

import esImage from '../assets/es-project-image.png';
import esLogoColor from '../assets/es-logo-color.webp';
import esLogoAsh from '../assets/es-logo-ash.png';

import dobImage from '../assets/dob-project-image.png';
import dobLogoColor from '../assets/dob-logo-color.png';
import dobLogoAsh from '../assets/dob-logo-ash.png';

import dcmImage from '../assets/dcm-project-image.png';
import dcmLogoColor from '../assets/dcm-logo-color.png';
import dcmLogoAsh from '../assets/dcm-logo-ash.png';

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
      variants={staggerAnimation} // Stagger animation for children
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
        {/* Project 1 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: esLogoColor, ash: esLogoAsh }}
            title="Earndeck Shipping Website"
            year="2024"
            image={esImage}
          />
        </motion.div>

        {/* Project 2 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: dobLogoColor, ash: dobLogoAsh }}
            title="Doctor of Bat Website"
            year="2024"
            image={dobImage}
          />
        </motion.div>

        {/* Project 3 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: dcmLogoColor, ash: dcmLogoAsh }}
            title="Data Collection Manager Application"
            year="2024"
            image={dcmImage} // Replace with actual project image
          />
        </motion.div>

        {/* Project 4 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: freshLogoColor, ash: freshLogoAsh }}
            title="Freshlyy Mobile App"
            year="2023"
            image={freshImage} // Replace with actual project image
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

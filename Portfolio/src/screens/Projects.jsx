import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import freshLogoColor from '../assets/freshlyy-logo-color.png';
import freshLogoAsh from '../assets/freshlyy-logo-ash.png';
import freshImage from '../assets/freshlyy-project-image.png';
import '../css/Projects.css';

function Projects() {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true });

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const staggerAnimation = {
    visible: {
      transition: {
        staggerChildren: 0.6, 
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
        <motion.div className="project-text" variants={textAnimation}>
          <span>work</span>
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
            logo={{ color: freshLogoColor, ash: freshLogoAsh }}
            title="Freshlyy Mobile App"
            year="2023"
            image={freshImage}
          />
        </motion.div>

        {/* Project 2 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: freshLogoColor, ash: freshLogoAsh }}
            title="Another Cool App"
            year="2022"
            image={freshImage}
          />
        </motion.div>

        {/* Project 3 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: freshLogoColor, ash: freshLogoAsh }}
            title="E-Commerce Platform"
            year="2021"
            image={freshImage} // Replace with actual project image
          />
        </motion.div>

        {/* Project 4 */}
        <motion.div variants={cardAnimation}>
          <ProjectCard
            logo={{ color: freshLogoColor, ash: freshLogoAsh }}
            title="Portfolio Website"
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

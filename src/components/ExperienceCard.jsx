import React, { useRef } from 'react';
import '../css/ExperienceCard.css';
import { motion, useInView } from 'framer-motion';

const ExperienceCard = ({ company, period, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="experience-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div>
        <div className="experience-card">
          <div className="title-section">
            <span className="company">{company}</span>
            <span className="period">{period}</span>
          </div>
          <div className="description-section">
            <p>{description}</p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </motion.div>
  );
};

export default ExperienceCard;

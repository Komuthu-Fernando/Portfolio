import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../css/Contact.css';

const Error = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }, 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={container}
      className="contact-container"
    >
      
      <motion.div className="contact-button" variants={textAnimation}>
        <div>
          <span className="about-title">404 Error</span>
        </div>
      </motion.div>
      <div className='content-container'>
      <motion.h1 className="contact-heading" variants={textAnimation}>
        Page not found
      </motion.h1>

      <motion.p className="contact-subheading" variants={textAnimation}>
        This page does not exist or it was removed.
      </motion.p>

      <motion.div className="contact-action" variants={textAnimation}>
        <a href="/">
          <button className="contact-book">Go to homepage</button>
        </a>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default Error;

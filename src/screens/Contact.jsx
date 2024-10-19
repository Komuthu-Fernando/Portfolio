import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../css/Contact.css';

const Contact = () => {
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
          <span className="about-title">Contact</span>
        </div>
      </motion.div>
      <div className='content-container'>
      <motion.h1 className="contact-heading" variants={textAnimation}>
        <span className="title-color">Let's Get in</span> Touch
      </motion.h1>

      <motion.p className="contact-subheading" variants={textAnimation}>
        Let's connect and start your project ASAP
      </motion.p>

      <motion.div className="contact-action" variants={textAnimation}>
        <a href="https://cal.com/komuthu-fernando-i8aank" target="_blank" rel="noopener noreferrer">
          <button className="contact-book">Book a Call</button>
        </a>
        <p>or email <a href="mailto:komuthuapsara@gmail.com" className='ac-tag'>komuthuapsara@gmail.com</a></p>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

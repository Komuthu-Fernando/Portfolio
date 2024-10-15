import { motion } from 'framer-motion';
import '../css/Home.css';
import Projects from '../screens/Projects';

const Home = () => {
  return (
    <div>
    <div className="home-container">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <center><div className="intro-text">
           <span>Hello, I'm Komuthu <span className="wave">👋</span></span>
        </div>
        </center>
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Full Stack Developer <span className='title-sub'>& Designer crafting innovative solutions</span>
        </motion.h1>
        <motion.button
          className="email-button"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Email Me ↗
        </motion.button>
      </motion.div>
    </div>
    <div className='project-container'>
      <Projects />
    </div>
    </div>
  );
};

export default Home;

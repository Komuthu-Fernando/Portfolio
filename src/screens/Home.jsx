import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Home.css';
import Projects from '../screens/Projects';
import About from './About';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	useEffect(() => {
		const handleScrollToTop = () => {
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 100);
		};

		handleScrollToTop();
	}, []);

	const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
	const { ref: projectsRef, inView: projectsInView } = useInView({
		triggerOnce: true,
	});
	const { ref: aboutRef, inView: aboutInView } = useInView({
		triggerOnce: true,
	});
	const { ref: contactRef, inView: contactInView } = useInView({
		triggerOnce: true,
	});

	return (
		<div>
			<div className="home-container" id="/">
				<div className='glow-container'>
				<motion.div
					className="glowing-particle"
					animate={{
						x: ['0%', '100%', '-100%', '50%', '-50%'],
						y: ['0%', '-100%', '50%', '-50%', '100%'],
					}}
					transition={{
						duration: 15,
						ease: 'easeInOut',
						repeat: Infinity,
						repeatType: 'mirror',
					}}
				/>
</div>
				<motion.div
					className="hero-section"
					ref={heroRef}
					initial={{ opacity: 0, y: 50 }}
					animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
				>
					<div>
						<span className="home-title">
							Hello, I'm Komuthu <span className="wave">👋</span>
						</span>
					</div>
					<motion.h1
						className="title"
						initial={{ opacity: 0, y: 50 }}
						animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						Full Stack Developer{' '}
						<span className="title-sub">
							& Designer crafting innovative solutions
						</span>
					</motion.h1>
					<center>
						<a href="mailto:komuthuapsara@gmail.com" className="a-tag">
							<motion.button
								className="email-button"
								initial={{ opacity: 0, y: 50 }}
								animate={
									heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
								}
								transition={{ delay: 0.6, duration: 0.8 }}
								whileHover="hover"
							>
								Email Me <FontAwesomeIcon icon={faLocationArrow} />
							</motion.button>
						</a>
					</center>
				</motion.div>
			</div>

			<div id="portfolio"></div>
			<div className="project-container" ref={projectsRef}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={
						projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
					}
					transition={{ duration: 0.8 }}
				>
					<Projects />
				</motion.div>
			</div>

			<div className="aboutus-container" id="about" ref={aboutRef}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
				>
					<About />
				</motion.div>
			</div>

			<div id="contact" ref={contactRef}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
				>
					<Contact />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;

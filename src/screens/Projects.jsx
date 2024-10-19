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

	// Create a separate ref for the paragraph
	const paragraphRef = useRef(null);
	const isParagraphInView = useInView(paragraphRef, { once: true });

	const textAnimation = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const cardAnimation = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: 'linear' },
		},
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
			animate={isInView ? 'visible' : 'hidden'}
			className="project"
			variants={staggerAnimation}
		>
			<div className='project-heading-div'>
				<motion.div className="project-div" variants={textAnimation}>
					<div>
						<span className="about-title">Portfolio</span>
					</div>
				</motion.div>

				<motion.span className="project-heading" variants={textAnimation}>
					<span className="title-color">My Latest</span> Projects
				</motion.span>
			</div>

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
				<motion.div
					className="project-paragraph"
					ref={paragraphRef} 
					initial="hidden"
					animate={isParagraphInView ? 'visible' : 'hidden'} 
					variants={textAnimation}
				>
					Building tech solutions that work seamlessly{' '}
					<span className="title-color">
					and deliver real impact. With expertise in development and innovation, success is guaranteed for your projects. Let's scale your
					</span>{' '}
					vision to new heights!
				</motion.div>
			</center>
		</motion.div>
	);
}

export default Projects;

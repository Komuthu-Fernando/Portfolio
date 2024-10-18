import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../css/About.css';
import ExperienceCard from '../components/ExperienceCard';

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const careerItems = [
		'Mobile Development',
		'Branding',
		'Web Development',
		'Designing',
	];

	const repeatedItems = [...careerItems, ...careerItems];

	const textAnimation = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const cardAnimation = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
	  };

	const staggerAnimation = {
		visible: {
			transition: {
				staggerChildren: 0.4,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			className="about-container"
			variants={staggerAnimation}
		>
			
			<section className="about-section">
				<motion.div
					className="about-image"
					variants={cardAnimation}
				></motion.div>
				<motion.div className="about-content" variants={textAnimation}>
					<div>
						<span className="about-title">About</span>
					</div>
					<span className="about-heading">
						<span className="title-color">I am a </span>Developer
						<span className="title-color"> with a </span>Artistic Background
					</span>
					<motion.div variants={staggerAnimation}>
					<p>
						I am currently pursuing a Bachelor's degree in Information
						Technology, co-founding a startup, and exploring design as a
						passionate hobby.
					</p>
					</motion.div>
				</motion.div>
			</section>

			
			<section className="horizontal-bar-section">
				<div className="horizontal-bar">
					<motion.div
						className="scrolling-text"
						animate={{ x: ['0%', '-100%'] }}
						transition={{
							repeat: Infinity,
							ease: 'linear',
							duration: 35,
						}}
					>
						{repeatedItems.map((item, index) => (
							<span key={index} className="career-item">
								{item}
							</span>
						))}
					</motion.div>

					<motion.div
						className="scrolling-text"
						animate={{ x: ['0%', '-100%'] }}
						transition={{
							repeat: Infinity,
							ease: 'linear',
							duration: 35,
						}}
					>
						{repeatedItems.map((item, index) => (
							<span key={index} className="career-item">
								{item}
							</span>
						))}
					</motion.div>
				</div>
			</section>

			
			<section className="career-section">
				<motion.div className="career-intro" variants={textAnimation}>
					<span className="about-title">Career</span>
				</motion.div>
				<motion.span className="career-heading" variants={textAnimation}>
					<span className="title-color">And This Is </span>My Career
				</motion.span>
				<motion.div className="career-container" variants={staggerAnimation}>
					<ExperienceCard
						company="Sparkhaus"
						period="2024-Present"
						description="Co-founded Sparkhaus, a social media marketing agency (SMMA) focused on providing small and middle-scale businesses with a dynamic digital presence. Sparkhaus helps brands establish their online arena through tailored marketing strategies and creative solutions."
					/>
					<ExperienceCard
						company="Earndeck Shipping"
						period="2024-Present"
						description="Serving as an IT Specialist at Earndeck Shipping, a maritime survey company, I manage the company’s website and oversee the IT operations to ensure smooth functionality and digital efficiency in support of their business needs."
					/>
					<ExperienceCard
						company="Zebra Technologies"
						period="2023-2024"
						description="As a Software Engineering Intern at Zebra Technologies, I worked on developing innovative software solutions. My responsibilities included designing and implementing applications, such as a desktop database management tool and an augmented reality (AR) application, while collaborating with global teams."
					/>
				</motion.div>
			</section>
		</motion.div>
	);
};

export default About;

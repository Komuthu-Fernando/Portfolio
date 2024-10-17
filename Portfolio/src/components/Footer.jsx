import '../css/Footer.css';
import icon from '../assets/komuthu.png';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-left">
					<div className="image-container">
						<img src={icon} alt="Komuthu Fernando" className="footer-icon" />
						<span>Komuthu Fernando</span>
					</div>
					<p>
						Full Stack Developer <br /> & Designer
					</p>
					<p>komuthuapsara@gmail.com</p>
				</div>

				<div className="footer-right">
					<ul className="nav-links-footer">
						<li>
							<a href="#hero">Portfolio</a>
						</li>
						<li>
							<a href="#work">About</a>
						</li>
						<li>
							<a href="#about">Contact</a>
						</li>
						<li>
							<a href="#contact">Book a call</a>
						</li>
					</ul>
					<ul className="nav-links-footer">
						<li>
							<a
								href="https://www.linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer-line"></div>
		</footer>
	);
};

export default Footer;

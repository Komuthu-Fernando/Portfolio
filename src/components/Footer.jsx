import '../css/Footer.css';
import icon from '../assets/komuthu.webp';

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
					<p><a href="mailto:komuthuapsara@gmail.com" className='ac-tag'>komuthuapsara@gmail.com</a></p>
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
							<a href="https://cal.com/komuthu-fernando-i8aank">Book a call</a>
						</li>
					</ul>
					<ul className="nav-links-footer">
						<li>
							<a
								href="https://www.linkedin.com/in/komuthu-fernando/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/koma.__/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="mailto:sparkhausdigital@gmail.com"
							>
								Sparkhaus
							</a>
						</li>
					</ul>
				</div>
			</div>
			<hr className="footer-line" />
		</footer>
	);
};

export default Footer;

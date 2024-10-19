import { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';
import icon from '../assets/komuthu.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="nav-header">
      <Link to="/" smooth={true} duration={500}>
        <div className="image-div">
          <img src={icon} alt="icon" />
          <span>Komuthu Fernando</span>
        </div>
        </Link>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>Work</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

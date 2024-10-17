import { Link } from 'react-scroll'; 
import '../css/Navbar.css';
import icon from '../assets/komuthu.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" smooth={true} duration={500}>
            <div className="image-div">
              <img src={icon} alt="icon" />
              <span>Komuthu Fernando</span>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="nav-links">
        <li><Link to="/" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

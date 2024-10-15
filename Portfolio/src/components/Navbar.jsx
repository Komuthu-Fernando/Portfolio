import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import icon from '../assets/komuthu.jpeg';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="image-div">
        <img src={icon} alt="icon" />
        <span>Komuthu Fernando</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

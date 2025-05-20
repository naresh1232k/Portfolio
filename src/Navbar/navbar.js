import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import logo from '../assets/portfolio.png';

const Navbar = () => {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />

      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
</nav>

      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>

    </header>
  );
};

export default Navbar;

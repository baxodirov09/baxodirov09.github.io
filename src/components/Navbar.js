import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";
import logo from "../assets/—Pngtree—samurai japanese knife illustration_4236048.png";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/"><i className="fas fa-home"></i><p>Home</p></Link>
            </li>
            <li>
              <Link to="/about"><i className="far fa-user-circle"></i><p>About</p></Link>
            </li>
            <li>
              <Link to="/skills"><i className="fas fa-cog"></i><p>Skills</p></Link>
            </li>
            <li>
              <Link to="/work"><i className="fas fa-toolbox"></i><p>Work</p></Link>
            </li>
            <li>
              <Link to="/contact"><i className="far fa-envelope"></i><p>Contact</p></Link>
            </li>
          </ul>
        </div>
        <div className="social_media">
          <ul>
            <li>
              <a href="!#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/baxodirov_09/?hl=ru">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="!#">
                <i className="fab fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

  

  const Navbar = () => {
    const [menu, setMenu] = useState("home");
    
    return (
      <header className="header">
        <div className="logo-container">
          <img src={assets.logo} alt="logo" className="logo" />
        </div>

        <ul className="navbar-menu">
          <li>
            <a
              href="#home"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenu("about")}
              className={menu === "about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#experience"
              onClick={() => setMenu("experience")}
              className={menu === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#education"
              onClick={() => setMenu("education")}
              className={menu === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenu("projects")}
              className={menu === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    );
  };

export default Navbar;

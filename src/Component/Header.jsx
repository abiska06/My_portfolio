import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo cursive-like">
            Abiska Sharma
          </a>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

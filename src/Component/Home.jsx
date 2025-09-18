import React from "react";

const Home = () => {

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <h1>Abiska Sharma</h1>
      <h3>Creative Developer & Designer</h3>

     <p>
        Crafting engaging and user-friendly web experiences with a blend of creativity and technical expertise.
      </p>

      <div className="hero-buttons">
        <button 
          className="btn primary-btn" 
          onClick={() => scrollToSection("projects")}
        >
          View My Work
        </button>

        <button 
          className="btn secondary-btn" 
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Home;



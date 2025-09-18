import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Bubbles from "./Component/Bubbles";

const App = () => {
  return (
    <div>
      <Header />
      <Bubbles />
      <main className="main">
        <div className="container">
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>         

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
          
        </div>
        
      </main>
    </div>
  );
};

export default App;




import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "serif",
          fontSize: "40px",
          borderBottom: "6px solid #a67855", // dark brown underline
          display: "inline-block", // makes the underline fit text width
          paddingBottom: "5px",
          margin: "0 auto",
        }}
      >
        About Me
      </h1>



      <div className="about-container">
        <div className="about-photo">
          <img src="/My-Photo.jpg" alt="About Me" />
        </div>

        <div className="about-content">
          <p>
            I’m a creative and curious web developer, exploring the world of web
            design and development while studying BSc Computer Science
            with AI at Sunway College, affiliated with Birmingham City
            University. I enjoy building websites and applications that
            are both functional and visually engaging, while learning new
            technologies along the way.
          </p>
          <p>
            I work with tools like React, Node.js, and design software to bring
            ideas to life. My focus is on blending technical skills with
            creativity, so every project not only works well but also has a
            personal touch.
          </p>
          <p>
            When I’m not coding, I’m exploring new design trends, experimenting
            with creative projects, or sketching ideas for my next web
            application — always learning and growing.
          </p>
          <p>
            I love collaborating with others and I’m excited to connect with
            people who share a passion for creating meaningful and fun digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


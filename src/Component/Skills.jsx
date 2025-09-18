import React from "react";

const skillsData = {
  "Frontend Development": [
    "React",
    "Next.js",
    "JavaScript",
    "Design",
    "UI/UX Design",
    "Figma",
    "Prototyping",
    "Responsive Design",
    "React Native"
  ],
  "Backend Development": [
    "Node.js",
    "Python",
    "Firebase"
  ],
  "Web Technologies": [
    "HTML",
    "CSS",
    "JavaScript",
    "REST APIs",
  ],
  "Tools & Others": [
    "Git & GitHub",
    "VS Code",
    "Figma"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 style={{ textAlign: "center", marginBottom: "2rem",fontFamily: "cursive, 'Comic Sans MS', 'Brush Script MT', serif",
    fontWeight: 700,fontSize:40 }}>Skills & Expertise</h2>

        <div className="skills-grid">
          {Object.keys(skillsData).map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-list-horizontal">
                {skillsData[category].map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




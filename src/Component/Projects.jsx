import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nyano Kokh - Smart Baby Monitor",
      description:
        "A smart baby monitoring system using IoT sensors to track temperature, heart rate, and SpO₂ in real-time, with alerts for abnormal readings.",
      image: "/Nyano-Kokh.png",
      codeLink: "https://github.com/abiska06/komal_ghum"
    },
    {
      id: 2,
      title: "Hospital Management System",
      description:
        "A Python Tkinter app to manage doctors, patients, and assignments, streamlining hospital operations with an intuitive interface.",
      image: "/Hospital-management.png",
      codeLink: "https://github.com/abiska06/Hospital-management-system"
    },
    {
      id: 3,
      title: "Lip Sync - AI-Powered Lip Reading",
      description:
        "A Python and OpenCV app that recognizes spoken words from lip movements in real-time, exploring AI for accessibility.",
      image: "/Lip-Sync.jpeg",
      codeLink: "https://github.com/yourusername/Lip-Sync"
    }
  ]

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.5rem",
          color: "var(--text-dark)",
        }}
      >
        My Projects
      </h2>

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem' }}>
        {projects.map((project) => (
          <div key={project.id} className="project-card" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '50px' }}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              style={{ width: "100%", borderRadius: "50px", marginBottom: "1rem" }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#d8c3a5',
                color: '#fff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              View My Project 
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

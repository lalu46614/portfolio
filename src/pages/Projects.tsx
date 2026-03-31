import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiPytorch, SiSqlite } from 'react-icons/si';

const techIcons: { [key: string]: JSX.Element } = {
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "Python": <FaPython />,
  "OpenCV": <SiOpencv />,
  "YOLOv5": <SiOpencv />,
  "TensorFlow": <SiTensorflow />,
  "PyTorch": <SiPytorch />,
  "SQLite": <SiSqlite />,
};

const myProjects = [
  {
    title: "AI Accident Detection System (Uyir Project)",
    description:
      "Developed a real-time accident detection and emergency response system using computer vision. The model detects accidents, analyzes severity, and helps notify authorities instantly. This project won the Best Project Award at the Uyir Road Safety Hackathon 2025.",
    techUsed: "Python, OpenCV, YOLOv5",
    image: "/projects/accident.jpg", // replace with your image
  },
  {
    title: "Emotion Recognition System",
    description:
      "Built a multi-modal emotion recognition system for video conferencing using facial and audio cues. The system provides real-time feedback and generates emotion insights for meetings.",
    techUsed: "Python, PyTorch, Computer Vision",
    image: "/projects/emotion.jpg",
  },
  {
    title: "RecruitAI – AI Recruitment System",
    description:
      "Designed and developed an AI-powered recruitment platform that analyzes job descriptions and resumes, ranks candidates, and assists recruiters with shortlisting and interview workflows.",
    techUsed: "React, Node.js, SQLite",
    image: "/projects/recruitai.jpg",
  },
  {
    title: "Traffic Signal Optimization System",
    description:
      "Built an intelligent traffic management system that dynamically adjusts signal timings based on vehicle density and prioritizes emergency vehicles like ambulances.",
    techUsed: "Python, OpenCV",
    image: "/projects/traffic.jpg",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
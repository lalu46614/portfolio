import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiPytorch, SiSqlite } from 'react-icons/si';
import uyirImage from '../images/uyir.jpg';
import prismImage from '../images/Prism.png';
import easyImage from '../images/easyRecruit.png';

interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: string;
  github: string;
}

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

const myProjects: Project[] = [
  {
    title: "AI Accident Detection System (Uyir Project)",
    description:
      "Developed a real-time accident detection and emergency response system using YOLO. The model detects accidents, analyzes severity, and helps notify authorities instantly. This project won the Best Project Award at the Uyir Road Safety Hackathon 2025.",
    techUsed: "Python, OpenCV, YOLOv5",
    image: uyirImage,
    github: "https://github.com/lalu46614/V-AID-model",
  },
    {
    title: "Liquibase Migration Dashboard",
    description:
      "A DevOps/DB admin console for managing Liquibase-managed MySQL schema migrations across three environments: DEV, QA, and PROD. The dashboard provides real-time status updates, migration history, and error tracking to streamline database change management.",
    techUsed: "GitHub Actions, Mysql, Liquibase",
    image: prismImage,
    github: "https://github.com/lalu46614/CICDforLiquibaseMigration",
  },
  {
    title: "Semantic Bucket Orchestration System",
    description:
      "Built an orchestration system to categorize and route tasks using semantic buckets, enabling efficient workflow management across multiple services and communication channels.",
    techUsed: "Python, APIs, Backend Systems",
    image: "/projects/omnichannel.jpg",
    github: "https://github.com/lalu46614/Semantic-Bucket-Orchestration",
  },
  {
    title: "RecruitAI – AI Recruitment System",
    description:
      "An Automated recruitment assistant that analyzes resumes, job descriptions, and candidate fit using a multi-agent system and intuitive React interface. It streamlines the hiring process by providing insights and recommendations to recruiters.",
    techUsed: "React, Node.js, SQLite",
    image: easyImage,
    github: "https://github.com/lalu46614/EasyRecruit",
  },

];

const Projects: React.FC = () => {
  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            onClick={() => handleProjectClick(project.github)}
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
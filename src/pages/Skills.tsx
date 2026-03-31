import React from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiOpencv, SiTensorflow, SiPytorch, SiMysql, SiMongodb } from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
  FaPython: <FaPython />,
  SiOpencv: <SiOpencv />,
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  FaGitAlt: <FaGitAlt />,
};

const mySkills = [
  {
    category: "AI / Machine Learning",
    skills: [
      {
        name: "Computer Vision",
        icon: "SiOpencv",
        description: "Built real-time accident detection and monitoring systems using OpenCV and YOLO.",
      },
      {
        name: "Deep Learning",
        icon: "SiPytorch",
        description: "Worked on neural networks for emotion recognition and vision-based models.",
      },
      {
        name: "TensorFlow / PyTorch",
        icon: "SiTensorflow",
        description: "Experience training and deploying deep learning models for real-world use.",
      },
    ],
  },
  {
    category: "Programming",
    skills: [
      {
        name: "Python",
        icon: "FaPython",
        description: "Primary language for AI, computer vision, and backend logic.",
      },
    ],
  },
  {
    category: "Web Development",
    skills: [
      {
        name: "React",
        icon: "FaReact",
        description: "Built dynamic UIs including AI-powered recruitment system (RecruitAI).",
      },
      {
        name: "Node.js",
        icon: "FaNodeJs",
        description: "Basic backend development and API handling.",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: "SiMysql",
        description: "Used for structured data storage in projects.",
      },
      {
        name: "MongoDB",
        icon: "SiMongodb",
        description: "Handled flexible data storage and queries.",
      },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      {
        name: "YOLOv5",
        icon: "SiOpencv",
        description: "Used for object detection in accident detection systems.",
      },
      {
        name: "Git",
        icon: "FaGitAlt",
        description: "Version control and collaborative development.",
      },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {mySkills.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category.category}</h3>

          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">
                  {iconMap[skill.icon] || <FaReact />}
                </div>

                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span
                      key={i}
                      className="letter"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>

                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
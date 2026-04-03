import React from 'react';
import './Skills.css';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

import {
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiCplusplus,
  SiExpress,
} from 'react-icons/si';

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
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiCplusplus: <SiCplusplus />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiExpress: <SiExpress />,
};

const mySkills = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "C++",
        icon: "SiCplusplus",
        description: "Used for problem solving and competitive programming.",
      },
      {
        name: "Java",
        icon: "FaJava",
        description: "Object-oriented programming and backend basics.",
      },
      {
        name: "Python",
        icon: "FaPython",
        description: "Primary language for AI, ML, and backend systems.",
      },
      {
        name: "JavaScript",
        icon: "SiJavascript",
        description: "Used for frontend and backend web development.",
      },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      {
        name: "HTML5",
        icon: "FaHtml5",
        description: "Structured and semantic web page development.",
      },
      {
        name: "CSS3",
        icon: "FaCss3Alt",
        description: "Responsive and modern UI styling.",
      },
      {
        name: "React",
        icon: "FaReact",
        description: "Built dynamic UIs like AI-based recruitment system.",
      },
      {
        name: "Node.js",
        icon: "FaNodeJs",
        description: "Backend development and API creation.",
      },
      {
        name: "Express",
        icon: "SiExpress",
        description: "REST API development and server-side logic.",
      },
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      {
        name: "Computer Vision",
        icon: "SiOpencv",
        description: "Built real-time accident detection using YOLO and OpenCV.",
      },
      {
        name: "Deep Learning",
        icon: "SiPytorch",
        description: "Worked on neural networks and vision-based models.",
      },
      {
        name: "TensorFlow / PyTorch",
        icon: "SiTensorflow",
        description: "Model training, evaluation, and deployment.",
      },
    ],
  },
  {
    category: "Database & DevOps",
    skills: [
      {
        name: "MongoDB",
        icon: "SiMongodb",
        description: "NoSQL database for flexible data storage.",
      },
      {
        name: "MySQL",
        icon: "SiMysql",
        description: "Relational database for structured data.",
      },
      {
        name: "CI/CD",
        icon: "FaGitAlt",
        description: "Automated deployment pipelines using Liquibase & Flyway.",
      },
      {
        name: "DevOps",
        icon: "FaGitAlt",
        description: "Experience with deployment workflows and automation.",
      },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      {
        name: "YOLO",
        icon: "SiOpencv",
        description: "Used for real-time object detection systems.",
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
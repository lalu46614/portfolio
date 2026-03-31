import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiCoursera, SiIeee } from 'react-icons/si';

const iconData: { [key: string]: JSX.Element } = {
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
};

const myCertifications = [
  {
    title: "Python for Data Science",
    issuer: "IIT Madras",
    issuedDate: "2024",
    iconName: "university",
    link: "#"
  },
  {
    title: "Machine Learning Foundations",
    issuer: "IIT Madras BS Degree",
    issuedDate: "2024",
    iconName: "university",
    link: "#"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issuedDate: "2025",
    iconName: "coursera",
    link: "#"
  },
  {
    title: "Computer Vision Basics",
    issuer: "Coursera",
    issuedDate: "2025",
    iconName: "coursera",
    link: "#"
  },
  {
    title: "Uyir Road Safety Hackathon – Best Project Award",
    issuer: "Uyir Hackathon",
    issuedDate: "2025",
    iconName: "ieee",
    link: "#"
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {myCertifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>

              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>

              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>

            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const userData = {
  name: "Lalu M",
  title: "AI Engineer · Computer Vision · Real-Time Systems",
  summary:
    "An AI engineer focused on building intelligent systems that go beyond theory. From accident detection to emotion-aware platforms, I create solutions that can see, understand, and respond in real time. Driven by real-world impact, I build scalable applications that work beyond the lab.",
  companyUniversity:
    "Kumaraguru College of Technology · IIT Madras BS (Data Science)",
  linkedinLink: "https://www.linkedin.com/in/lalu-m-475312296/", 
  email: "lalu46614@gmail.com", 
  phoneNumber: "+91-9489972262", 
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>

          <p className="badge-description">
            {userData.summary}
          </p>

          <p className="badge-company">
            {userData.companyUniversity}
          </p>

          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>Open to opportunities, collaborations, or just a quick chat.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactMe;
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';

const myTimelineData: TimelineItem[] = [
  {
    timelineType: "work",
    title: "AI R&D Intern",
    name: "September AI",
    dateRange: "2025",
    techStack: "AI Systems, Real-time Processing, Applied ML",
    summaryPoints: [
      "Worked on developing AI-driven solutions with a focus on real-time applications and system efficiency.",
      "Contributed to research and development of intelligent systems aimed at solving practical problems.",
    ],
  },
{
  timelineType: "work",
  title: "DevOps & Database Intern – Samsung PRISM",
  name: "Samsung R&D Institute India",
  dateRange: "2025",
  techStack: "Liquibase, MySQL, CI/CD",
  summaryPoints: [
    "Developed a live dashboard to monitor and manage database migration workflows.",
    "Implemented CI/CD pipelines for schema and data changes using Liquibase and explored Flyway.",
    "Improved deployment reliability and migration traceability through automation.",
  ],
},
{
  timelineType: "work",
  title: "AI Model Developer – UYIR Project",
  name: "Team YOYO",
  dateRange: "2025",
  techStack: "YOLOv8, OpenCV, Python",
  summaryPoints: [
    "Developed a YOLOv8-based real-time accident detection system for multi-class collision scenarios.",
    "Optimized model performance to reduce false positives in complex traffic environments.",
    "Contributed to a government-supported pilot deployment at traffic junctions in Coimbatore.",
    "Won Best Project Award at the Uyir Road Safety Hackathon 2025.",
  ],
},
{
  timelineType: "education",
  title: "B.S. in Data Science and Applications",
  name: "IIT Madras (Online Degree)",
  dateRange: "2024 – Present",
  techStack: "Statistics, Python, Data Analysis",
  summaryPoints: [
    "Completed Foundation Level and currently pursuing Diploma Level in Data Science.",
    "Gained strong foundations in statistics, Python programming, and data analysis.",
  ],
  },
  {
    timelineType: "education",
    title: "B.E. Computer Science and Engineering",
    name: "Kumaraguru College of Technology",
    dateRange: "2023 – Present",
    techStack: "",
    summaryPoints: [
      "Studying core computer science subjects including networks, databases, and software engineering.",
      "Actively involved in AI projects, hackathons, and system design.",
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      </div>

      <VerticalTimeline>
        {myTimelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#000' }
                : { background: 'rgb(255, 224, 230)', color: '#000' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? {
                    borderRight:
                      index === 0
                        ? '7px solid rgb(33, 150, 243)'
                        : '7px solid rgb(240, 240, 240)',
                  }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <div>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>

              {item.techStack && (
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              )}

              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                {item.summaryPoints.map((point, i) => (
                  <li key={i} style={{ marginBottom: '5px' }}>{point}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
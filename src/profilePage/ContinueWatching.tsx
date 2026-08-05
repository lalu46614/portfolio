import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'stalker';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/300/200", link: "/skills" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/300/200", link: "/certifications" },
  ],
  stalker: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];
  const profileLabel = `${profile.charAt(0).toUpperCase()}${profile.slice(1)}`;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profileLabel}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;

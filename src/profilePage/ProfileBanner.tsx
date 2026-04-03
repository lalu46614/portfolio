import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';

const bannerData: ProfileBannerType = {
  backgroundImage: { url: 'https://assets.nflxext.com/ffe/siteui/vlv3/6bb3bd6c-76b0-4108-9202-f68af1beb2a0/web_tall_panel/US-en-20260323-TRIFECTA-perspective_c0c45de7-747f-477d-98fe-b00abc5ec4fd_large.jpg' },
  headline: 'LALU M',
  resumeLink: { url: 'https://drive.google.com/file/d/1Mxd5c4YBsDNavllQoevRRbjZbkR35Pzc/view?usp=sharing' },
  linkedinLink: 'https://www.linkedin.com/in/lalu-m-475312296',
  profileSummary: 'Undergraduate Computer Science student with a strong focus on Artificial Intelligence, Computer Vision, and Deep Learning. Experienced in developing, optimizing, and deploying AI-driven systems,including real-time vision-based models for societal applications. Skilled in model evaluation, performance benchmarking, and end-to-end ML pipeline design. Deeply interested in applied AI research,intelligent systems, and building scalable solutions that create measurable real-world impact.',
};

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    if (!bannerData.linkedinLink) return;
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

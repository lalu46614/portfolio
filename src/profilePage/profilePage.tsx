import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import blueImage from '../images/blue.png';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'recruiter' | 'stalker';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'stalker'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  // Replace animated background media with a static placeholder.
  // (Used by both recruiter and stalker so the two profiles are identical for now.)
  const backgroundImage = profile === 'recruiter' || profile === 'stalker' ? blueImage : backgroundGif;
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;

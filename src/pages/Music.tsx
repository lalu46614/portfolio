import React from 'react';
import './Music.css';

const favoriteGenres = ["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"];
const favoriteAlbums = [
  { title: "Hotel California", artist: "The Eagles", emoji: "🎸" },
  { title: "Back in Black", artist: "AC/DC", emoji: "🎵" },
  { title: "Appetite for Destruction", artist: "Guns N' Roses", emoji: "🎸" },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p></p>

      </div>
    </div>
  );
};

export default Music;

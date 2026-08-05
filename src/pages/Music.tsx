import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Music.css';

type Song = {
  title: string;
  artist: string;
  albumArtwork: string;
  spotifyEmbedUrl: string;
};

const SONGS: Song[] = [
  {
    title: 'Until I Found You',
    artist: 'Stephen Sanchez',
    albumArtwork: '/music/covers/until.jpg',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/18E1LAdiOj79wZqSOYMHE7'
  },
  {
    title: 'I Wanna Be Yours',
    artist: 'Arctic Monkeys',
    albumArtwork: '/music/covers/wanna.jpg',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n'
  },
  {
    title: 'Let Her Go',
    artist: 'Passenger',
    albumArtwork: '/music/covers/lethergo.jpg',
    spotifyEmbedUrl: 'https://embed.spotify.com/?uri=spotify:track:2pUpNOgJBIBCcjyQZQ00qU'
  },
  {
    title: 'Attention',
    artist: 'Charlie Puth',
    albumArtwork: '/music/covers/attention.jpg',
    spotifyEmbedUrl: 'https://embed.spotify.com/?uri=spotify:track:5cF0dROlMOK5uNZtivgu50'
  },
  {
    title: 'Savage Love',
    artist: 'Jason Derulo',
    albumArtwork: '/music/covers/savage.jpg',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/1xQ6trAsedVPCdbtDAmk0c'
  },
  {
    title: 'i dont care',
    artist: 'Ed Sheeran & Justin Bieber',
    albumArtwork: '/music/covers/idontcare.jpg',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/3HVWdVOQ0ZA45FuZGSfvns'
  }
];

const Music: React.FC = () => {
  const [index, setIndex] = useState(0);
  const song = SONGS[index];

  const prev = () => setIndex(i => (i - 1 + SONGS.length) % SONGS.length);
  const next = () => setIndex(i => (i + 1) % SONGS.length);

  return (
    <div className="music-page">
      <div className="music-container now-playing">
        <div className="music-header">
          <div className="music-badge">MUSIC ROOM</div>
          <h1 className="hero">Now Playing</h1>
          <p className="music-subtitle">Recovered from subject's listening history.</p>
        </div>

        <div className="now-container">
          <motion.div key={index} className="artwork-card no-artwork" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.32 }}>
            <div className="meta">
              <div className="track-title">{song.title}</div>
              <div className="track-artist">{song.artist}</div>
            </div>

            <div className="controls">
              <button className="btn circle prev" onClick={prev} aria-label="Previous">⏮</button>
              <button className="btn circle play" onClick={() => {}} aria-label="Play">▶</button>
              <button className="btn circle next" onClick={next} aria-label="Next">⏭</button>
            </div>

            <div className="embed-wrap">
              <iframe title="spotify-embed" src={song.spotifyEmbedUrl} width="100%" height="232" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Music;

import React, { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import blueImage from '../images/blue.png';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';

type ProfileType = 'recruiter' | 'stalker';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";
  const { profileName } = useParams<{ profileName: string }>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  const profile = ['recruiter', 'stalker'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  useEffect(() => {
    if (profile !== 'recruiter') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let t = 0;
    let stars: Array<{
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      op: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    
    // Create stars
    stars = Array.from({ length: 500 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
      op: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Background
      const bg = ctx.createRadialGradient(w * 0.65, h * 0.35, 0, w * 0.65, h * 0.35, w * 0.85);
      bg.addColorStop(0, '#180620');
      bg.addColorStop(0.45, '#0c0415');
      bg.addColorStop(1, '#040008');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Red nebula
      const rx = w * 0.85 + Math.sin(t * 0.0005) * w * 0.035;
      const ry = h * 0.38 + Math.cos(t * 0.00042) * h * 0.025;
      const nb = ctx.createRadialGradient(rx, ry, 0, rx, ry, w * 0.52);
      nb.addColorStop(0, `rgba(229,9,20,${0.17 + Math.sin(t * 0.001) * 0.05})`);
      nb.addColorStop(0.5, 'rgba(170,20,55,.06)');
      nb.addColorStop(1, 'transparent');
      ctx.fillStyle = nb;
      ctx.fillRect(0, 0, w, h);

      // Blue accent
      const bx = w * 0.58 + Math.cos(t * 0.0003) * w * 0.04;
      const bl = ctx.createRadialGradient(bx, h * 0.62, 0, bx, h * 0.62, w * 0.38);
      bl.addColorStop(0, 'rgba(18,48,180,.11)');
      bl.addColorStop(1, 'transparent');
      ctx.fillStyle = bl;
      ctx.fillRect(0, 0, w, h);

      // Stars
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = 1;
        if (s.x > 1) s.x = 0;
        if (s.y < 0) s.y = 1;
        if (s.y > 1) s.y = 0;
        const tw = Math.sin(t * 0.002 + s.op * 12) * 0.28 + 0.72;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.op * tw})`;
        ctx.fill();
      });

      // Grid lines
      ctx.strokeStyle = `rgba(229,9,20,${0.035 + Math.sin(t * 0.002) * 0.018})`;
      ctx.lineWidth = 0.5;
      const go = (t * 0.028) % 56;
      for (let gx = w * 0.48 + go; gx < w; gx += 56) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }
      for (let gy = go; gy < h; gy += 56) {
        ctx.beginPath();
        ctx.moveTo(w * 0.48, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();
      }

      // Figure silhouette
      const fx = w * 0.82;
      const fy = h * 0.1;
      const fh = h * 0.78;
      const fw = fh * 0.38;
      const fg = ctx.createRadialGradient(fx, fy + fh * 0.5, 0, fx, fy + fh * 0.5, fw * 1.7);
      fg.addColorStop(0, `rgba(229,9,20,${0.07 + Math.sin(t * 0.0014) * 0.025})`);
      fg.addColorStop(1, 'transparent');
      ctx.fillStyle = fg;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.fillStyle = 'rgba(8,3,18,0.82)';
      const hr = fw * 0.23;
      // head
      ctx.beginPath();
      ctx.arc(fx, fy + hr * 1.15, hr, 0, Math.PI * 2);
      ctx.fill();
      // body
      ctx.fillRect(fx - fw * 0.23, fy + hr * 2.5, fw * 0.46, fh * 0.4);
      // arms
      const sw = Math.sin(t * 0.001) * 0.055;
      ctx.fillRect(fx - fw * 0.43 + sw * fw, fy + hr * 2.6, fw * 0.18, fh * 0.28);
      ctx.fillRect(fx + fw * 0.25 - sw * fw, fy + hr * 2.6, fw * 0.18, fh * 0.28);
      // legs
      ctx.fillRect(fx - fw * 0.21, fy + hr * 2.5 + fh * 0.4, fw * 0.18, fh * 0.34);
      ctx.fillRect(fx + fw * 0.03, fy + hr * 2.5 + fh * 0.4, fw * 0.18, fh * 0.34);
      ctx.restore();

      // Red accent lines
      ctx.strokeStyle = `rgba(229,9,20,${0.48 + Math.sin(t * 0.002) * 0.18})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.68, h * 0.13);
      ctx.lineTo(w * 0.68, h * 0.87);
      ctx.stroke();
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = 'rgba(229,9,20,.18)';
      ctx.beginPath();
      ctx.moveTo(w * 0.705, h * 0.18);
      ctx.lineTo(w * 0.705, h * 0.82);
      ctx.stroke();

      t++;
      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [profile]);

  const backgroundImage = profile === 'recruiter' || profile === 'stalker' ? blueImage : backgroundGif;

  return (
    <>
      <div className="profile-page-wrapper">
        {profile === 'recruiter' ? (
          <div className="profile-hero">
            <canvas ref={canvasRef} className="profile-page-canvas" />
            <div className="profile-hero-content">
              <ProfileBanner />
            </div>
          </div>
        ) : (
          <div
            className="profile-page"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <ProfileBanner />
          </div>
        )}
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;

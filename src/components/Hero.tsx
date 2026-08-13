import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';
import photoImg from '../assets/photo.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill Badge */}
            <div
              className="badge"
              style={{
                marginBottom: '1.25rem',
                padding: '0.45rem 1rem',
                fontSize: '0.82rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: '0 0 10px var(--accent-primary)',
                  display: 'inline-block',
                }}
              />
              <span>Available for Sr. Backend & Full-Stack Projects</span>
            </div>

            {/* Main Title & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{cvData.personalInfo.name}</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <span>{cvData.personalInfo.title}</span>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--accent-secondary)',
                }}
              >
                Horizoncore Infosoft
              </span>
            </h2>

            {/* Value Proposition */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                maxWidth: '600px',
                marginBottom: '2rem',
              }}
            >
              Architecting high-performance web applications, robust RESTful APIs, custom Filament admin control panels, and cloud-integrated backend infrastructures with PHP & Laravel.
            </p>

            {/* Call To Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <FileText size={18} />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  marginLeft: '0.5rem',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Send size={16} />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Micro Stats / Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  3+ Years Industry Experience
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent-secondary)' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Gujarat, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Photo & Floating Tech Card Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                opacity: 0.2,
                filter: 'blur(70px)',
                zIndex: 0,
              }}
            />

            {/* Photo Card Container */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '12px',
                width: '100%',
                maxWidth: '380px',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {/* Photo Wrapper */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                }}
              >
                <img
                  src={photoImg}
                  alt="Jaydeep Senma - Sr PHP / Laravel Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transition: 'transform 0.5s ease',
                  }}
                />
                
                {/* Overlay Subtle Tech Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(9, 13, 22, 0.7) 100%)',
                  }}
                />

                {/* Live Role Tag Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 700 }}>Jaydeep Senma</div>
                    <div style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 600 }}>
                      Horizoncore Infosoft
                    </div>
                  </div>
                  <Sparkles size={18} style={{ color: '#fbbf24' }} />
                </div>
              </div>

              {/* Floating Technology Pills around Photo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  padding: '0.55rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--accent-primary)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                  Laravel 11+
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '60px',
                  left: '-20px',
                  padding: '0.55rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--accent-secondary)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
                  REST APIs & AWS S3
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};

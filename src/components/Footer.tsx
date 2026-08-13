import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '4rem 0 2rem 0',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'var(--accent-gradient)',
                  color: '#ffffff',
                }}
              >
                <Terminal size={18} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                {cvData.personalInfo.name}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
              {cvData.personalInfo.title} specializing in Laravel backend architecture, REST API engineering, and cloud workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
            <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Experience</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Projects</a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-subtle)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Jaydeep Senma. All rights reserved. Strictly factual software engineer portfolio.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>Built with React + TypeScript</span>
            <span>•</span>
            <span>Sr. PHP / Laravel Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

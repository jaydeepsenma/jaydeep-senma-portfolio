import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';
import { ProjectItem } from '../data/cvData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(10px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2.5rem',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: '1.75rem', paddingRight: '2rem' }}>
            <div className="badge" style={{ marginBottom: '0.65rem' }}>
              {project.category}
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
              {project.name}
            </h2>
            <p style={{ color: 'var(--accent-primary)', fontSize: '1.05rem', fontWeight: 600 }}>
              {project.subtitle}
            </p>
          </div>

          {/* Live Link Button */}
          {project.liveUrl && (
            <div style={{ marginBottom: '1.75rem' }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
              >
                <span>Visit Live Platform</span>
                <ExternalLink size={16} />
              </a>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.5rem' }}>
                <ShieldAlert size={18} />
                <span>The Challenge / Problem</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {project.problem}
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Cpu size={18} />
                <span>Engineered Solution</span>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Specific Personal Contribution */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
              My Personal Technical Contributions:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.myContribution.map((contrib, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle size={17} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {contrib}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Functionality & Features */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
              Key Platform Functionalities:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                  }}
                >
                  ✓ {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.65rem' }}>
              Technologies & Infrastructure:
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="badge" style={{ fontSize: '0.82rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

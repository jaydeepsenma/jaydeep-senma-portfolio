import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { cvData } from '../data/cvData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(12px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card printable-resume"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '850px',
            maxHeight: '92vh',
            overflowY: 'auto',
            padding: '2.5rem',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Header Action Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge">Curriculum Vitae</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Jaydeep Senma</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handlePrint}
                className="btn-primary"
                style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
              >
                <Printer size={16} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close"
                style={{
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
            </div>
          </div>

          {/* Resume Document Body */}
          <div>
            {/* Header / Contact Info */}
            <div style={{ marginBottom: '2rem', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1.5rem' }}>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                {cvData.personalInfo.name}
              </h1>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.85rem' }}>
                {cvData.personalInfo.title}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Mail size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>{cvData.personalInfo.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>{cvData.personalInfo.formattedPhone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>{cvData.personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Objective & Summary */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                Career Objective & Summary
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {cvData.personalInfo.objective}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {cvData.personalInfo.summary}
              </p>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                Professional Experience
              </h2>

              {cvData.experiences.map((exp) => (
                <div key={exp.id} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {exp.role} — <span style={{ color: 'var(--accent-primary)' }}>{exp.company}</span>
                    </h3>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {exp.period}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem' }}>
                        <span>•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                Key Production Projects
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cvData.projects.map((proj) => (
                  <div key={proj.id} style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {proj.name} ({proj.subtitle})
                      </h3>
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent-primary)' }}>
                          {proj.liveUrl}
                        </a>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {proj.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          - {resp}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                Technical Skills & Stack
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cvData.skillsCategories.flatMap(c => c.skills).map((s) => (
                  <span key={s.name} className="badge-outline" style={{ fontSize: '0.82rem' }}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                Education & Achievements
              </h2>
              {cvData.education.map((edu, idx) => (
                <div key={idx} style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <strong>{edu.degree}</strong> — {edu.institution} ({edu.year}) — Grade/Score: <strong>{edu.score}</strong>
                </div>
              ))}
              <div style={{ marginTop: '0.5rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                <strong>Mentorship:</strong> Trained new freshers in web development standard practices.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

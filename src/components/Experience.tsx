import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// PROFESSIONAL TIMELINE</div>
        <h2 className="section-title">Industry Experience & Key Contributions</h2>
        <p className="section-desc">
          High-impact software engineering roles where I architected backend systems, led task delegations, and delivered production software platforms.
        </p>

        <div style={{ marginTop: '3.5rem', position: 'relative' }}>
          {cvData.experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card"
              style={{
                padding: '2.25rem',
                marginBottom: '2rem',
                borderLeft: '4px solid var(--accent-primary)',
              }}
            >
              {/* Top Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {exp.role}
                    </h3>
                    <span className="badge">Current Role</span>
                  </div>

                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.35rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-subtle)', fontSize: '0.85rem' }}>
                    <MapPin size={15} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '1rem', marginBottom: '1.5rem' }}>
                {exp.summary}
              </p>

              {/* Responsibilities List */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
                  Key Engineering Responsibilities:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle size={17} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements & Mentorship */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.65rem' }}>
                  <Award size={18} />
                  <span>Leadership & Key Achievements</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#f59e0b' }}>•</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-subtle)', marginBottom: '0.65rem', fontFamily: 'var(--font-mono)' }}>
                  Technologies Applied
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="badge-outline" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

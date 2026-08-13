import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// ACADEMICS & LANGUAGES</div>
        <h2 className="section-title">Education & Spoken Languages</h2>
        <p className="section-desc">
          Formal engineering education background and multi-lingual communication skills.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginTop: '3.5rem',
          }}
        >
          {/* Education Card */}
          {cvData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="badge">Degree</span>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Graduated {edu.year}
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                {edu.degree}
              </h3>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                {edu.institution}
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  marginBottom: '1.25rem',
                }}
              >
                <Award size={16} style={{ color: '#f59e0b' }} />
                <span>Academic Distinction: {edu.score}</span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {edu.details}
              </p>
            </motion.div>
          ))}

          {/* Languages Spoken Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card"
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--accent-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <Globe size={24} />
              </div>
              <div>
                <span className="badge-outline">Communication</span>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Languages Spoken
                </div>
              </div>
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Multilingual Capabilities
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cvData.personalInfo.languagesSpoken.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                    {lang.name}
                  </div>
                  <span className="badge" style={{ fontSize: '0.78rem' }}>
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

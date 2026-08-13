import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Users, Award, CheckCircle } from 'lucide-react';
import { cvData } from '../data/cvData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Backend & System Design",
      desc: "Architecting structured, maintainable PHP and Laravel codebases following clean architecture patterns and REST standard practices.",
      icon: Server,
      color: "var(--accent-primary)",
    },
    {
      title: "Database Performance & Cloud",
      desc: "Optimizing complex MySQL queries, index strategies, schema definitions, and seamless integration with AWS S3 asset delivery.",
      icon: Database,
      color: "var(--accent-secondary)",
    },
    {
      title: "Technical Leadership & Client Ops",
      desc: "Interfacing directly with clients, providing accurate task estimations, delegating design specs, and mentoring new web development freshers.",
      icon: Users,
      color: "#f59e0b",
    },
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// ABOUT ME</div>
        <h2 className="section-title">Driven by Clean Engineering & Real-World Impact</h2>
        <p className="section-desc">
          Experienced Senior PHP / Laravel Developer focused on building high-performance backend engines, scalable web portals, and reliable cloud workflows.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            marginTop: '3.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Professional Profile
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '1.02rem' }}>
              {cvData.personalInfo.summary}
            </p>

            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                <Award size={18} />
                <span>Career Objective & Growth</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                "{cvData.personalInfo.objective}"
              </p>
            </div>

            {/* Factual Highlights List */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Horizoncore Infosoft (Sr. Role)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  B.Tech IT Distinction (80%)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Fresher Training & Mentorship
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  AWS S3 Cloud Management
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pillars Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      color: pillar.color,
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.2fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};

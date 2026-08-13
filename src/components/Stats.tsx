import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

export const Stats: React.FC = () => {
  return (
    <section style={{ padding: '3rem 0', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {cvData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.5rem',
                }}
                className="gradient-text"
              >
                {stat.value}
                <span style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>{stat.suffix}</span>
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-muted)', maxWidth: '180px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

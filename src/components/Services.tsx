import React from 'react';
import { motion } from 'framer-motion';
import { Server, Webhook, LayoutDashboard, Database, Cloud, Users } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Webhook':
        return Webhook;
      case 'LayoutDashboard':
        return LayoutDashboard;
      case 'Database':
        return Database;
      case 'Cloud':
        return Cloud;
      case 'Users':
      default:
        return Users;
    }
  };

  return (
    <section id="services" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// WHAT I DO</div>
        <h2 className="section-title">Core Engineering Services & Capabilities</h2>
        <p className="section-desc">
          Specialized backend and web development capabilities built over 3+ years of production delivery.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginTop: '3.5rem',
          }}
        >
          {cvData.services.map((service, idx) => {
            const IconComp = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <IconComp size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

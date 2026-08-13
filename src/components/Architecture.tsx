import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Cloud, Code2, ShieldCheck } from 'lucide-react';

export const Architecture: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 1,
      name: "Client Layer",
      icon: Monitor,
      tech: "Web Portals & Mobile Apps",
      desc: "Responsive web frontends (HTML5, CSS3, JavaScript, jQuery) & Mobile Client applications connecting to backend REST services.",
      details: ["Client Communication", "Task Allocation to Designers", "Dynamic Frontend Rendering"]
    },
    {
      id: 2,
      name: "API & Middleware",
      icon: Code2,
      tech: "Laravel RESTful APIs",
      desc: "High-performance API endpoints engineered for low latency, secure authentication, and sub-second response times.",
      details: ["RESTful API Contracts", "Input Validation & Middleware", "Query Optimization Protocols"]
    },
    {
      id: 3,
      name: "Core Engine",
      icon: Server,
      tech: "Laravel & Filament",
      desc: "Centralized business logic layer powered by modern PHP and Filament Framework administrative control modules.",
      details: ["Filament Admin Modules", "School/University & Event CRUDs", "Modular PHP Architecture"]
    },
    {
      id: 4,
      name: "Data Layer",
      icon: Database,
      tech: "MySQL Database",
      desc: "Relational database schema design, index configuration, relationship mapping, and SQL query tuning.",
      details: ["Index & Query Tuning", "Relational Schema Mapping", "Sub-Second Query Execution"]
    },
    {
      id: 5,
      name: "Cloud Storage",
      icon: Cloud,
      tech: "AWS S3 Infrastructure",
      desc: "Scalable cloud object storage for managing high-resolution assets, event media, and institutional document storage.",
      details: ["AWS S3 Asset Pipeline", "IAM Access Management", "High-Availability Asset Delivery"]
    }
  ];

  return (
    <section id="architecture" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// SYSTEM ARCHITECTURE</div>
        <h2 className="section-title">Backend Architecture & System Design</h2>
        <p className="section-desc">
          Visual representation of the production system stacks, API layers, and database flows I engineer in my daily work.
        </p>

        {/* Architecture Flow Container */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginTop: '3.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
          }}
        >
          {/* Node Cards Horizontal / Vertical Pipeline */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '1rem',
              alignItems: 'center',
              position: 'relative',
              marginBottom: '2.5rem',
            }}
          >
            {steps.map((step) => {
              const IconComponent = step.icon;
              const isActive = activeStep === step.id;

              return (
                <React.Fragment key={step.id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setActiveStep(step.id)}
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: isActive ? 'var(--bg-secondary)' : 'var(--bg-card)',
                      border: isActive ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                      boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-md)',
                        background: isActive ? 'var(--accent-gradient)' : 'var(--bg-primary)',
                        color: isActive ? '#ffffff' : 'var(--accent-primary)',
                        marginBottom: '0.75rem',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <IconComponent size={22} />
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: '0.2rem' }}>
                      STEP 0{step.id}
                    </div>

                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                      {step.name}
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {step.tech}
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Detailed Selected Step Panel */}
          {steps.find(s => s.id === activeStep) && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="badge">Active Architecture Node</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {steps[activeStep - 1].name} — {steps[activeStep - 1].tech}
                </h3>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
                {steps[activeStep - 1].desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {steps[activeStep - 1].details.map((detail, dIdx) => (
                  <span
                    key={dIdx}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <ShieldCheck size={15} style={{ color: 'var(--accent-primary)' }} />
                    {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

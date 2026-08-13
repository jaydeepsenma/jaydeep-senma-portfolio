import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cvData, ProjectItem } from '../data/cvData';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// FEATURED PROJECTS</div>
        <h2 className="section-title">Production Software & Enterprise Web Applications</h2>
        <p className="section-desc">
          Real-world web portals, educational platforms, and local discovery engines built with Laravel, REST APIs, and cloud architecture.
        </p>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginTop: '3.5rem',
          }}
        >
          {cvData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Category & Badge Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className="badge">{project.category}</span>
                  {project.liveUrl && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-secondary)', fontFamily: 'var(--font-mono)' }}>
                      Live Production
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  {project.name}
                </h3>
                <p style={{ color: 'var(--accent-primary)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.summary}
                </p>

                {/* Responsibilities bullet highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.75rem' }}>
                  {project.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>›</span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge-outline" style={{ fontSize: '0.75rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                      title="Visit live website"
                    >
                      <ExternalLink size={16} />
                      <span>Visit Site</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Render Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

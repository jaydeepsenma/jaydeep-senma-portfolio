import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, Code2, Search, CheckCircle2 } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...cvData.skillsCategories.map((c) => c.title)];

  const getIconForCategory = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      case 'Cloud':
        return Cloud;
      case 'Code2':
      default:
        return Code2;
    }
  };

  const filteredCategories = cvData.skillsCategories.filter((cat) => {
    if (activeTab !== 'All' && cat.title !== activeTab) return false;
    return true;
  });

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">// TECHNICAL MATRIX</div>
        <h2 className="section-title">Backend Architecture & Technical Capabilities</h2>
        <p className="section-desc">
          Strictly factual toolkit extracted from my professional software engineering background and production experience.
        </p>

        {/* Filter Controls & Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: '1px solid var(--border-color)',
                  background: activeTab === cat ? 'var(--accent-gradient)' : 'var(--bg-card)',
                  color: activeTab === cat ? '#ffffff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '260px',
            }}
          >
            <Search
              size={17}
              style={{ position: 'absolute', left: '12px', color: 'var(--text-subtle)' }}
            />
            <input
              type="text"
              placeholder="Search skill (e.g. Laravel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 1rem 0.55rem 2.4rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredCategories.map((cat, catIdx) => {
            const IconComp = getIconForCategory(cat.iconName);

            const filteredSkills = cat.skills.filter((skill) =>
              skill.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-glow)',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {cat.title}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                      {filteredSkills.length} Core Competencies
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: skill.highlight ? 'var(--bg-secondary)' : 'transparent',
                        border: skill.highlight ? '1px solid var(--border-color)' : '1px solid transparent',
                        transition: 'background var(--transition-fast)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <CheckCircle2
                          size={16}
                          style={{
                            color: skill.highlight ? 'var(--accent-primary)' : 'var(--text-subtle)',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '0.92rem',
                            fontWeight: skill.highlight ? 600 : 500,
                            color: 'var(--text-main)',
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>

                      {skill.level && (
                        <span className={skill.highlight ? 'badge' : 'badge-outline'}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

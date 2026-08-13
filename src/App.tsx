import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      {/* Background Interactive Mesh */}
      <BackgroundCanvas />

      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Resume Reader Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

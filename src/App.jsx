import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import { Terminal } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <nav className="nav-pill">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
          <Terminal size={22} color="var(--primary-color)" />
          <span>AFRAH</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Academics</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="https://drive.google.com/file/d/142L9aimDmS58ws5OKia4-PT-oLR1xOzl/view?usp=drive_link" target="_blank" rel="noreferrer" className="nav-link" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Resume</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        borderTop: '1px solid var(--surface-border)',
        marginTop: '6rem',
        color: 'var(--text-tertiary)',
        fontFamily: 'var(--font-heading)'
      }}>
        <p>&copy; 2026 Afrah Fathima M. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;

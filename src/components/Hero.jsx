import React from 'react';
import { Terminal, Code, User, Mail, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '6rem'
    }}>
      {/* Ambient background glows */}
      <div className="glow-blob" style={{ top: '10%', left: '20%', width: '400px', height: '400px', background: 'var(--primary-color)' }}></div>
      <div className="glow-blob" style={{ bottom: '10%', right: '20%', width: '500px', height: '500px', background: 'var(--secondary-color)', opacity: 0.3 }}></div>

      <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h1 style={{ marginBottom: '1.5rem', maxWidth: '900px' }}>
          Hi, I'm <br />
          <span className="text-gradient">Afrah Fathima M</span>
        </h1>
        
        <h3 style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontWeight: 500, letterSpacing: '0.02em' }}>
          Software Engineer <span style={{ color: 'var(--surface-border)', margin: '0 0.5rem' }}>|</span> AI & Full-Stack Developer
        </h3>
        
        <p style={{ maxWidth: '750px', fontSize: '1.15rem', marginBottom: '3.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Final-year CSE undergraduate with a strong foundation in AI, full-stack engineering, and distributed systems. 
          Demonstrated ability to deliver end-to-end solutions with measurable impact including WebSocket systems handling 100+ concurrent users 
          and AI engines with $450K cost-saving potential. Seeking a Software Engineer role to channel my passion into scalable, 
          real-world problem-solving software.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            View My Work <ChevronRight size={18} />
          </a>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Afrahfm" className="btn btn-outline" aria-label="GitHub" style={{ padding: '1rem', borderRadius: '50%' }}>
              <Code size={22} />
            </a>
            <a href="http://www.linkedin.com/in/afrah-fathima-m-078780290" className="btn btn-outline" aria-label="LinkedIn" style={{ padding: '1rem', borderRadius: '50%' }}>
              <User size={22} />
            </a>
            <a href="mailto:cseskct004@gmail.com" className="btn btn-outline" aria-label="Email" style={{ padding: '1rem', borderRadius: '50%' }}>
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section container">
      <h2><span className="text-gradient">Academic Background</span></h2>
      <div className="grid-2">
        <div className="glass-panel" style={{ borderTop: '4px solid var(--secondary-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.8rem', background: 'var(--secondary-glow)', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
              <GraduationCap size={28} color="var(--secondary-color)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Bachelor of Engineering - CSE</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', fontWeight: 600 }}>2023 – 2027</p>
            </div>
          </div>
          <h4 style={{ color: 'var(--secondary-color)', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.1rem' }}>Sri Krishna College of Technology</h4>
          <p style={{ color: 'var(--text-secondary)' }}>CGPA: 8.32/10 | Coimbatore, Tamil Nadu</p>
        </div>

        <div className="glass-panel" style={{ borderTop: '4px solid var(--primary-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.8rem', background: 'var(--primary-glow)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
              <Award size={28} color="var(--primary-color)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Higher Secondary Certificate (HSC)</h3>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', fontWeight: 600 }}>2023</p>
            </div>
          </div>
          <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.1rem' }}>Alvernia Matriculation Higher Secondary School</h4>
          <p style={{ color: 'var(--text-secondary)' }}>Score: 95% | Coimbatore, Tamil Nadu</p>
        </div>
      </div>
    </section>
  );
}

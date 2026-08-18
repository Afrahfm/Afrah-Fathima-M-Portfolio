import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <h2><span className="text-gradient">Professional Experience</span></h2>
      
      <div className="glass-panel" style={{ position: 'relative', overflow: 'visible' }}>
        <div style={{ 
          position: 'absolute', 
          left: '-2px', 
          top: '20%', 
          bottom: '20%', 
          width: '4px', 
          background: 'linear-gradient(to bottom, var(--primary-color), var(--secondary-color))',
          borderRadius: '4px'
        }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', paddingLeft: '1rem' }}>
          <div>
            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ background: 'var(--surface-color)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
                <Briefcase size={20} color="var(--primary-color)" />
              </div>
              Artificial Intelligence Virtual Internship
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: 500, marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Infosys Springboard
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Calendar size={14} />
              29 June 2026 – 29 Aug 2026
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.9rem', justifyContent: 'flex-end', fontWeight: 500 }}>
              <MapPin size={14} /> Virtual (8 Weeks)
            </div>
          </div>
        </div>

        <ul style={{ paddingLeft: '2.5rem', marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '1rem' }}>Pursuing an 8-week AI/ML virtual internship involving a real-world vendor problem statement.</li>
          <li style={{ marginBottom: '1rem' }}>Completing 16 AI/ML courses covering ML, DL, NLP, and Computer Vision.</li>
          <li style={{ marginBottom: '1rem' }}>Developing an end-to-end AI solution using Python, NumPy, Pandas, and Scikit-learn.</li>
          <li>Applying concepts of data preprocessing, model training, evaluation, and deployment in a collaborative project environment.</li>
        </ul>
      </div>
    </section>
  );
}

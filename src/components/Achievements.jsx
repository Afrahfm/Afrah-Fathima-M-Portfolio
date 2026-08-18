import React from 'react';
import { Star, Trophy, Target, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="section container">
      <h2><span className="text-gradient">Certifications & Achievements</span></h2>
      <div className="grid-2">
        <div className="glass-panel">
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ background: 'var(--surface-color)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
              <Trophy size={22} color="var(--primary-color)" />
            </div>
            Achievements & Extracurriculars
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              "Shortlisted in Top 20 teams at Neo Sprint Hackathon conducted by lamNeo.",
              "Qualified among Top 15,000 participants globally in The Big Code coding competition by Google.",
              "Completed NPTEL certified courses in Cloud Computing, Mobile Computing & Virtual Reality, and Artificial Intelligence.",
              "Solved 300+ DSA problems on LeetCode covering Arrays, Trees, Graphs, and Dynamic Programming."
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem', color: 'var(--text-secondary)' }}>
                <Star size={18} color="var(--secondary-color)" style={{ marginTop: '4px', flexShrink: 0 }} />
                <span style={{ lineHeight: '1.6' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel">
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ background: 'var(--surface-color)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--surface-border)' }}>
              <Target size={22} color="var(--primary-color)" />
            </div>
            Certifications
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              "OCI Foundations Associate - Oracle University",
              "Introduction to Cyber Security - Cisco Networking Academy",
              "Python Essentials 1 and 2 - Cisco Networking Academy",
              "CCNA 1, 2 (SRWE), and 3 (ENSA) - Cisco Networking Academy",
              "Service Now - Micro Certification",
              "AWS Cloud Practitioner Essentials - Amazon Web Services"
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={18} color="var(--primary-color)" style={{ marginTop: '4px', flexShrink: 0 }} />
                <span style={{ lineHeight: '1.6' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

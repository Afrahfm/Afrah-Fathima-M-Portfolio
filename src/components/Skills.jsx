import React from 'react';
import { Database, Layout, Server, Code2, Globe, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core CS Concepts',
    icon: <Cpu size={24} />,
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
  },
  {
    title: 'Programming Languages',
    icon: <Code2 size={24} />,
    skills: ['C++', 'Java', 'Python']
  },
  {
    title: 'Web Technologies',
    icon: <Globe size={24} />,
    skills: ['React.js', 'HTML', 'CSS', 'REST APIs']
  },
  {
    title: 'Frameworks & Tools',
    icon: <Layout size={24} />,
    skills: ['Spring Boot', 'FastAPI', 'Selenium', 'Git', 'GitHub', 'VS Code', 'Figma']
  },
  {
    title: 'Databases',
    icon: <Database size={24} />,
    skills: ['MySQL', 'SQL', 'MongoDB']
  },
  {
    title: 'AI & Others',
    icon: <Server size={24} />,
    skills: ['NLP', 'AI', 'Machine Learning', 'WebSockets', 'Problem Solving']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2><span className="text-gradient">Technical Arsenal</span></h2>
      <div className="grid-3">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
              {category.icon}
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{category.title}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {category.skills.map((skill, i) => (
                <span key={i} style={{ 
                  background: 'var(--surface-color)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  border: '1px solid var(--surface-border)',
                  color: 'var(--text-secondary)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Code, ExternalLink, Activity } from 'lucide-react';

const projects = [
  {
    title: 'MentorFlow AI',
    subtitle: 'AI-Powered Alumni Mentorship Platform',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'WebSockets', 'REST APIs'],
    description: 'A real-time mentorship platform that connects students with alumni mentors instantly using AI-powered matching based on skill similarity. Its uniqueness lies in using cosine similarity on skill embeddings for precise domain-matched mentor discovery, combined with high-performance WebSocket chat supporting 100+ concurrent users under 200ms latency.',
    link: 'https://github.com/Afrahfm/MentorFlow-AI---AlumniConnect'
  },
  {
    title: 'RootCauseAI',
    subtitle: 'AI-Powered Enterprise Problem Detection Engine',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'Gemini AI', 'Tailwind CSS'],
    description: 'An enterprise AI agent that analyzes ambiguous IT requests to accurately detect root causes, potentially saving organizations up to $450,000 per misdiagnosed case. Features a dual-layer authentication system and role-based HR-to-Admin approval workflow for secure, verified access.',
    link: 'https://github.com/Afrahfm/RootCauseAI'
  },
  {
    title: 'EcoForecast AI',
    subtitle: 'Environmental Pollution Forecasting System',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'MongoDB', 'FastAPI'],
    description: 'Developed an AI-powered AQI prediction system using Python, XGBoost, and OpenWeather API, performing real-time AQI prediction (R² Score: 0.83). Implementing an end-to-end platform featuring AQI forecasting, pollution-aware route recommendations, and FastAPI deployment (Infosys Springboard Project).',
    link: 'https://github.com/Afrahfm/AQI-Prediction-App.git'
  },
  {
    title: 'StudyGenie AI',
    subtitle: 'AIML-Based Smart Learning Platform',
    tech: ['Python', 'FastAPI', 'NLP', 'AIML'],
    description: 'An offline-first smart learning platform designed for low-connectivity environments that ensures zero data loss in attendance tracking. Features automatic timestamp-based conflict resolution and background sync on reconnection, completely eliminating manual data entry.',
    link: 'https://github.com/Afrahfm/ai-study-assistant'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2><span className="text-gradient">Featured Projects</span></h2>
      <div className="grid-2">
        {projects.map((project, index) => (
          <div key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.02em' }}>{project.subtitle}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" style={{
                color: 'var(--text-secondary)',
                background: 'var(--surface-color)',
                padding: '0.6rem',
                borderRadius: '50%',
                border: '1px solid var(--surface-border)',
                transition: 'all var(--transition-fast)'
              }} className="hover-icon">
                <Code size={18} />
              </a>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
              {project.tech.map((tech, i) => (
                <span key={i} style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-tertiary)',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '100px',
                  border: '1px solid var(--surface-border)',
                  fontWeight: 600
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

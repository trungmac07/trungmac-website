import React from 'react';
import './Experience.css'
import { achievementItem } from '../Education/components/achievement-item';
import type { ExperienceCardProps } from '../../types/types';
import { useExperiences } from '../../hooks/useExperiences';

const ExperiencePage = () => {
  const experiences = useExperiences();

  const ExperienceCard = ({ exp, index }: ExperienceCardProps) => (
    <div className={`experience-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
      <div className="experience-header">
        <div className="position-info">
          <h3 className="text-subheading">{exp.position}</h3>
          <h4 className="text-accent">{exp.company}</h4>
          <p className="text-secondary">{exp.location}</p>
        </div>
        <div className="text-badge">{exp.duration}</div>
      </div>
      
      <p className="text-primary">{exp.description}</p>

      <div className="responsibilities-section">
        <h5 className="text-label">Key Responsibilities</h5>
        <ul className="responsibilities-list">
          {exp.responsibilities.map((responsibility, idx) => 
            achievementItem({ achievement: responsibility, idx })
          )}
        </ul>
      </div>

      <div className="technologies-section">
        <h5 className="text-label">Technologies & Tools</h5>
        <div className="technologies-grid">
          {exp.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="experience-container">
      <div className="experience-page">
        <header className="page-header">
          <h1 className="page-title">Professional Experience</h1>
        </header>

        <section className="experience-section">
          <h2 className="text-heading">Work Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperiencePage;

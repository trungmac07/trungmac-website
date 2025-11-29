import React from 'react';
import "./Skills.css"
import type { SkillGridProps } from '../../types/types';
import { useSkills } from '../../hooks/useSkills';

const SkillsPage = () => {
  const skillCategories = useSkills();

  const SkillGrid = ({ skills, title }: SkillGridProps) => (
    <div className="skill-category">
      <h3 className="text-heading-2">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="skill-item">
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} logo`} />
            </div>
            <div className="skill-name">{skill.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills-container">
      <section id="skills" className="section">
        <h1 className="page-title">Technical Skills</h1>
        
        <div className="skills-main">
          {skillCategories.map((category) => (
            <SkillGrid key={category.title} skills={category.skills} title={category.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
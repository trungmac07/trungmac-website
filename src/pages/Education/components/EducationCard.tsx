
import { achievementItem } from './achievement-item';
import type { EducationCardProps } from '../../../types/types';

export const EducationCard = ({ edu, index }: EducationCardProps) => (
  <div className={`education-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
    <div className="education-header">
      <h3 className="text-subheading">{edu.degree}</h3>
      <div className="text-badge">{edu.graduationYear}</div>
    </div>
    
    <div className="university-info">
      <h4 className="text-accent">{edu.university}</h4>
      <p className="text-secondary">{edu.location}</p>
    </div>

    <div className="education-details">
      <div className="detail-row">
        <span className="text-label">GPA:</span>
        <span className="text-accent-secondary">{edu.gpa}</span>
      </div>
      <div className="detail-row">
        <span className="text-label">Faculty:</span>
        <span className="text-secondary">{edu.faculty}</span>
      </div>
      <div className="detail-row">
        <span className="text-label">Major:</span>
        <span className="text-secondary">{edu.major}</span>
      </div>
    </div>

    <div className="courses-section">
      <h5 className="text-label">Relevant Courses</h5>
      <div className="courses-grid">
        {edu.relevantCourses.map((course, idx) => (
          <span key={idx} className="course-tag">{course}</span>
        ))}
      </div>
    </div>

    <div className="achievements-section">
      <h5 className="text-label">Achievements</h5>
      <ul className="achievements-list">
        {edu.achievements.map((achievement, idx) => achievementItem({ achievement, idx }))}
      </ul>
    </div>
  </div>
);

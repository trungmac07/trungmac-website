
import './Education.css'
import { EducationCard } from './components/EducationCard';
import { CertificationSection } from './components/CertificationSection';
import { useEducation, useCertifications, useTechnicalCertifications } from '../../hooks/useEducation';

const EducationPage = () => {
  const education = useEducation();
  const certifications = useCertifications();
  const technicalCertifications = useTechnicalCertifications();

  return (
    <div className="education-container">
      <div className="education-page">
        <header className="page-header">
          <h1 className="page-title">Education & Certifications</h1>
        </header>

        <section className="education-section">
          <h2 className="section-heading">Education</h2>
          <div className="education-timeline" style={{marginBottom:"3rem"}}>
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>

          <CertificationSection
            title="English Certifications"
            certifications={certifications}
            gridClass="certifications-grid"
          />

          <CertificationSection
            title="Technical Certifications"
            certifications={technicalCertifications}
            gridClass="tech-certifications-grid"
          />
        </section>
      </div>
    </div>
  );
};

export default EducationPage;

import type { CertificationSectionProps } from '../../../types/types';
import { CertificationCard } from './CertificationCard';

export const CertificationSection = ({
  title,
  certifications,
  gridClass = 'certifications-grid'
}: CertificationSectionProps) => {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className="text-heading">{title}</h2>
      <div className={gridClass}>
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </>
  );
};

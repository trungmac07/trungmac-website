import React from 'react';
import type { Certification, TechnicalCertification } from '../../../types/types';
import { CertificationCard } from './CertificationCard';

interface CertificationSectionProps {
  title: string;
  certifications: (Certification | TechnicalCertification)[];
  gridClass?: string;
}

export const CertificationSection = ({
  title,
  certifications,
  gridClass = 'certifications-grid'
}: CertificationSectionProps) => {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="certifications-section">
      <h2 className="text-heading">{title}</h2>
      <div className={gridClass}>
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </section>
  );
};

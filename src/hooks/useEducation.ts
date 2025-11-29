import { useMemo } from 'react';
import type { Education, Certification, TechnicalCertification } from '../types/types';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, TECHNICAL_CERTIFICATIONS_DATA } from '../constants/educationData';

export const useEducation = (): Education[] => {
  return useMemo(() => EDUCATION_DATA, []);
};

export const useCertifications = (): Certification[] => {
  return useMemo(() => CERTIFICATIONS_DATA, []);
};

export const useTechnicalCertifications = (): TechnicalCertification[] => {
  return useMemo(() => TECHNICAL_CERTIFICATIONS_DATA, []);
};

export const useEducationData = () => {
  const education = useEducation();
  const certifications = useCertifications();
  const technicalCertifications = useTechnicalCertifications();

  return useMemo(() => ({
    education,
    certifications,
    technicalCertifications,
  }), [education, certifications, technicalCertifications]);
};

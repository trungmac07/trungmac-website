import { useMemo } from 'react';
import type { Experience, ExperienceCardProps } from '../types/types';
import { EXPERIENCES_DATA } from '../constants/experienceData';

export const useExperiences = (): Experience[] => {
  return useMemo(() => EXPERIENCES_DATA, []);
};

export const useExperienceByCompany = (companyName: string): Experience | undefined => {
  const experiences = useExperiences();
  return experiences.find(exp => exp.company === companyName);
};

export const useExperienceCards = (): ExperienceCardProps[] => {
  const experiences = useExperiences();
  return useMemo(
    () => experiences.map((exp, index) => ({ exp, index })),
    [experiences]
  );
};

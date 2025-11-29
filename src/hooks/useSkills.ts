import { useMemo } from 'react';
import type { Skill } from '../types/types';
import { SKILL_CATEGORIES, SKILLS_DATA } from '../constants/skillsData';

const logos = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const useSkills = (): SkillCategory[] => {
  return useMemo(() => {
    return Object.entries(SKILL_CATEGORIES).map(([key, categoryTitle]) => ({
      title: categoryTitle,
      skills: SKILLS_DATA[categoryTitle].map(skill => ({
        ...skill,
        icon: logos[`../assets/logos/${skill.iconPath}`],
      })) as Skill[]
    }));
  }, []);
};

export const useSkillCategory = (categoryName: string): Skill[] => {
  const allSkills = useSkills();
  const category = allSkills.find(cat => cat.title === categoryName);
  return category?.skills || [];
};

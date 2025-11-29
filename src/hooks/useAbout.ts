import { useMemo } from 'react';
import { ABOUT_SKILLS_DATA, ABOUT_STATS_DATA, RESUME_LINK } from '../constants/aboutData';
import { createAboutContact, aboutContact, type ContactInfo, type ContactItem } from '../constants/about';

export interface AboutSkill {
  iconType: string;
  text: string;
  color: string;
}

export interface AboutStatData {
  label: string;
  value: string;
  iconType: string;
  detailsKey: string;
}

export const useAboutSkills = (): AboutSkill[] => {
  return useMemo(() => ABOUT_SKILLS_DATA, []);
};

export const useAboutStats = (): AboutStatData[] => {
  return useMemo(() => ABOUT_STATS_DATA, []);
};

export const useResumeLink = (): string => {
  return useMemo(() => RESUME_LINK, []);
}

export const useAboutContact = (): ContactInfo => {
  return useMemo(() => aboutContact, []);
};

export const useAboutContactItems = (): ContactItem[] => {
  return useMemo(() => createAboutContact(), []);
};

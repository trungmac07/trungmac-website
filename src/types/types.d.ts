export interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: React.ReactNode[];
  technologies: string[];
  achievements: React.ReactNode[];
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  gpa: string;
  graduationYear: string;
  faculty: string;
  major: string;
  relevantCourses: string[];
  achievements: React.ReactNode[];
}

export interface LanguageCertification {
  certType: 'language';
  name: string;
  score: string;
  date: string;
  validUntil: string;
  breakdown?: Record<string, string>;
}

export interface TechnicalCertification {
  certType: 'technical';
  name: string;
  issuer: string;
  date: string;
  validUntil: string;
  credentialId: string;
  credentialUrl?: string;
}

export type Certification = LanguageCertification | TechnicalCertification;

export type CertificationType = Certification['type'];



export interface Skill {
  name: string;
  icon: any;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface AchievementItemProps {
  achievement: React.ReactNode;
  idx: number;
}

export interface EducationCardProps {
  edu: Education;
  index: number;
}

export interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

export interface CertificationCardProps {
  cert: Certification;
}

export interface CertificationSectionProps {
  title: string;
  certifications: Certification[];
  gridClass?: string;
}

export interface SkillGridProps {
  skills: Skill[];
  title: string;
}

export interface SkillItemProps {
  skill: Skill;
  index: number;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  details: React.ReactNode | string;
  detailsKey: string;
}

import type { Education, Certification, TechnicalCertification } from '../types/types';

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Bachelor of Information Technology",
    university: "University of Science - VNUHCM",
    location: "Ho Chi Minh City",
    gpa: "3.94/4.0",
    graduationYear: "2025",
    faculty: "Information Technology",
    major: "Computer Science",
    relevantCourses: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Artificial Intelligence"],
    achievements: [
      <div>Among the top students with the highest academic performance in 2021-2022 and 2023-2024.</div>,
      <div>Participated in many competitions such as ICPC, Olympic, etc.</div>,
      <div>Co-author of the research paper 
        <a href="https://link.springer.com/chapter/10.1007/978-3-032-10209-6_3" 
           target="_blank"
            rel="noopener noreferrer"> 
            <b> "Defensive Strategy for Explainability in Deep Neural Networks Under Adversarial Attacks"</b>
        </a>
        , accepted to the 17th International Conference on Computational Collective Intelligence (ICCCI 2025), publication expected November 2025.
      </div>,
      ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "TOEIC",
    score: "935/990",
    date: "September 2024",
    validUntil: "September 2026",
    breakdown: {
      Listening: "485/495",
      Reading: "450/495",
    }
  },
  {
    name: "TOEIC SW",
    score: "340/400",
    date: "July 2025",
    validUntil: "July 2027",
    breakdown: {
      Speaking: "150/200",
      Writing: "190/200"
    }
  }
];

export const TECHNICAL_CERTIFICATIONS_DATA: TechnicalCertification[] = [];

import type { Experience } from '../types/types';

export const experiences: Experience[] = [
  {
    position: "Software Engineer",
    company: "TMA Solutions",
    location: "Ho Chi Minh City, Vietnam",
    duration: "Sep 2024 - Aug 2025",
    startDate: "September 2024",
    endDate: "August 2025",
    description: "Developed core application logic and algorithms, implemented and deployed microservices on Kubernetes, and automated infrastructure deployments.",
    responsibilities: [
      <div>Developed core application logic and algorithms using Java and Python with Maven for building applications and managing dependencies</div>,
      <div>Deployed Java applications with WildFly/Spring Boot as the backend application server and managed microservice communication to support system functionality</div>,
      <div>Implemented and deployed microservices on Kubernetes using Helm charts, supporting multiple modes and handling a wide range of users from thousands to millions</div>,
      <div>Automated infrastructure and system deployments using Ansible playbooks</div>,
      <div>Ran and maintained basic CI/CD pipelines using Jenkins for continuous deployment</div>,
      <div>Supported front-end development using ReactJS to ensure seamless integration with backend services</div>,
    ],
    technologies: ["Java", "Python", "Maven", "WildFly", "Spring Boot", "Docker", "Kubernetes", "Helm", "Ansible", "Jenkins", "ReactJS"],
    achievements: []
  },
  {
    position: "Junior Backend Developer",
    company: "StartupHub Inc",
    location: "Ho Chi Minh City, Vietnam",
    duration: "Jun 2023 - Dec 2023",
    startDate: "June 2023",
    endDate: "December 2023",
    description: "Developed and maintained backend services for e-commerce platform handling millions of transactions daily.",
    responsibilities: [
      <div>Developed RESTful APIs in Java and Python, serving 100K+ daily active users</div>,
      <div>Optimized database queries reducing average response time from 500ms to 100ms</div>,
      <div>Implemented authentication and authorization mechanisms using JWT tokens</div>,
      <div>Participated in code reviews and contributed to technical documentation</div>,
    ],
    technologies: ["Java", "Python", "MySQL", "Redis", "Docker", "REST API", "Git"],
    achievements: []
  }
];

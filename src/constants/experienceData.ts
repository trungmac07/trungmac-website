import type { Experience } from '../types/types';

export const EXPERIENCES_DATA: Experience[] = [
    {
        position: "IT Consultant / Full-Stack Developer",
        company: "Netcompany",
        location: "Ho Chi Minh City, Vietnam",
        duration: "Oct 2025 – Present",
        startDate: 'October 2025',
        endDate: 'Present',
        description: "Full-stack developer working on large-scale enterprise tax systems. Contribute primarily as a hands-on engineer while also advising on system architecture, technical design, and implementation strategies for client-facing products.",
        
        responsibilities: [
            "Develop backend services and RESTful APIs using Java Spring Boot within microservice-based systems",
            "Build and maintain frontend features using React for complex enterprise workflows",
            "Implemented automated tax processing flows using BPMN and Camunda, orchestrating business logic across backend services",
            "Consult on system architecture and technical design, applying hexagonal and clean architecture principles"
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Docker",
            "React",
            "Microservices",
            "Hexagonal Architecture",
            "Camunda BPMN"
        ],

        achievements: [
            "Contributed to the development of a large-scale tax system serving critical business and regulatory workflows",
            "Applied clean architecture principles to improve maintainability and scalability of backend services",
            "Acted as both developer and technical consultant, bridging communication between engineering teams and clients"
        ],
    },
    {
        position: "Software Engineer",
        company: "TMA Solutions",
        location: "Ho Chi Minh City, Vietnam",
        duration: "Sep 2024 - Aug 2025",
        startDate: "September 2024",
        endDate: "August 2025",
        description: "Developed core application logic and algorithms using Java and Python, implemented and deployed microservices on Kubernetes, and automated infrastructure deployments.",
        responsibilities: [
        "Deployed Java applications and managed microservice communication to support system functionality",
        "Implemented and deployed microservices on Kubernetes using Helm charts, supporting multiple modes and handling a wide range of users from thousands to millions",
        "Automated infrastructure and system deployments using Ansible playbooks",
        ] as any[],
        technologies: ["Java", "Python", "Maven", "WildFly", "Spring Boot", "Docker", "Kubernetes", "Helm", "Ansible", "Jenkins", "React"],
        achievements: []
    },
];

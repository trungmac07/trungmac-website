
export const ABOUT_SKILLS_DATA = [
  { iconType: 'code', text: 'Java & Python', color: 'blue' },
  { iconType: 'cloud', text: 'Kubernetes', color: 'cyan' },
  { iconType: 'api', text: 'Microservices', color: 'geekblue' },
  { iconType: 'thunderbolt', text: 'CI/CD', color: 'purple' },
  { iconType: 'robot', text: 'AI Enthusiast', color: 'magenta' }
];

export const RESUME_LINK = ''

export const ABOUT_STATS_DATA = [
  { 
    label: 'Experience', 
    value: '1+ Year', 
    iconType: 'rocket',
    detailsKey: 'experience'
  },
  { 
    label: 'Specialization', 
    value: 'Software Engineer', 
    iconType: 'laptop',
    detailsKey: 'specialization'
  },
  { 
    label: 'Focus', 
    value: 'Scalable Systems', 
    iconType: 'cloud',
    detailsKey: 'focus'
  },
  { 
    label: 'Passion', 
    value: 'AI & Innovation', 
    iconType: 'robot',
    detailsKey: 'passion'
  }
];

export const ABOUT_STATS_DETAILS = {
  experience: {
    title: 'Professional Journey',
    description: 'Over the past year, I have gained hands-on experience in software development, infrastructure management, and cloud-native technologies. This journey has strengthened my foundation in designing and implementing scalable solutions.',
    achievements: [
      'Implemented high-performance backend systems',
      'Developed core application logic and algorithms',
      'Built containerized microservices and large-scale deployments',
    ],
    actionLabel: 'View Detailed Experience',
    actionPath: '/experience'
  },
  specialization: {
    title: 'Technical Expertise',
    description: 'I am a backend-focused software engineer with expertise in Java and Python, experienced in designing and delivering scalable microservice architectures. My work emphasizes clean and hexagonal architecture principles, with production deployments on Kubernetes using Helm to support reliable, high-traffic systems.',
    competencies: ['Java', 'Python', 'Microservices', 'Docker', 'Kubernetes', 'System Design'],
  },
  focus: {
    title: 'System Architecture',
    description: 'My primary focus is designing and deploying highly scalable systems using containerization and orchestration. I emphasize high performance, reliability, and observability in all solutions.',
    principles: [
      { label: 'Performance', description: 'Optimize for speed and resource efficiency' },
      { label: 'Reliability', description: 'Fault-tolerant and resilient systems' },
      { label: 'Observability', description: 'Comprehensive monitoring and logging' },
      { label: 'Scalability', description: 'Handle growing workloads seamlessly' },
    ]
  },
  passion: {
    title: 'AI Enthusiasm',
    description: 'I am deeply enthusiastic about Artificial Intelligence and its potential to solve real-world challenges. I enjoy exploring how AI can enhance scalable systems and create innovative solutions.',
    interests: [
      'Machine Learning and Deep Learning research',
      'Explainable AI',
      'AI engineering',
    ]
  }
};

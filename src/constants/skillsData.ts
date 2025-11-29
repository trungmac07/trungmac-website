import type { Skill } from '../types/types';

export const SKILL_CATEGORIES = {
  PROGRAMMING_LANGUAGES: 'Programming Languages',
  SOFTWARE_FRAMEWORKS: 'Software & Frameworks',
  DISTRIBUTED_SYSTEMS: 'Distributed Systems',
  MACHINE_LEARNING: 'Machine Learning',
} as const;

export const SKILLS_DATA: Record<string, Array<Omit<Skill, 'icon'> & { iconPath: string }>> = {
  [SKILL_CATEGORIES.PROGRAMMING_LANGUAGES]: [
    { name: 'Java', iconPath: 'java.png', link: "https://www.java.com/" },
    { name: 'Python', iconPath: 'python.png', link: "https://www.python.org/" },
    { name: 'C++', iconPath: 'cpp.png', link: "https://isocpp.org/" },
    { name: 'JavaScript', iconPath: 'js.png', link: "https://tc39.es/" },
  ],
  [SKILL_CATEGORIES.SOFTWARE_FRAMEWORKS]: [
    { name: 'Spring', iconPath: 'spring.png', link: "https://spring.io/projects/spring-framework" },
    { name: 'Django', iconPath: 'django.png', link: "https://www.djangoproject.com/" },
    { name: 'Flask', iconPath: 'flask.png', link: "https://flask.palletsprojects.com/en/stable/" },
    { name: 'Docker', iconPath: 'docker.png', link: "https://www.docker.com/" },
    { name: 'PostgreSQL', iconPath: 'postgre.png', link: "https://www.postgresql.org/" },
    { name: 'MySQL', iconPath: 'mysql.png', link: "https://www.mysql.com/" },
    { name: 'Git', iconPath: 'git.png', link: "https://git-scm.com/" },
    { name: 'Jenkins', iconPath: 'jenkins.png', link: "https://www.jenkins.io/" },
    { name: 'React', iconPath: 'react.png', link: "https://react.dev/" },
    { name: 'Redis', iconPath: 'redis.png', link: "https://redis.io/" },
  ],
  [SKILL_CATEGORIES.DISTRIBUTED_SYSTEMS]: [
    { name: 'Kubernetes', iconPath: 'k8s.png', link: "https://kubernetes.io/" },
    { name: 'Helm', iconPath: 'helm.png', link: "https://helm.sh/" },
    { name: 'Grafana', iconPath: 'grafana.png', link: "https://grafana.com/" },
    { name: 'Prometheus', iconPath: 'prometheus.png', link: "https://prometheus.io/" },
    { name: 'Kibana', iconPath: 'kibana.png', link: "https://www.elastic.co/kibana/" },
    { name: 'Fluentd', iconPath: 'fluentd.png', link: "https://www.fluentd.org/" },
    { name: 'OpenSearch', iconPath: 'opensearch.png', link: "https://opensearch.org/" },
    { name: 'HDFS', iconPath: 'hadoop.png', link: "https://hadoop.apache.org/" },
    { name: 'RabbitMQ', iconPath: 'rabbitmq.png', link: "https://www.rabbitmq.com/" },
    { name: 'Kafka', iconPath: 'kafka.png', link: "https://kafka.apache.org/" },
  ],
  [SKILL_CATEGORIES.MACHINE_LEARNING]: [
    { name: 'Torch', iconPath: 'torch.png', link: "https://pytorch.org/" },
    { name: 'TensorFlow', iconPath: 'tensorflow.png', link: "https://www.tensorflow.org/" },
    { name: 'HuggingFace', iconPath: 'huggingface.png', link: "https://huggingface.co/" },
  ],
};

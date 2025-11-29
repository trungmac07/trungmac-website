import type { Skill } from '../types/types';

const logos = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

export const programmingLanguages: Skill[] = [
  { name: 'Java', icon: logos['../assets/logos/java.png'], link: "https://www.java.com/" },
  { name: 'Python', icon: logos['../assets/logos/python.png'], link: "https://www.python.org/" },
  { name: 'C++', icon: logos['../assets/logos/cpp.png'], link: "https://isocpp.org/" },
  { name: 'JavaScript', icon: logos['../assets/logos/js.png'], link: "https://tc39.es/" },
];

export const softwareSkills: Skill[] = [
  { name: 'Spring', icon: logos['../assets/logos/spring.png'], link: "https://spring.io/projects/spring-framework" },
  { name: 'Django', icon: logos['../assets/logos/django.png'], link: "https://www.djangoproject.com/" },
  { name: 'Flask', icon: logos['../assets/logos/flask.png'], link: "https://flask.palletsprojects.com/en/stable/" },
  { name: 'Docker', icon: logos['../assets/logos/docker.png'], link: "https://www.docker.com/" },
  { name: 'PostgreSQL', icon: logos['../assets/logos/postgre.png'], link: "https://www.postgresql.org/" },
  { name: 'MySQL', icon: logos['../assets/logos/mysql.png'], link: "https://www.mysql.com/" },
  { name: 'Git', icon: logos['../assets/logos/git.png'], link: "https://git-scm.com/" },
  { name: 'Jenkins', icon: logos['../assets/logos/jenkins.png'], link: "https://www.jenkins.io/" },
  { name: 'React', icon: logos['../assets/logos/react.png'], link: "https://react.dev/" },
  { name: 'Redis', icon: logos['../assets/logos/redis.png'], link: "https://redis.io/" },
];

export const distributedSkills: Skill[] = [
  { name: 'Kubernetes', icon: logos['../assets/logos/k8s.png'], link: "https://kubernetes.io/" },
  { name: 'Helm', icon: logos['../assets/logos/helm.png'], link: "https://helm.sh/" },
  { name: 'Grafana', icon: logos['../assets/logos/grafana.png'], link: "https://grafana.com/" },
  { name: 'Prometheus', icon: logos['../assets/logos/prometheus.png'], link: "https://prometheus.io/" },
  { name: 'Kibana', icon: logos['../assets/logos/kibana.png'], link: "https://www.elastic.co/kibana/" },
  { name: 'Fluentd', icon: logos['../assets/logos/fluentd.png'], link: "https://www.fluentd.org/" },
  { name: 'OpenSearch', icon: logos['../assets/logos/opensearch.png'], link: "https://opensearch.org/" },
  { name: 'HDFS', icon: logos['../assets/logos/hadoop.png'], link: "https://hadoop.apache.org/" },
  { name: 'RabbitMQ', icon: logos['../assets/logos/rabbitmq.png'], link: "https://www.rabbitmq.com/" },
  { name: 'Kafka', icon: logos['../assets/logos/kafka.png'], link: "https://kafka.apache.org/" },
];

export const machineLearningSkills: Skill[] = [
  { name: 'Torch', icon: logos['../assets/logos/torch.png'], link: "https://pytorch.org/" },
  { name: 'TensorFlow', icon: logos['../assets/logos/tensorflow.png'], link: "https://www.tensorflow.org/" },
  { name: 'HuggingFace', icon: logos['../assets/logos/huggingface.png'], link: "https://huggingface.co/" },
];

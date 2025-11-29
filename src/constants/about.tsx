import React from 'react';
import { CodeOutlined, RocketOutlined, LaptopOutlined, CloudOutlined, RobotOutlined, ArrowRightOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Typography, Tag, Button } from 'antd';
import type { StatItem } from '../types/types';

const { Title, Paragraph } = Typography;

export const aboutSkills = [
  { icon: <CodeOutlined />, text: 'Java & Python', color: 'blue' },
  { icon: <CloudOutlined />, text: 'Kubernetes', color: 'cyan' },
  { icon: <CodeOutlined />, text: 'Microservices', color: 'geekblue' },
  { icon: <RocketOutlined />, text: 'CI/CD', color: 'purple' },
  { icon: <RobotOutlined />, text: 'AI Enthusiast', color: 'magenta' }
];

export const createAboutStats = (navigate: (path: string) => void): StatItem[] => [
  { 
    label: 'Experience', 
    value: '1+ Year', 
    icon: <RocketOutlined />,
    details: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            Professional Journey
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            Over the past year, I have gained hands-on experience in software development, infrastructure management, and cloud-native technologies. This journey has strengthened my foundation in designing and implementing scalable solutions.
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Key Achievements
          </Title>
          <ul style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Developed secure and observable infrastructure</li>
            <li>Gained hands-on CI/CD experience with Jenkins</li>
            <li>Built containerized microservices on Kubernetes</li>
            <li>Implemented high-performance backend systems</li>
          </ul>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button 
            type="primary" 
            icon={<ArrowRightOutlined />}
            onClick={() => {
              navigate('/experience');
            }}
            style={{ 
              background: 'var(--ocean-gradient)',
              borderColor: 'var(--ocean-primary)'
            }}
          >
            View Detailed Experience
          </Button>
        </div>
      </div>
    )
  },
  { 
    label: 'Specialization', 
    value: 'Software Engineer', 
    icon: <LaptopOutlined />,
    details: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            Technical Expertise
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            I specialize in backend development and infrastructure engineering, with expertise in Java and Python. I focus on building robust, maintainable systems that follow best practices and design patterns.
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Core Competencies
          </Title>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Java', 'Python', 'Microservices', 'Docker', 'Kubernetes', 'System Design'].map((skill, idx) => (
              <Tag key={idx} color="cyan" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    )
  },
  { 
    label: 'Focus', 
    value: 'Scalable Systems', 
    icon: <CloudOutlined />,
    details: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            System Architecture
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            My primary focus is designing and deploying highly scalable systems using containerization and orchestration. I emphasize high performance, reliability, and observability in all solutions.
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Key Principles
          </Title>
          <ul style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li><strong>Performance:</strong> Optimize for speed and resource efficiency</li>
            <li><strong>Reliability:</strong> Fault-tolerant and resilient systems</li>
            <li><strong>Observability:</strong> Comprehensive monitoring and logging</li>
            <li><strong>Scalability:</strong> Handle growing workloads seamlessly</li>
          </ul>
        </div>
      </div>
    )
  },
  { 
    label: 'Passion', 
    value: 'AI & Innovation', 
    icon: <RobotOutlined />,
    details: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            AI Enthusiasm
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            I am deeply enthusiastic about Artificial Intelligence and its potential to solve real-world challenges. I enjoy exploring how AI can enhance scalable systems and create innovative solutions.
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Areas of Interest
          </Title>
          <ul style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Machine Learning and Deep Learning</li>
            <li>AI-powered infrastructure automation</li>
            <li>Intelligent system optimization</li>
            <li>Innovation in solving complex problems</li>
          </ul>
        </div>
      </div>
    )
  }
];
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export const aboutContact: ContactInfo = {
  email: 'mttrung16@gmail.com',
  phone: '+84 902 745 156',
  linkedin: 'https://linkedin.com/in/trungmac07',
  github: 'https://github.com/trungmac07'
};

export interface ContactItem {
  label: string;
  icon: React.ReactNode;
  value: string;
  link: string;
  action: (link: string) => void;
}

export const createAboutContact = (): ContactItem[] => [
  {
    label: 'Email',
    icon: <MailOutlined />,
    value: aboutContact.email,
    link: aboutContact.email,
    action: (link: string) => window.location.href = `mailto:${link}`
  },
  {
    label: 'Phone',
    icon: <PhoneOutlined />,
    value: aboutContact.phone,
    link: aboutContact.phone,
    action: (link: string) => window.location.href = `tel:${link}`
  },
  {
    label: 'LinkedIn',
    icon: <LinkedinOutlined />,
    value: 'Connect with me',
    link: aboutContact.linkedin,
    action: (link: string) => window.open(link, '_blank')
  },
  {
    label: 'GitHub',
    icon: <GithubOutlined />,
    value: 'View my code',
    link: aboutContact.github,
    action: (link: string) => window.open(link, '_blank')
  }
];
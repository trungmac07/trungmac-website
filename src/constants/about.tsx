
import { CodeOutlined, RocketOutlined, CloudOutlined, RobotOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';



export const aboutSkills = [
  { icon: <CodeOutlined />, text: 'Java & Python', color: 'blue' },
  { icon: <CloudOutlined />, text: 'Kubernetes', color: 'cyan' },
  { icon: <CodeOutlined />, text: 'Microservices', color: 'geekblue' },
  { icon: <RocketOutlined />, text: 'CI/CD', color: 'purple' },
  { icon: <RobotOutlined />, text: 'AI Enthusiast', color: 'magenta' }
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
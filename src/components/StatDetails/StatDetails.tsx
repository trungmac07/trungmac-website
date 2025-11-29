import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ABOUT_STATS_DETAILS } from '../../constants/aboutData';
import type { AboutStatData } from '../../hooks/useAbout';

const { Title, Paragraph } = Typography;

interface StatDetailsProps {
  stat: AboutStatData;
}

export const StatDetails: React.FC<StatDetailsProps> = ({ stat }) => {
  const navigate = useNavigate();
  const details = ABOUT_STATS_DETAILS[stat.detailsKey as keyof typeof ABOUT_STATS_DETAILS];

  if (stat.detailsKey === 'experience' && 'achievements' in details) {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            {details.title}
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            {details.description}
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Key Achievements
          </Title>
          <ul style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', paddingLeft: '20px' }}>
            {details.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button 
            type="primary" 
            icon={<ArrowRightOutlined />}
            onClick={() => navigate(details.actionPath)}
            style={{ 
              background: 'var(--ocean-gradient)',
              borderColor: 'var(--ocean-primary)'
            }}
          >
            {details.actionLabel}
          </Button>
        </div>
      </div>
    );
  }

  if (stat.detailsKey === 'specialization' && 'competencies' in details) {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            {details.title}
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            {details.description}
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Core Competencies
          </Title>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {details.competencies.map((comp, idx) => (
              <Tag key={idx} color="cyan" style={{ padding: '6px 12px', fontSize: '0.9rem' }}>
                {comp}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (stat.detailsKey === 'focus' && 'principles' in details) {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            {details.title}
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            {details.description}
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Key Principles
          </Title>
          <ul style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', paddingLeft: '20px' }}>
            {details.principles.map((principle, idx) => (
              <li key={idx}>
                <strong>{principle.label}:</strong> {principle.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (stat.detailsKey === 'passion' && 'interests' in details) {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <Title level={4} style={{ color: 'var(--ocean-primary)', marginTop: 0 }}>
            {details.title}
          </Title>
          <Paragraph style={{ color: 'var(--color-text-primary)', lineHeight: '1.8' }}>
            {details.description}
          </Paragraph>
        </div>
        <div>
          <Title level={4} style={{ color: 'var(--ocean-primary)' }}>
            Areas of Interest
          </Title>
          <ul style={{ color: 'var(--color-text-primary)', lineHeight: '1.8', paddingLeft: '20px' }}>
            {details.interests.map((interest, idx) => (
              <li key={idx}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null;
};

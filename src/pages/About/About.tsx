import React, { useState } from 'react';
import { Card, Typography, Tag, Row, Col, Space, Divider, Modal } from 'antd';
import { ThunderboltOutlined, RocketOutlined } from '@ant-design/icons';
import type { StatItem } from '../../types/types';
import { useAboutSkills, useAboutStats, useResumeLink, useAboutContactItems } from '../../hooks/useAbout';
import { getIconComponent } from '../../utils/iconMapper';
import { StatDetails } from '../../components/StatDetails/StatDetails';
import "./About.css"

export default function About() {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  
  const skillsData = useAboutSkills();
  const statsData = useAboutStats();
  const resumeLink = useResumeLink();
  const contactItems = useAboutContactItems();

  const stats: StatItem[] = statsData.map(stat => ({
    ...stat,
    icon: getIconComponent(stat.iconType),
    details: null,
  }));

  const skills = skillsData.map(skill => ({
    ...skill,
    icon: getIconComponent(skill.iconType),
  }));

  return (
    <div className="about-container">

      <Card className='about-main-card'>

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #38BDF8, #34D399, #60A5FA, #38BDF8)',
          backgroundSize: '200% 100%',
          animation: 'gradientFlow 4s ease infinite'
        }} />

        <div style={{ padding: '60px 30px', textAlign: 'center' }}>

          <h1 className='page-title'>
            Information
          </h1>

          <Row gutter={[24, 24]} style={{ marginBottom: '50px', marginTop: '50px' }} justify="center">
            {stats.map((stat, i) => (
              <Col key={i} xs={24} sm={12} lg={6}>
                <div
                  className="stat-card animate-in"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    animationFillMode: 'backwards'
                  }}
                  onClick={() => setSelectedStat(stat.detailsKey)}
                >
                  <div className='stat-icon-wrapper'>
                    <span className='stat-icon'>
                      {stat.icon}
                    </span>
                  </div>
                  <div className='stat-value text-accent'>
                    {stat.value}
                  </div>
                  <div className='stat-label text-secondary'>
                    {stat.label}
                  </div>
                </div>
              </Col>
            ))}
          </Row>


          <div className="animate-in info-container">
            <p className='text-primary'>
              <RocketOutlined />
              Software engineer with a strong foundation in data structures, algorithms, and software engineering best practices. Experienced in building scalable systems with Java, Python, and deploying containerized microservices on Kubernetes.
            </p>
          </div>

          <div className="animate-in">
            <Space wrap size="middle" style={{ justifyContent: 'center' }}>
              {skills.map((skill, index) => (
                <Tag key={index} icon={skill.icon} color={skill.color} className="skill-tag">
                  {skill.text}
                </Tag>
              ))}
            </Space>
          </div>

          <Divider className='divider' />
          <div className="animate-in" style={{
            maxWidth: '850px',
            margin: '0 auto 40px',
            animationDelay: '0.6s',
            animationFillMode: 'backwards'
          }}>
            <p className='text-tertiary' style={{ marginBottom: 0 }}>
              Over the past year, I have developed secure, observable, and high-performance infrastructure, while gaining practical experience with CI/CD pipelines using Jenkins. I am also deeply enthusiastic about Artificial Intelligence and eager to explore how AI can enhance scalable systems to solve real-world challenges. I'm seeking opportunities to further sharpen my expertise and contribute to impactful projects.
            </p>
          </div>

          {resumeLink && (<div className="cta-container animate-in" style={{ animationFillMode: 'backwards'}}>
            <button
              className="cta-button"
              onClick={() => window.open(resumeLink, '_blank')}
            >
              <ThunderboltOutlined style={{ marginRight: '8px' }} />
              View my resume
            </button>
          </div>
          )}

          <Divider className='divider' />
          <div className="contact-section animate-in" style={{
            marginTop: '40px',
            animationDelay: '0.7s',
            animationFillMode: 'backwards'
          }}>

            <Row gutter={[24, 24]} justify="center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {contactItems.map((contact, index) => (
                <Col key={index} xs={24} sm={12} xl={6}>
                  <div className="contact-card" onClick={() => contact.action(contact.link)}>
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon">
                        {contact.icon}
                      </div>
                    </div>
                    <div className="contact-label text-accent">{contact.label}</div>
                    <div className="contact-value text-secondary">{contact.value}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Card>

      <Modal
        title={selectedStat && stats.find(s => s.detailsKey === selectedStat) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>
              {stats.find(s => s.detailsKey === selectedStat)?.icon}
            </span>
            <span className='text-subheading'>{stats.find(s => s.detailsKey === selectedStat)?.label}</span>
          </div>
        )}
        open={!!selectedStat}
        onCancel={() => setSelectedStat(null)}
        footer={null}
        centered
        className="stat-modal"
        width={700}
      >
        {selectedStat && (
          <div style={{ paddingTop: '10px' }}>
            <span className='text-accent' style={{ fontSize: '1.4rem', display: 'block', marginBottom: '20px', textAlign: 'center' }}>
              {stats.find(s => s.detailsKey === selectedStat)?.value}
            </span>
            <Divider style={{ margin: '20px 0' }} />
            <div style={{ maxHeight: '500px', overflowY: 'auto', color: 'var(--color-text-primary)' }}>
              <StatDetails stat={statsData.find(s => s.detailsKey === selectedStat)!} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
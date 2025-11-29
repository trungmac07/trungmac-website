import React from 'react';
import { Card, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined, CodeOutlined, FileTextOutlined, RobotOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import "./Home.css"

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="home-container">
      <Card className="home-main-card">
        <div className="gradient-border" />

        <div className="home-content">
          <div className="hero-section">
            <Title level={1} className="hero-title">
              {"Welcome".split("").map((char, i) => (
                <span 
                  key={i} 
                  className="wave-letter hero-title"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </Title>
          </div>
          <div className="hero-section animate-in">
            <Paragraph className="hero-subtitle">
              Explore my portfolio. Learn about my expertise, projects, and passion for building scalable systems and exploring AI.
            </Paragraph>
          </div>

          <div className="nav-section animate-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <Space wrap size="large" className="nav-buttons">
              <Link to="/about">
                <Button type="primary" size="large" icon={<FileTextOutlined />}>
                  About Me <ArrowRightOutlined />
                </Button>
              </Link>
              <Link to="/experience">
                <Button size="large" icon={<CodeOutlined />}>
                  Experience
                </Button>
              </Link>
              <Link to="/education">
                <Button size="large" icon={<FileTextOutlined />}>
                  Education
                </Button>
              </Link>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
}
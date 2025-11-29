import React from 'react';
import { CodeOutlined, CloudOutlined, ApiOutlined, ThunderboltOutlined, RobotOutlined, RocketOutlined, LaptopOutlined } from '@ant-design/icons';

type IconType = 'code' | 'cloud' | 'api' | 'thunderbolt' | 'robot' | 'rocket' | 'laptop';

const iconMap: Record<IconType, React.ReactNode> = {
  code: <CodeOutlined />,
  cloud: <CloudOutlined />,
  api: <ApiOutlined />,
  thunderbolt: <ThunderboltOutlined />,
  robot: <RobotOutlined />,
  rocket: <RocketOutlined />,
  laptop: <LaptopOutlined />,
};

export const getIconComponent = (iconType: string): React.ReactNode => {
  return iconMap[iconType as IconType] || <CodeOutlined />;
};

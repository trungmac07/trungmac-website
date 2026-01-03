import React, { useEffect, useRef, useState } from 'react';
import {
  UserOutlined,
  HomeOutlined,
  ReadOutlined,
  RocketOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  StarOutlined
} from '@ant-design/icons';

import { Menu, Button } from 'antd';
import './Sidebar.css'

import { useNavigate, useLocation } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';

type MenuItem = {
  key: React.Key;
  label: React.ReactNode;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  path?: string
): MenuItem {
  return {
    key,
    label,
    icon,
    children,
    path,
  };
}



const items: (MenuItem & { path?: string })[] = [
  getItem('Home', '1', <HomeOutlined />, undefined, '/home'),
  getItem('About', '2', <UserOutlined />,undefined, '/about'),
  getItem('Experience', '2.5', <StarOutlined />, undefined, '/experience'),
  getItem('Education', '3', <ReadOutlined />, undefined, '/education'),
  getItem('Technical Skills', '4', <RocketOutlined />, undefined, '/skills'),
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const [width, setWidth] = useState(300);
  const [nameFontSize, setNameFontSize] = useState("1.5rem") 
  const collapsedRef = useRef(false);

  useEffect(() => {
    const currentSelected = items.find((i) => i.path === location.pathname)?.key?.toString() || "1";
    setSelectedKey(currentSelected);
  }, [location.pathname]);

  const collapseButtonClick = () => {
    collapsedRef.current = !collapsed;
    setCollapsed(!collapsed)
  }

  const selectMenu = (key : string) => {
    
    const find_recursion = (items: (MenuItem & { path?: string })[]): MenuItem & { path?: string } | null => {
      for (const item of items) {
        if (item.key === key) return item;
        if (item.children) {
          const found = find_recursion(item.children);
          if (found) return found;
        } 
      }
      return null;
    }

    setSelectedKey(key);

    const item = find_recursion(items);
    if (item?.path)
      navigate(item.path)
  }

  useEffect(() => {
    const updateWindowSize = () => {
      const w = window.innerWidth;
  
      if (w < 768) {
        setCollapsed(true); 
        setNameFontSize("0");
                    
      } else if (w < 1024) {
        setCollapsed(collapsedRef.current); 
        setWidth(200); 
        setNameFontSize("1.2rem");
      } else {
        setCollapsed(collapsedRef.current); 
        setWidth(300);
        setNameFontSize("1.5rem");
      }
    };
  
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (

        <Sider 
          className="ocean-sider"
          collapsible 
          collapsed={collapsed} 
          onCollapse={(value) => {
            collapsedRef.current = value; // Save user preference
            setCollapsed(value);
          }}
          trigger={null}
          width={width}
        >
          <div className="ocean-logo" style={{ background: collapsed ? 'transparent' : 'var(--ocean-gradient-subtle)' }}>
            {collapsed ? <></> : <div style={{ 
              fontSize: nameFontSize, 
              fontWeight: 'bold',
              background: collapsed ? 'transparent' : 'var(--ocean-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'all 0.3s ease',
            }}>
              Mạc Tuấn Trung
            </div>
            }
          </div>
          
          <Menu 
            className="ocean-menu"
            mode="inline" 
            selectedKeys={[selectedKey]}
            style={{fontSize: '1.2rem'}}
            items={items}
            onSelect={({ key }) => selectMenu(key)}
          />
          
          <Button className="collapse-button" onClick={collapseButtonClick}>
            {
                collapsed ? <RightCircleOutlined style={{fontSize:'1.2rem'}}/> : <LeftCircleOutlined style={{fontSize:'1.2rem'}}/>
            }
          </Button>

        </Sider>

  );
};

export default Sidebar;
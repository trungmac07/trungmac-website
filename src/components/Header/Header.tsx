import { Menu } from 'antd';
import './Header.css'
import { myInfo } from '../../constants/info';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const Header = () => {
  return (
    <header className="ocean-header">
      <div className="header-container">
        <div className='profile-container'>
          <Avatar 
            size={70}
            src={'../../assets/img/me.png'}
            icon={<UserOutlined />}
            className='circle-profile'
            alt='profile_img'
          />


          <h2 style={{ color: 'var(--ocean-navy)', marginTop: '15px', marginLeft: '10px' }}>{myInfo.name}</h2>

        </div>
        <Menu 
          className='pagination-container'
          mode="horizontal" 
          style={{ 
            background: 'transparent',
            borderBottom: 'none'
          }}
          items={[
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'projects', label: 'Projects' },
            { key: 'contact', label: 'Contact' },
          ]}
        />
      </div>
    </header>
  );
};

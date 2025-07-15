import { Link } from 'react-router-dom';
import './style.css'
import {Menu} from "antd";
import {useState} from "react";
import { ContactsOutlined, HomeOutlined, ProjectOutlined } from '@ant-design/icons';

const items = [
    {
        label: <Link to="/">Home</Link>,
        key: 'Home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/about">About</Link>,
        key: 'About',
        icon: <ContactsOutlined />,
    },
    {
      label: <Link to="/projects">Projects</Link>,
        key: 'Projects',
        icon: <ProjectOutlined />,
    },
    {
        label: <Link to="/contact">Contact</Link>,
        key: 'Contact',
        icon: <ContactsOutlined />
    },
    {
        key: 'alipay',
        label: <Link to="/blog">Blog</Link>,
    },
];
function Header() {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <header className="header-container">
        <div className="logo">PhongDev</div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="main-menu"
          style={{ flex: 1, justifyContent: 'center', border: 'none', background: 'transparent' }}
        />
      </header>
    );
}

export default Header;

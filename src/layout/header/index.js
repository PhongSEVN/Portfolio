import { Link } from 'react-router-dom';
import './style.css'
import {Menu} from "antd";
import {useState} from "react";
import { ContactsOutlined, HomeOutlined, ProjectOutlined, MenuOutlined } from '@ant-design/icons';

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
        setMobileMenuOpen(false); // Đóng menu khi click
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div style={{ position: 'relative' }}>
            <header className="header-container">
                <div className="logo">PhongDev</div>
                
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    className="main-menu desktop-menu"
                    style={{ flex: 1, justifyContent: 'center', border: 'none', background: 'transparent' }}
                />
                
                <button 
                    className="mobile-menu-button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <MenuOutlined />
                </button>
            </header>
            
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay">
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="vertical"
                        items={items}
                        className="mobile-menu"
                        style={{ border: 'none', background: 'white' }}
                    />
                </div>
            )}
        </div>
    );
}

export default Header;
import { Link, useLocation } from 'react-router-dom';
import './style.css'
import { Menu } from "antd";
import { useState, useEffect } from "react";
import { ContactsOutlined, HomeOutlined, ProjectOutlined, MenuOutlined, CloseOutlined, ReadOutlined } from '@ant-design/icons';

const items = [
    {
        label: <Link to="/">Home</Link>,
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/about">About</Link>,
        key: '/about',
        icon: <ContactsOutlined />,
    },
    {
        label: <Link to="/projects">Projects</Link>,
        key: '/projects',
        icon: <ProjectOutlined />,
    },
    {
        label: <Link to="/contact">Contact</Link>,
        key: '/contact',
        icon: <ContactsOutlined />
    },
    {
        label: <Link to="/blog">Blog</Link>,
        key: '/blog',
        icon: <ReadOutlined />,
    },
];

function Header() {
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setCurrent(location.pathname);
    }, [location]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const onClick = e => {
        setCurrent(e.key);
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className="modern-header">
                <div className="header-wrapper">
                    <Link to="/" className="brand-logo" onClick={() => setCurrent('/')}>
                        PhongDev
                    </Link>

                    <nav className="nav-desktop">
                        <Menu
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={items}
                            className="desktop-menu"
                        />
                    </nav>

                    <button
                        className="menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </button>
                </div>
            </header>

            {mobileMenuOpen && (
                <>
                    <div className="overlay" onClick={toggleMobileMenu} />
                    <div className="nav-mobile">
                        <Menu
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="vertical"
                            items={items}
                            className="mobile-menu"
                        />
                    </div>
                </>
            )}
        </>
    );
}

export default Header;

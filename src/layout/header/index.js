import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Drawer } from "antd";
import './style.css';

const items = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
    { label: 'Blog', path: '/blog' },
];

function Header() {
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname);
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(() => {
        setCurrent(location.pathname);
        setDrawerVisible(false);
    }, [location]);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onClose = () => {
        setDrawerVisible(false);
    };

    return (
        <header className="professional-header">
            <div className="header-container">
                {/* Logo Section */}
                <div className="logo-area">
                    <Link to="/" className="logo-text" onClick={() => setCurrent('/')}>
                        PhongDev
                        <span className="logo-dot"></span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {items.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${current === item.path ? 'active' : ''}`}
                            onClick={() => setCurrent(item.path)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle Button */}
                <button className="mobile-toggle" onClick={showDrawer} aria-label="Open Menu">
                    <div className="hamburger"></div>
                </button>

                {/* Mobile Drawer Menu */}
                <Drawer
                    placement="right"
                    onClose={onClose}
                    open={drawerVisible}
                    className="mobile-drawer"
                    width={280}
                    closable={true}
                    zIndex={20000}
                >
                    <nav className="drawer-menu">
                        {items.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="drawer-link"
                                onClick={onClose}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </Drawer>
            </div>
        </header>
    );
}

export default Header;

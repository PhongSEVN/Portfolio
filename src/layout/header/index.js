import { Link } from 'react-router-dom';
import './style.css'
function Header() {
    return (
        <header className="header">
            <div className="logo">Phong Dev</div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/experiences">Experiences</Link>
                <Link to="/product">My Product</Link>
            </nav>
        </header>
    );
}

export default Header;

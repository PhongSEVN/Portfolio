import { Outlet } from 'react-router-dom';
import Header from '../header/index.js';
import BackToTop from '../../components/BackToTop';
import './style.css';

function MainLayout() {
    return (
        <>
            <Header />
            <main className="main-content">
                <Outlet />  {/* Đây là nơi hiển thị các trang con */}
            </main>
            <BackToTop />
        </>
    );
}

export default MainLayout;

import { Outlet } from 'react-router-dom';
import Header from '../header/index.js'; // Import Header component
function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />  {/* Đây là nơi hiển thị các trang con */}
        </>
    );
}

export default MainLayout;

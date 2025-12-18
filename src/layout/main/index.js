import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/index.js';
import BackToTop from '../../components/BackToTop';
import CustomCursor from '../../components/Layout/CustomCursor';
import PageTransition from '../../components/Layout/PageTransition';
import { AnimatePresence } from 'framer-motion';
import './style.css';

function MainLayout() {
    const location = useLocation();

    return (
        <>
            <CustomCursor />
            <Header />
            <main className="main-content">
                <AnimatePresence mode='wait'>
                    <PageTransition key={location.pathname}>
                        <Outlet />
                    </PageTransition>
                </AnimatePresence>
            </main>
            <BackToTop />
        </>
    );
}

export default MainLayout;

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer" style={{
                padding: '4rem 0',
                textAlign: 'center',
                borderTop: '1px solid var(--border)',
                marginTop: '8rem',
                color: 'var(--text-muted)'
            }}>
                <div className="container">
                    <p>&copy; 2026 LuxeCommerce. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

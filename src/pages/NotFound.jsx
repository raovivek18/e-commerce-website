import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
            textAlign: 'center',
            gap: '1.5rem'
        }}>
            <AlertCircle size={80} color="var(--error)" />
            <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>404 - Page Not Found</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '500px' }}>
                The page you are looking for doesn't exist or has been moved.
                But don't worry, our premium collection is just a click away.
            </p>
            <Link to="/" className="premium-btn">
                <Home size={20} /> Return Home
            </Link>
        </div>
    );
};

export default NotFound;

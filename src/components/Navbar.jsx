import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, Store, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const { totalQuantity } = useSelector((state) => state.cart);
    const { isAuthenticated } = useSelector((state) => state.user);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    <Store size={28} className="logo-icon" />
                    <span>LuxeCommerce</span>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="nav-link">Shop</Link>
                    <Link to="/cart" className="nav-link cart-link">
                        <ShoppingCart size={22} />
                        {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
                    </Link>
                    <div className="nav-user">
                        <User size={22} />
                        <span className="user-status">{isAuthenticated ? 'Profile' : 'Login'}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

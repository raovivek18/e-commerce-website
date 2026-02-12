import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { ShoppingBag, ArrowRight, Trash2, ArrowLeft } from 'lucide-react';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, totalPrice, totalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart-container container animate-fade-in">
                <div className="empty-shadow"></div>
                <div className="empty-cart-content">
                    <div className="icon-blob">
                        <ShoppingBag size={64} className="empty-icon" />
                    </div>
                    <h2>Your Shopping Bag spans the horizon...</h2>
                    <p>It seems you haven't discovered your next favorite piece yet.</p>
                    <Link to="/" className="premium-btn">
                        <ArrowLeft size={18} /> Explore Collections
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page animate-fade-in container">
            <div className="cart-header">
                <div>
                    <h1>Shopping Bag</h1>
                    <p className="cart-subtitle">Review your selected creations ({totalQuantity} items)</p>
                </div>
                <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">
                    <Trash2 size={16} /> Clear All
                </button>
            </div>

            <div className="cart-grid">
                <div className="cart-items-list">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="cart-summary-panel">
                    <div className="summary-card glass">
                        <h3>Order Summary</h3>
                        <div className="summary-body">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Concierge Shipping</span>
                                <span className="free-tag">Free</span>
                            </div>
                            <div className="summary-row">
                                <span>Estimated Duties</span>
                                <span>Included</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total-row">
                                <span>Total Amount</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="premium-btn checkout-btn">
                            Begin Checkout <ArrowRight size={20} />
                        </button>

                        <div className="payment-trust">
                            <p>Guaranteed secure checkout with SSL encryption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;


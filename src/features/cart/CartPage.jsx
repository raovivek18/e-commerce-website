import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, totalPrice, totalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart-container container animate-fade-in">
                <div className="empty-cart-content premium-card">
                    <ShoppingBag size={80} className="empty-icon" />
                    <h2>Your bag is currently empty</h2>
                    <p>Before you checkout, you must add some products to your shopping bag.</p>
                    <Link to="/" className="premium-btn">Start Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page animate-fade-in container">
            <div className="cart-header">
                <h1>Shopping Bag ({totalQuantity})</h1>
                <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">
                    <Trash2 size={18} /> Clear Bag
                </button>
            </div>

            <div className="cart-grid">
                <div className="cart-items-list">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="cart-summary-panel">
                    <div className="summary-card premium-card">
                        <h3>Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Estimated Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-row">
                            <span>Estimated Tax</span>
                            <span>$0.00</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <button className="premium-btn checkout-btn">
                            Checkout Now <ArrowRight size={20} />
                        </button>
                        <p className="summary-info">Tax and shipping will be calculated during checkout</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cart/cartSlice';
import { Trash2, Plus, Minus } from 'lucide-react';
import './CartItem.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item premium-card">
            <div className="item-image">
                <img src={item.images[0]?.replace(/[\[\]"]/g, '')} alt={item.title} />
            </div>

            <div className="item-details">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">${item.price}</p>
            </div>

            <div className="item-actions">
                <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="qty-btn">
                        <Minus size={16} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="qty-btn">
                        <Plus size={16} />
                    </button>
                </div>

                <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
                    <Trash2 size={20} />
                </button>
            </div>

            <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    );
};

export default CartItem;

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { ShoppingCart, Eye } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
    };

    return (
        <div className="product-card premium-card animate-fade-in">
            <Link to={`/product/${product.id}`} className="card-image-wrapper">
                <img
                    src={product.images[0]?.replace(/[\[\]"]/g, '')}
                    alt={product.title}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }}
                />
                <div className="card-overlay">
                    <Eye size={24} />
                </div>
            </Link>

            <div className="card-content">
                <div className="card-category">{product.category.name}</div>
                <Link to={`/product/${product.id}`} className="card-title">
                    {product.title}
                </Link>

                <div className="card-footer">
                    <span className="card-price">${product.price}</span>
                    <button onClick={handleAddToCart} className="add-to-cart-btn">
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

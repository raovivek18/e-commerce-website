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

    const imageUrl = product.images[0]?.replace(/[\[\]"]/g, '') || 'https://via.placeholder.com/300';

    return (
        <div className="product-card premium-card animate-fade-in">
            <div className="card-image-wrapper">
                <img src={imageUrl} alt={product.title} loading="lazy" />
                <div className="card-actions">
                    <Link to={`/product/${product.id}`} className="action-btn" title="View Details">
                        <Eye size={18} />
                    </Link>
                    <button
                        className="action-btn primary"
                        onClick={handleAddToCart}
                        title="Add to Bag"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
                {product.category && (
                    <span className="card-badge-top glass">{product.category.name}</span>
                )}
            </div>

            <div className="card-content">
                <Link to={`/product/${product.id}`} className="card-title">
                    {product.title}
                </Link>
                <div className="card-footer">
                    <div className="price-group">
                        <span className="price-label">Price</span>
                        <span className="card-price">${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


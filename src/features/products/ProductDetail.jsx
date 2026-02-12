import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail, clearSelectedProduct } from './productsSlice';
import { addToCart } from '../cart/cartSlice';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductDetail(id));
        return () => dispatch(clearSelectedProduct());
    }, [dispatch, id]);

    if (loading) {
        return <div className="loader-container"><div className="loader"></div></div>;
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    if (!selectedProduct) return null;

    return (
        <div className="product-detail-page animate-fade-in">
            <Link to="/" className="back-link">
                <ArrowLeft size={20} /> Back to Shop
            </Link>

            <div className="product-detail-grid">
                <div className="product-images-gallery">
                    <img
                        src={selectedProduct.images[0]?.replace(/[\[\]"]/g, '')}
                        alt={selectedProduct.title}
                        className="main-image premium-card"
                    />
                    <div className="image-thumbnails">
                        {selectedProduct.images.slice(1, 4).map((img, idx) => (
                            <img
                                key={idx}
                                src={img.replace(/[\[\]"]/g, '')}
                                alt={`${selectedProduct.title} ${idx + 2}`}
                                className="thumb-image premium-card"
                            />
                        ))}
                    </div>
                </div>

                <div className="product-info-panel">
                    <div className="detail-category">{selectedProduct.category.name}</div>
                    <h1 className="detail-title">{selectedProduct.title}</h1>
                    <div className="detail-price">${selectedProduct.price}</div>

                    <p className="detail-description">{selectedProduct.description}</p>

                    <button
                        className="premium-btn add-large-btn"
                        onClick={() => dispatch(addToCart(selectedProduct))}
                    >
                        <ShoppingCart size={24} />
                        Add to Shopping Bag
                    </button>

                    <div className="detail-features">
                        <div className="feature-item">
                            <Truck size={20} className="feature-icon" />
                            <div>
                                <strong>Free Shipping</strong>
                                <span>On orders over $150</span>
                            </div>
                        </div>
                        <div className="feature-item">
                            <RefreshCw size={20} className="feature-icon" />
                            <div>
                                <strong>30-Day Returns</strong>
                                <span>No-hassle exchange</span>
                            </div>
                        </div>
                        <div className="feature-item">
                            <ShieldCheck size={20} className="feature-icon" />
                            <div>
                                <strong>Secure Payment</strong>
                                <span>SSL encrypted checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

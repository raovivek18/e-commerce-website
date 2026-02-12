import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './productsSlice';
import ProductCard from '../../components/ProductCard';
import './ProductsList.css';

const ProductsList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (loading && products.length === 0) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Curating the finest items for you...</p>
            </div>
        );
    }

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;

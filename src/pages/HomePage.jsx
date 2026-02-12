import Hero from '../components/Hero';
import ProductsList from '../features/products/ProductsList';

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />

            <main className="container">
                <section className="shop-section" style={{ padding: '4rem 0' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: '3rem',
                        borderBottom: '1px solid var(--border)',
                        paddingBottom: '1.5rem'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Our Collection</h2>
                            <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Discover our latest premium arrivals</p>
                        </div>
                        <div className="filter-badge" style={{
                            padding: '0.5rem 1rem',
                            background: 'var(--surface)',
                            borderRadius: '100px',
                            border: '1px solid var(--border)',
                            fontSize: '0.875rem',
                            fontWeight: 600
                        }}>
                            All Products
                        </div>
                    </div>
                    <ProductsList />
                </section>
            </main>
        </div>
    );
};

export default HomePage;

import Hero from '../components/Hero';
import ProductsList from '../features/products/ProductsList';

const HomePage = () => {
    return (
        <div className="home-page animate-fade-in">
            <Hero />

            <main className="container">
                <section className="shop-section">
                    <div className="section-header glass">
                        <div className="header-info">
                            <h2 className="section-title">The Master Collection</h2>
                            <p className="section-subtitle">Exquisite essentials meticulously crafted for the modern individual.</p>
                        </div>
                        <div className="filter-pill">
                            <span className="dot"></span>
                            All Creations
                        </div>
                    </div>
                    <ProductsList />
                </section>
            </main>
        </div>
    );
};

export default HomePage;


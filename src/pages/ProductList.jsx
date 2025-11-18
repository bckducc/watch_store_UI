import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const sampleProducts = [
    { id: 1, name: 'Classic 42', price: '₫2,990,000', image: '/src/assets/watch.jpg' },
    { id: 2, name: 'Sport Pro', price: '₫3,450,000', image: '/src/assets/watch.jpg' },
    { id: 3, name: 'Urban Slim', price: '₫1,890,000', image: '/src/assets/watch.jpg' },
    { id: 4, name: 'Smart X', price: '₫4,200,000', image: '/src/assets/watch.jpg' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        const data = response.data;
        if (Array.isArray(data) && data.length) setProducts(data);
        else setProducts(sampleProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        // fallback to sample data so the page still shows products when backend is down
        setProducts(sampleProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="product-list"><h2>Loading products…</h2></div>;

  const categories = ['All', 'Classic', 'Sport', 'Smart', 'Luxury'];

  return (
    <div className="product-page product-list">
      <Header />
      <div className="hero-banner" style={{ backgroundImage: 'url(/src/assets/hero-banner.jpg)' }}>
        <h1>Men's Watches</h1>
        <p>Discover the perfect watch for every style and occasion.</p>
        <button className="cta-button">Shop Now</button>
      </div>
      <div className="filters">
        <select className="sort-dropdown">
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
        <select className="category-dropdown">
          {categories.map((category) => (
            <option value={category.toLowerCase()} key={category}>{category}</option>
          ))}
        </select>
        <input type="text" className="search-bar" placeholder="Search products..." />
      </div>
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="view-details">View Details</button>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn">Previous</button>
        <span className="page-numbers">1 2 3</span>
        <button className="page-btn">Next</button>
      </div>
      <footer className="footer">
        <p>&copy; 2025 WatchStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductList;
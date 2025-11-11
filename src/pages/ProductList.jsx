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

  return (
    <div className="product-list">
      
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
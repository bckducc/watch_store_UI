import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BrandProducts.css';

const BrandProducts = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);

  const sampleProducts = [
    {
      id: 1,
      name: 'Casio MTP-1374L-1AVDF',
      image: '/src/assets/watch.jpg',
      salePrice: '1,816,000',
      discount: 20,
    },
    {
      id: 2,
      name: 'Citizen NH8350-83L',
      image: '/src/assets/watch.jpg',
      salePrice: '4,533,300',
      discount: 15,
    },
    {
      id: 3,
      name: 'Orient FAC00002B0',
      image: '/src/assets/watch.jpg',
      salePrice: '4,372,700',
      discount: 10,
    },
    {
      id: 4,
      name: 'G-Shock GA-2100-1A1DR',
      image: '/src/assets/watch.jpg',
      salePrice: '2,618,000',
      discount: 25,
    },
  ];

  useEffect(() => {
    // Giả sử có API để lấy sản phẩm theo thương hiệu
    fetch(`/api/products?brand=${brand}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts(sampleProducts)); // Hiển thị dữ liệu mẫu nếu API lỗi
  }, [brand]);

  return (
    <div className="brand-products-page">
      <Header />
      <h1>Sản phẩm của thương hiệu: {brand}</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">₫{product.salePrice}</p>
            {product.discount && (
              <p className="product-discount">Giảm giá: {product.discount}%</p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BrandProducts;
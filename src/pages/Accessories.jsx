import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Accessories = () => {
  return (
    <div className="page-like-home">
      <Header />

      <div className="section">
        <h1>Phụ Kiện</h1>
        <p className="lead">Dây đeo, hộp đựng, và phụ kiện bảo quản đồng hồ.</p>

        <div className="product-grid">
          {[1,2,3,4,5,6].map(i => (
            <div className="product-card" key={i}>
              <img src="/src/assets/watch.jpg" alt={`acc-${i}`} />
              <h3>Accessory {i}</h3>
              <p>$29</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Accessories;

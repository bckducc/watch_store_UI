import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Trend = () => {
  return (
    <div className="page-like-home">
      <Header />

      <div className="section">
        <h1>Xu Hướng 2025</h1>
        <p className="lead">Bộ sưu tập xu hướng cho năm 2025 — những mẫu đồng hồ được tuyển chọn.</p>

        <div className="product-grid">
          {[1,2,3,4,5,6].map(i => (
            <div className="product-card" key={i}>
              <img src="/src/assets/watch.jpg" alt={`watch-${i}`} />
              <h3>Watch Model {i}</h3>
              <p>$199</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Trend;

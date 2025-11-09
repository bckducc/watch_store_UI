import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Women = () => {
  return (
    <div className="page-like-home">
      <Header />

      <div className="section">
        <h1>Đồng Hồ Nữ</h1>
        <p className="lead">Sản phẩm nữ tính: thanh lịch và tinh tế.</p>

        <div className="product-grid">
          {[1,2,3,4,5,6].map(i => (
            <div className="product-card" key={i}>
              <img src="/src/assets/watch.jpg" alt={`women-${i}`} />
              <h3>Women Watch {i}</h3>
              <p>$159</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Women;

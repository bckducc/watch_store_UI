import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Men = () => {
  return (
    <div className="page-like-home">
      <Header />

      <div className="section">
        <h1>Đồng Hồ Nam</h1>
        <p className="lead">Tuyển chọn đồng hồ nam: lịch lãm, thể thao, và cổ điển.</p>

        <div className="product-grid">
          {[1,2,3,4,5,6].map(i => (
            <div className="product-card" key={i}>
              <img src="/src/assets/watch.jpg" alt={`men-${i}`} />
              <h3>Men Watch {i}</h3>
              <p>$179</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Men;

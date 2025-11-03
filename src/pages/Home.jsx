import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Đại Tiệc Watchholic</h1>
        <p>Giảm giá lên đến 40%</p>
        <button>Shop Now</button>
      </div>

      {/* Featured Products Carousel */}
      <Carousel>
        <Carousel.Item>
          <img src="/assets/classic-watch.jpg" alt="Classic Watch" />
          <Carousel.Caption>
            <h3>Classic Watch</h3>
            <p>$199</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/modern-watch.jpg" alt="Modern Watch" />
          <Carousel.Caption>
            <h3>Modern Watch</h3>
            <p>$249</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/assets/sport-watch.jpg" alt="Sport Watch" />
          <Carousel.Caption>
            <h3>Sport Watch</h3>
            <p>$299</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Products */}
      <div className="popular-products">
        <h2>Đồng Hồ Được Yêu Thích Nhất</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/assets/classic-watch.jpg" alt="Classic Watch" />
            <h3>Classic Watch</h3>
            <p>$199</p>
          </div>
          <div className="product-card">
            <img src="/assets/modern-watch.jpg" alt="Modern Watch" />
            <h3>Modern Watch</h3>
            <p>$249</p>
          </div>
          <div className="product-card">
            <img src="/assets/sport-watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </div>

      {/* Brand Showcase */}
      <div className="brands">
        <h2>40+ Thương Hiệu Quốc Tế</h2>
        <div className="brand-grid">
          <span>Rolex</span>
          <span>Omega</span>
          <span>Casio</span>
          <span>Seiko</span>
          <span>Citizen</span>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Watch Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />

      {/* Promotional collage banner */}
      <div className="hero-banner">
        <div className="left">
          <div className="big">
            <img src="/src/assets/watch.jpg" alt="Promo left large" />
          </div>
          <div className="strip">
            <img src="/src/assets/watch.jpg" alt="Promo strip" />
          </div>
        </div>

        <div className="right">
          <div className="top">
            <img src="/src/assets/watch.jpg" alt="Promo right top" />
          </div>
          <div className="bottom">
            <div className="tile">
              <img src="/src/assets/watch.jpg" alt="Promo right bottom 1" />
              <span className="tile-label">NỮ</span>
            </div>
            <div className="tile">
              <img src="/src/assets/watch.jpg" alt="Promo right bottom 2" />
              <span className="tile-label">NAM</span>
            </div>
          </div>
        </div>
      </div>

  {/* Featured Products Carousel */}
  <div className="featured-carousel">
  <Carousel>
        <Carousel.Item>
          <img src="/src/assets/watch.jpg" alt="Classic Watch" />
          <Carousel.Caption>
            <h3>Classic Watch</h3>
            <p>$199</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/watch.jpg" alt="Modern Watch" />
          <Carousel.Caption>
            <h3>Modern Watch</h3>
            <p>$249</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/assets/watch.jpg" alt="Sport Watch" />
          <Carousel.Caption>
            <h3>Sport Watch</h3>
            <p>$299</p>
          </Carousel.Caption>
        </Carousel.Item>
  </Carousel>
  </div>

      {/* Popular Products */}
      <div className="popular-products">
        <h2>Đồng Hồ Được Yêu Thích Nhất</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Classic Watch" />
            <h3>Classic Watch</h3>
            <p>$199</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Modern Watch" />
            <h3>Modern Watch</h3>
            <p>$249</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </div>

      {/* Recently Viewed Products */}
      <div className="recently-viewed">
        <h2>Sản phẩm đã xem</h2>
        <div className="product-card">
          <img src="src/assets/watch.jpg" alt="Recently Viewed" />
          <h3>Citizen 40mm Nam NJ0150-81E</h3>
          <p>7.238.000 ₫</p>
        </div>
      </div>

      {/* Trending Watches */}
      <div className="trending-watches">
        <h2>Đồng Hồ Xu Hướng 2025</h2>
        <div className="filters">
          <button>Nam</button>
          <button>Nữ</button>
          <button>Dưới 1 triệu</button>
          <button>1-3 triệu</button>
          <button>3-6 triệu</button>
        </div>
        <div className="product-grid">
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Trending Watch" />
            <h3>Citizen 40mm Nam NJ0151-88M</h3>
            <p>7.238.000 ₫</p>
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
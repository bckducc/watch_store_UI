import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
              <div className="tile-overlay">
                <span className="tile-label">NỮ</span>
              </div>
            </div>
            <div className="tile">
              <img src="/src/assets/watch.jpg" alt="Promo right bottom 2" />
              <div className="tile-overlay">
                <span className="tile-label">NAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <section className="featured-carousel">
        <div className="container">
          <h2 className="section-title">Đồng Hồ Đang Hot</h2>
          <Carousel>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Classic Watch" />
              <Carousel.Caption>
                <h3>Classic Watch</h3>
                <p className="price">$199</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Modern Watch" />
              <Carousel.Caption>
                <h3>Modern Watch</h3>
                <p className="price">$249</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Sport Watch" />
              <Carousel.Caption>
                <h3>Sport Watch</h3>
                <p className="price">$299</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-products">
        <div className="container">
          <h2 className="section-title">Đồng Hồ Được Yêu Thích Nhất</h2>
          <div className="product-grid">
            {[...Array(6)].map((_, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src="/src/assets/watch.jpg" alt={`Watch ${i + 1}`} />
                  <div className="product-badge">New</div>
                </div>
                <div className="product-info">
                  <h3>Classic Watch</h3>
                  <p className="price">$199</p>
                  <button className="btn-add-cart">Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-products gray-bg">
        <div className="container">
          <div className="product-grid">
            {[...Array(6)].map((_, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src="/src/assets/watch.jpg" alt={`Watch ${i + 1}`} />
                </div>
                <div className="product-info">
                  <h3>Modern Watch</h3>
                  <p className="price">$249</p>
                  <button className="btn-add-cart">Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-products">
        <div className="container">
          <div className="product-grid">
            {[...Array(6)].map((_, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src="/src/assets/watch.jpg" alt={`Watch ${i + 1}`} />
                </div>
                <div className="product-info">
                  <h3>Sport Watch</h3>
                  <p className="price">$299</p>
                  <button className="btn-add-cart">Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-products gray-bg">
        <div className="container">
          <div className="product-grid">
            {[...Array(6)].map((_, i) => (
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src="/src/assets/watch.jpg" alt={`Watch ${i + 1}`} />
                </div>
                <div className="product-info">
                  <h3>Luxury Watch</h3>
                  <p className="price">$399</p>
                  <button className="btn-add-cart">Thêm vào giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pagination">
        <a href="#" className="page-link">&laquo;</a>
        <a href="#" className="page-link active">1</a>
        <a href="#" className="page-link">2</a>
        <a href="#" className="page-link">3</a>
        <a href="#" className="page-link">4</a>
        <a href="#" className="page-link">&raquo;</a>
      </div>

      <section className="info-section">
        <div className="container">
          <p className="info-text">
            Đồng hồ Casio MTP (Men's Timepiece) là một trong những dòng đồng hồ nam kinh điển của thương hiệu Nhật Bản. 
            Với mức giá dễ tiếp cận, những mẫu thuộc bộ sưu tập này ghi dấu ấn nhờ chất lượng vượt trội và độ bền ấn tượng. 
            Sở hữu những "cỗ máy thời gian" mới nhất từ WatchStore, quý ông sẽ có ngay một người bạn thời trang và lịch lãm, 
            đi kèm những tính năng hữu ích mà không phải bận tâm về giá cả.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
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
    <h2>Đồng hồ đang Hot</h2>
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
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </div>

      <div className="popular-products">
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
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </div>

      <div className="popular-products">
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
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </div>

 <div className="popular-products">
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
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src="src/assets/watch.jpg" alt="Sport Watch" />
            <h3>Sport Watch</h3>
            <p>$299</p>
          </div>
        </div>
      </div>

      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">&raquo;</a>
      </div>

      <p>Đồng hồ Casio MTP (Men’s Timepiece) là một trong những dòng đồng hồ nam kinh điển của thương hiệu Nhật Bản. Với mức giá dễ tiếp cận, những mẫu thuộc bộ sưu tập này ghi dấu ấn nhờ chất lượng vượt trội và độ bền ấn tượng. Sở hữu những “cỗ máy thời gian” mới nhất từ WatchStore, quý ông sẽ có ngay một người bạn thời trang và lịch lãm, đi kèm những tính năng hữu ích mà không phải bận tâm về giá cả.</p>

      {/* Footer */}
      <Footer />
    </div>
  );
};



export default Home;
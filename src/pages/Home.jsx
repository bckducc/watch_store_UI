import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const brands = ['Casio', 'Seiko', 'Citizen', 'Orient', 'Tissot', 'Omega'];
  
  const featuredProducts = [
    { id: 1, name: 'Casio Edifice EFR-539', price: 2990000, image: '/src/assets/watch.jpg', brand: 'Casio', discount: 15 },
    { id: 2, name: 'Seiko Presage SSA440', price: 5490000, image: '/src/assets/watch.jpg', brand: 'Seiko', discount: 0 },
    { id: 3, name: 'Citizen Eco-Drive BM7360', price: 4290000, image: '/src/assets/watch.jpg', brand: 'Citizen', discount: 20 },
    { id: 4, name: 'Orient Bambino RA-AC0005S', price: 3790000, image: '/src/assets/watch.jpg', brand: 'Orient', discount: 10 },
  ];

  const newArrivals = [
    { id: 5, name: 'Tissot PRX T137.407.11', price: 8990000, image: '/src/assets/watch.jpg', badge: 'Mới' },
    { id: 6, name: 'Casio G-Shock GA-2100', price: 3290000, image: '/src/assets/watch.jpg', badge: 'Mới' },
    { id: 7, name: 'Seiko 5 Sports SRPD', price: 6190000, image: '/src/assets/watch.jpg', badge: 'Mới' },
    { id: 8, name: 'Citizen Promaster NY0040', price: 7490000, image: '/src/assets/watch.jpg', badge: 'Mới' },
    { id: 9, name: 'Orient Mako III RA-AA', price: 4490000, image: '/src/assets/watch.jpg', badge: 'Mới' },
    { id: 10, name: 'Casio Edifice EQB-1100', price: 5990000, image: '/src/assets/watch.jpg', badge: 'Mới' },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="home">
      <Header />

      {/* Hero Section with USPs */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="highlight">WatchStore</span> - Đồng Hồ Chính Hãng
            </h1>
            <p className="hero-subtitle">Uy tín hàng đầu Việt Nam với hơn 10.000 khách hàng tin dùng</p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>100% Chính Hãng</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Bảo Hành Toàn Quốc</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Miễn Phí Vận Chuyển</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Đổi Trả 30 Ngày</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <div className="hero-banner">
        <div className="left">
          <div className="big">
            <img src="/src/assets/watch.jpg" alt="Đồng hồ cao cấp" />
            <div className="banner-overlay">
              <h3>Bộ Sưu Tập Cao Cấp</h3>
              <p>Giảm đến 25%</p>
            </div>
          </div>
          <div className="strip">
            <img src="/src/assets/watch.jpg" alt="Đồng hồ thể thao" />
            <div className="banner-overlay">
              <h3>Đồng Hồ Thể Thao</h3>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="top">
            <img src="/src/assets/watch.jpg" alt="Đồng hồ sang trọng" />
            <div className="banner-overlay">
              <h3>Sang Trọng & Đẳng Cấp</h3>
            </div>
          </div>
          <div className="bottom">
            <div className="tile">
              <img src="/src/assets/watch.jpg" alt="Đồng hồ nữ" />
              <div className="tile-overlay">
                <span className="tile-label">NỮ</span>
              </div>
            </div>
            <div className="tile">
              <img src="/src/assets/watch.jpg" alt="Đồng hồ nam" />
              <div className="tile-overlay">
                <span className="tile-label">NAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Carousel */}
      <section className="featured-carousel">
        <div className="container">
          <h2 className="section-title">
            <span className="title-icon">⭐</span>
            Sản Phẩm Nổi Bật
          </h2>
          <Carousel interval={3000} pause="hover">
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Casio Edifice" />
              <Carousel.Caption>
                <div className="carousel-content">
                  <span className="carousel-badge">Best Seller</span>
                  <h3>Casio Edifice EFR-539</h3>
                  <p className="carousel-desc">Đồng hồ thể thao cao cấp, thiết kế mạnh mẽ</p>
                  <p className="price">2.990.000₫</p>
                  <Link to="/product/1" className="btn-view-product">Xem Chi Tiết</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Seiko Presage" />
              <Carousel.Caption>
                <div className="carousel-content">
                  <span className="carousel-badge">Premium</span>
                  <h3>Seiko Presage Cocktail</h3>
                  <p className="carousel-desc">Nghệ thuật chế tác Nhật Bản tinh xảo</p>
                  <p className="price">5.490.000₫</p>
                  <Link to="/product/2" className="btn-view-product">Xem Chi Tiết</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Citizen Eco-Drive" />
              <Carousel.Caption>
                <div className="carousel-content">
                  <span className="carousel-badge">Eco-Friendly</span>
                  <h3>Citizen Eco-Drive</h3>
                  <p className="carousel-desc">Công nghệ năng lượng ánh sáng độc quyền</p>
                  <p className="price">4.290.000₫</p>
                  <Link to="/product/3" className="btn-view-product">Xem Chi Tiết</Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Featured Grid Below Carousel */}
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.id}`} className="product-card featured" key={product.id}>
                <div className="product-image">
                  {product.discount > 0 && (
                    <span className="discount-badge">-{product.discount}%</span>
                  )}
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-brand">{product.brand}</span>
                  <h3>{product.name}</h3>
                  <div className="price-wrapper">
                    {product.discount > 0 && (
                      <span className="old-price">{formatPrice(product.price)}</span>
                    )}
                    <span className="price">
                      {formatPrice(product.price * (1 - product.discount / 100))}
                    </span>
                  </div>
                  <button className="btn-add-cart-small">Thêm vào giỏ</button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">Thương Hiệu Nổi Tiếng</h2>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <Link to={`/brands/${brand.toLowerCase()}`} className="brand-card" key={index}>
                <div className="brand-logo">{brand}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🆕</span>
              Hàng Mới Về
            </h2>
            <Link to="/products/new" className="btn-view-all">Xem Tất Cả →</Link>
          </div>
          
          <div className="products-scroll">
            {newArrivals.map((product) => (
              <Link to={`/product/${product.id}`} className="product-card scroll" key={product.id}>
                <div className="product-image">
                  <span className="new-badge">{product.badge}</span>
                  <img src={product.image} alt={product.name} />
                  <div className="quick-view">
                    <button className="btn-quick-view">Xem Nhanh</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="price">{formatPrice(product.price)}</span>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="review-count">(24)</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Tại Sao Chọn WatchStore?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Chính Hãng 100%</h3>
              <p>Cam kết sản phẩm chính hãng, có tem chống hàng giả và giấy bảo hành đầy đủ</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Bảo Hành Lâu Dài</h3>
              <p>Bảo hành chính hãng toàn quốc, hỗ trợ sửa chữa miễn phí trong thời gian bảo hành</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <h3>Giao Hàng Nhanh</h3>
              <p>Miễn phí vận chuyển toàn quốc cho đơn hàng trên 500.000₫, giao hàng trong 24h</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Giá Tốt Nhất</h3>
              <p>Cam kết giá tốt nhất thị trường, hoàn tiền nếu tìm thấy giá thấp hơn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Khách Hàng Nói Gì?</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Đồng hồ đẹp, chất lượng tốt. Shop tư vấn nhiệt tình, giao hàng nhanh. Sẽ tiếp tục ủng hộ!"</p>
              <div className="testimonial-author">
                <strong>Nguyễn Văn A</strong>
                <span>Hà Nội</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Mua đồng hồ Seiko, sản phẩm chính hãng, đóng gói cẩn thận. Rất hài lòng với dịch vụ!"</p>
              <div className="testimonial-author">
                <strong>Trần Thị B</strong>
                <span>TP. Hồ Chí Minh</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Shop uy tín, giá cả hợp lý. Mình đã mua 3 chiếc cho gia đình rồi. Highly recommended!"</p>
              <div className="testimonial-author">
                <strong>Lê Văn C</strong>
                <span>Đà Nẵng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Đăng Ký Nhận Tin</h2>
            <p>Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Nhập email của bạn" />
              <button>Đăng Ký</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
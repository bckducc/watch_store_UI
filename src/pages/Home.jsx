import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  const brands = ['Casio', 'Seiko', 'Citizen', 'Orient', 'Tissot', 'Omega', 'Carnival', 'Olym Pianus', 'Bonest Gatti', 'Fossil', 'Skagen', 'Michael Kors', 'Tag Heuer', 'AD'];
  
  const featuredProducts = [
    { id: 1, name: 'Carnival 40mm Nam 8907G-VT-D', price: 5430000, salePrice: 3801000, image: '/src/assets/watch.jpg', brand: 'Carnival', discount: 30, sold: 89, rating: 4.9 },
    { id: 2, name: 'Casio 45mm Nam AE-1200WHD-1A', price: 1506000, salePrice: 1204800, image: '/src/assets/watch.jpg', brand: 'Casio', discount: 20, sold: 1400, rating: 4.94 },
    { id: 3, name: 'Orient 40.8mm Nam RA-AR0001S30B', price: 13010000, salePrice: 10408000, image: '/src/assets/watch.jpg', brand: 'Orient', discount: 20, sold: 247, rating: 4.94 },
    { id: 4, name: 'Tissot 40mm Nam T137.407.11.041.00', price: 20610000, salePrice: 17900000, image: '/src/assets/watch.jpg', brand: 'Tissot', discount: 13, sold: 122, rating: 5.0 },
    { id: 5, name: 'Olym Pianus 42mm Nam OP990-45ADGS-GL-D', price: 8800000, salePrice: 6776000, image: '/src/assets/watch.jpg', brand: 'Olym Pianus', discount: 23, sold: 347, rating: 5.0 },
    { id: 6, name: 'Bonest Gatti 47mm Nam BG5605-A2', price: 10500000, salePrice: 7035000, image: '/src/assets/watch.jpg', brand: 'Bonest Gatti', discount: 33, sold: 33, rating: 4.8 },
  ];

  const newArrivals = [
    { id: 7, name: 'Casio MTP-1374L-1A', price: 2270000, salePrice: 1816000, image: '/src/assets/watch.jpg', sold: 1200, rating: 4.95, discount: 20 },
    { id: 8, name: 'Carnival 41mm Nam 8131G-CH-D', price: 6400000, salePrice: 4480000, image: '/src/assets/watch.jpg', sold: 2, rating: 4.7, discount: 30 },
    { id: 9, name: 'Orient 40.8mm Nam RA-AR0005Y30B', price: 10010000, salePrice: 8008000, image: '/src/assets/watch.jpg', sold: 234, rating: 4.92, discount: 20 },
    { id: 10, name: 'Tissot 35mm Nữ T050.207.37.017.04', price: 22600000, salePrice: 14800000, image: '/src/assets/watch.jpg', sold: 125, rating: 5.0, discount: 35 },
    { id: 11, name: 'Tissot 41mm Nam T086.408.22.036.00', price: 19000000, salePrice: 17800000, image: '/src/assets/watch.jpg', sold: 158, rating: 4.8, discount: 6 },
    { id: 12, name: 'Carnival 41mm Nam 8131G-CH-N', price: 6210000, salePrice: 4347000, image: '/src/assets/watch.jpg', sold: 54, rating: 4.9, discount: 30 },
  ];

  const sampleArticles = [
    { id: 1, title: 'Cập nhật giá đồng hồ Citizen Tsuyosa và sức hút thật sự phía sau', date: '11/11/2025', author: 'Giang Nguyễn', excerpt: 'Ra mắt từ năm 2022, Citizen Tsuyosa nhanh chóng trở thành hiện tượng trong phân khúc đồng hồ cơ dưới 500 USD...', image: '/src/assets/watch.jpg' },
    { id: 2, title: 'Top 70 đồng hồ nữ màu vàng được yêu thích nhất 2025', date: '05/10/2025', author: 'Minh Hạ', excerpt: 'Không cần quá nổi bật vẫn có thể thu hút ánh nhìn, đó chính là sức hút của đồng hồ màu vàng...', image: '/src/assets/watch.jpg' },
    { id: 3, title: 'Top 60+ đồng hồ nữ màu vàng hồng thời thượng', date: '20/09/2025', author: 'Lan Phương', excerpt: 'Đồng hồ nữ màu vàng hồng luôn khiến phái đẹp say mê bởi vẻ đẹp ngọt ngào...', image: '/src/assets/watch.jpg' },
    { id: 4, title: '65+ mẫu đồng hồ nữ màu trắng đẹp tinh khôi', date: '01/08/2025', author: 'Trung Kiên', excerpt: 'Không phô trương hay cầu kỳ, đồng hồ nữ màu trắng vẫn đủ sức thu hút mọi ánh nhìn...', image: '/src/assets/watch.jpg' },
    { id: 5, title: '[Bật mí] 50+ Đồng hồ Casio màu bạc đẹp, sang trọng', date: '15/07/2025', author: 'Hà Anh', excerpt: 'Trong giới phụ kiện, đồng hồ Casio màu bạc đại diện cho phong cách tối giản...', image: '/src/assets/watch.jpg' },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  const formatSold = (sold) => {
    if (sold >= 1000) {
      return (sold / 1000).toFixed(1) + 'k';
    }
    return sold;
  };

  return (
    <div className="home">
      <Header />

      {/* Main Banner Carousel */}
      <section className="main-carousel">
        <div className="container-fluid">
          <Carousel interval={4000} pause="hover" controls={true} indicators={true}>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Banner 1" />
              <div className="carousel-overlay">
                <div className="carousel-text">
                  <h2>Đồng Hồ Chính Hãng</h2>
                  <p>Uy tín - Chất lượng - Giá tốt</p>
                  <Link to="/products" className="btn-shop-now">Mua Ngay</Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Banner 2" />
              <div className="carousel-overlay">
                <div className="carousel-text">
                  <h2>Khuyến Mãi Lớn</h2>
                  <p>Giảm đến 35% các sản phẩm</p>
                  <Link to="/sale" className="btn-shop-now">Xem Ngay</Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/src/assets/watch.jpg" alt="Banner 3" />
              <div className="carousel-overlay">
                <div className="carousel-text">
                  <h2>Hàng Mới Về</h2>
                  <p>Bộ sưu tập mới nhất 2025</p>
                  <Link to="/new" className="btn-shop-now">Khám Phá</Link>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* Category Banners */}
      <section className="category-banners">
        <div className="container">
          <div className="banner-grid">
            <Link to="/nam" className="category-banner">
              <img src="/src/assets/watch.jpg" alt="Đồng hồ nam" />
              <div className="banner-text">
                <h3>ĐỒNG HỒ NAM</h3>
                <p>Mạnh mẽ & Sang trọng</p>
              </div>
            </Link>
            <Link to="/nu" className="category-banner">
              <img src="/src/assets/watch.jpg" alt="Đồng hồ nữ" />
              <div className="banner-text">
                <h3>ĐỒNG HỒ NỮ</h3>
                <p>Thanh lịch & Tinh tế</p>
              </div>
            </Link>
            <Link to="/couple" className="category-banner">
              <img src="/src/assets/watch.jpg" alt="Đồng hồ đôi" />
              <div className="banner-text">
                <h3>ĐỒNG HỒ ĐÔI</h3>
                <p>Gắn kết yêu thương</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hot Sale Products */}
      <section className="products-section hot-sale">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="fire-icon">🔥</span>
              SẢN PHẨM BÁN CHẠY
            </h2>
            <Link to="/products" className="view-all-link">Xem tất cả →</Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
                <div className="product-image">
                  <span className="discount-badge">-{product.discount}%</span>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="product-prices">
                    <span className="sale-price">{formatPrice(product.salePrice)}</span>
                    <span className="original-price">{formatPrice(product.price)}</span>
                  </div>
                  <div className="product-sold">
                    <span>• Đã bán {formatSold(product.sold)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title">THƯƠNG HIỆU NỔI BẬT</h2>
          <div className="brands-slider">
            {brands.map((brand, index) => (
              <Link to={`/brand/${brand.toLowerCase()}`} className="brand-item" key={index}>
                <div className="brand-box">
                  <span className="brand-name">{brand}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="products-section new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="new-icon">🆕</span>
              HÀNG MỚI VỀ
            </h2>
            <Link to="/new-arrivals" className="view-all-link">Xem tất cả →</Link>
          </div>

          <div className="products-grid">
            {newArrivals.map((product) => (
              <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
                <div className="product-image">
                  <span className="discount-badge">-{product.discount}%</span>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{product.rating}</span>
                  </div>
                  <div className="product-prices">
                    <span className="sale-price">{formatPrice(product.salePrice)}</span>
                    <span className="original-price">{formatPrice(product.price)}</span>
                  </div>
                  <div className="product-sold">
                    <span>• Đã bán {formatSold(product.sold)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News / Blog Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Tin tức & Kiến thức Đồng Hồ</h2>
          <div className="news-grid">
            <div className="main-article">
              <img src={sampleArticles[0].image} alt={sampleArticles[0].title} />
              <div className="article-body">
                <h3>{sampleArticles[0].title}</h3>
                <div className="meta">Ngày đăng: {sampleArticles[0].date} bởi {sampleArticles[0].author}</div>
                <p>{sampleArticles[0].excerpt}</p>
              </div>
            </div>

            <div className="side-articles">
              {sampleArticles.slice(1).map((a) => (
                <Link to={`/news/${a.id}`} className="side-article" key={a.id}>
                  <img src={a.image} alt={a.title} />
                  <div className="side-body">
                    <h4>{a.title}</h4>
                    <p className="side-excerpt">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="news-actions">
            <Link to="/news" className="btn-view-all">Xem thêm Tin tức</Link>
            <Link to="/knowledge" className="btn-view-all">Xem thêm Kiến thức</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">✓</div>
              <div className="feature-content">
                <h4>100% CHÍNH HÃNG</h4>
                <p>Cam kết hàng chính hãng</p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🛡️</div>
              <div className="feature-content">
                <h4>BẢO HÀNH TOÀN QUỐC</h4>
                <p>Bảo hành chính hãng</p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🚚</div>
              <div className="feature-content">
                <h4>MIỄN PHÍ VẬN CHUYỂN</h4>
                <p>Đơn hàng từ 500K</p>
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-icon">↻</div>
              <div className="feature-content">
                <h4>ĐỔI TRẢ DỄ DÀNG</h4>
                <p>Trong vòng 7 ngày</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
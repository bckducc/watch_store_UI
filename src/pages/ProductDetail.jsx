import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`);
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        setProduct(data);
        setMainImage(data.image || '/src/assets/watch.jpg');
      } catch (err) {
        // fallback to demo product if API not available
        const demo = {
          id,
          name: 'Demo Watch',
          brand: 'BCKDUC',
          price: 199,
          image: '/src/assets/watch.jpg',
          gallery: ['/src/assets/watch.jpg','/src/assets/watch.jpg'],
          description: 'Mô tả ngắn về sản phẩm. Chất lượng tốt, thiết kế tinh tế.'
        };
        setProduct(demo);
        setMainImage(demo.image);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return null;

  return (
    <div className="product-detail-page">
      <Header />

      <div className="product-detail-container">
        <div className="gallery">
          <div className="main-image">
            <img src={mainImage} alt={product.name} />
          </div>

          <div className="thumbs-row">
            <button className="thumb-nav">◀</button>
            <div className="thumbs">
              {(product.gallery || [product.image]).map((src, i) => (
                <button key={i} className={`thumb ${mainImage === src ? 'active' : ''}`} onClick={() => setMainImage(src)}>
                  <img src={src} alt={`${product.name} ${i}`} />
                </button>
              ))}
            </div>
            <button className="thumb-nav">▶</button>
          </div>
        </div>

        <div className="details">
          <div className="breadcrumb"><Link to="/products">Đồng hồ</Link> ▸ <span>{product.name}</span></div>
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-subline">
            <span className="sold">Đã bán 88</span>
            <span className="sku">Mã: {product.id}</span>
            <span className="fav">♥ Yêu thích</span>
          </div>

          <div className="price-row">
            <div className="price-left">
              <div className="price-current">{new Intl.NumberFormat('vi-VN').format(product.price)}₫</div>
              <div className="price-old">5.430.000₫</div>
              <div className="price-discount">-30%</div>
            </div>
            <div className="availability">Còn hàng</div>
          </div>

          <div className="info-and-cta">
            <div className="info-box">
              <ul>
                <li>Được đảm bảo chất lượng, cam kết 100% sản phẩm chính hãng</li>
                <li>Đổi trả trong 3 ngày nếu có lỗi nhà sản xuất</li>
                <li>Miễn phí vận chuyển toàn quốc</li>
              </ul>
            </div>

            <div className="cta-block">
              <div className="qty-cta">
                <div className="qty">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="btn-add">Thêm vào giỏ</button>
                <button className="btn-buy">MUA NGAY</button>
              </div>

              <div className="shipping">
                <strong>Thông tin vận chuyển</strong>
                <div className="shipping-note">Giao hàng trong 1-3 ngày với phí thấp</div>
              </div>
            </div>
          </div>

          <div className="media-row">
            <div className="video-thumb">Video</div>
            <div className="store-photos">
              {[...Array(4)].map((_, i) => (
                <img key={i} src="/src/assets/watch.jpg" alt={`store ${i}`} />
              ))}
            </div>
          </div>

          <div className="pd-description">
            <h3>Chi tiết sản phẩm</h3>
            <p>{product.description || 'Không có mô tả chi tiết.'}</p>
          </div>

          <div className="related">
            <h4>Có thể bạn cũng thích</h4>
            <div className="related-grid">
              {[...Array(4)].map((_, i) => (
                <Link className="related-card" to={`/product/${i+2}`} key={i}>
                  <img src="/src/assets/watch.jpg" alt={`rel ${i}`} />
                  <div>Watch {i+1}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;

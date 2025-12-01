import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('popular');
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const sampleProducts = [
    { 
      id: 1, 
      name: 'Casio MTP-1374L-1AVDF', 
      originalPrice: '₫2,270,000', 
      salePrice: '₫1,816,000',
      discount: '-20%',
      image: '/src/assets/watch.jpg',
      category: 'classic'
    },
    { 
      id: 2, 
      name: 'Citizen NH8350-83L', 
      originalPrice: '₫6,210,000', 
      salePrice: '₫4,533,300',
      discount: '-27%',
      image: '/src/assets/watch.jpg',
      category: 'luxury'
    },
    { 
      id: 3, 
      name: 'Orient FAC00002B0', 
      originalPrice: '₫5,990,000', 
      salePrice: '₫4,372,700',
      discount: '-27%',
      image: '/src/assets/watch.jpg',
      category: 'sport'
    },
    { 
      id: 4, 
      name: 'Seiko SSA231K1', 
      originalPrice: '₫11,510,000', 
      salePrice: '₫9,208,000',
      discount: '-20%',
      image: '/src/assets/watch.jpg',
      category: 'luxury'
    },
    { 
      id: 5, 
      name: 'Tissot T035.407.16.051.00', 
      originalPrice: '₫14,500,000', 
      salePrice: '₫8,500,000',
      discount: '-41%',
      image: '/src/assets/watch.jpg',
      category: 'luxury'
    },
    { 
      id: 6, 
      name: 'G-Shock GA-2100-1A1DR', 
      originalPrice: '₫3,400,000', 
      salePrice: '₫2,618,000',
      discount: '-23%',
      image: '/src/assets/watch.jpg',
      category: 'sport'
    },
    { 
      id: 7, 
      name: 'Daniel Klein DK.1.12650-1', 
      originalPrice: '₫1,506,000', 
      salePrice: '₫1,204,800',
      discount: '-20%',
      image: '/src/assets/watch.jpg',
      category: 'classic'
    },
    { 
      id: 8, 
      name: 'Fossil FS5453', 
      originalPrice: '₫4,185,000', 
      salePrice: '₫3,348,000',
      discount: '-20%',
      image: '/src/assets/watch.jpg',
      category: 'smart'
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        const data = response.data;
        if (Array.isArray(data) && data.length) {
          setProducts(data);
        } else {
          setProducts(sampleProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(sampleProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.salePrice.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.salePrice.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => {
        const priceA = parseInt(a.salePrice.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.salePrice.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      });
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  if (loading) {
    return (
      <div className="product-page">
        <Header />
        <div className="product-list" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Đang tải sản phẩm...</h2>
        </div>
      </div>
    );
  }

  const categories = [
    { value: 'all', label: 'Tất cả' },
    { value: 'classic', label: 'Đồng hồ cổ điển' },
    { value: 'sport', label: 'Đồng hồ thể thao' },
    { value: 'smart', label: 'Đồng hồ thông minh' },
    { value: 'luxury', label: 'Đồng hồ cao cấp' }
  ];

  const recentlyViewed = [
    { id: 1, name: 'Carnival 40mm Nam', price: '₫3,963,900', image: '/src/assets/watch.jpg' },
    { id: 2, name: 'Casio 41.5mm Nam', price: '₫710,400', image: '/src/assets/watch.jpg' },
    { id: 3, name: 'Citizen 40mm Nam', price: '₫8,900,000', image: '/src/assets/watch.jpg' },
  ];

  const openQuickView = (product) => {
    alert(`Quick View: ${product.name}`); // Replace with modal implementation
  };

  return (
    <div className="product-page product-list">
      <Header />
      <div className="recently-viewed">
        <h2>Sản Phẩm Bạn Đã Xem Gần Đây</h2>
        <div className="recent-products">
          {recentlyViewed.map((product) => (
            <div className="recent-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p className="recent-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="filters sticky">
        <input
          type="text"
          className="search-bar"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <Link to={`/product/${result.id}`} className="search-result-item" key={result.id}>
                <img src={result.image} alt={result.name} />
                <div>
                  <p>{result.name}</p>
                  <p className="search-result-price">{result.salePrice}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
        <button className="filter-btn">Đồng hồ nam</button>
        <button className="filter-btn">Đồng hồ nữ</button>
        <button className="filter-btn">Giá: Dưới 1 triệu</button>
        <button className="filter-btn">Giá: 1-3 triệu</button>
        <button className="filter-btn">Giá: 3-6 triệu</button>
        <button className="filter-btn">Giá: 6-9 triệu</button>
        <button className="filter-btn">Giá: Trên 9 triệu</button>
        <select 
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="featured">Nổi bật</option>
          <option value="best-sellers">Bán chạy nhất</option>
          <option value="discount">Giảm giá</option>
          <option value="price-asc">Giá: Thấp đến cao</option>
          <option value="price-desc">Giá: Cao đến thấp</option>
        </select>
      </div>
      {/* Danh sách sản phẩm không bị ảnh hưởng */}
      <h2>Sản Phẩm Của Chúng Tôi</h2>
      <div className="products masonry">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="discount-badge">-{product.discount}%</span>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.salePrice}</p>
              <p className="original-price">₫{product.originalPrice}</p>
              <p className="product-rating">⭐ {product.rating} | Đã bán: {product.sales}</p>
              <button className="quick-view-btn" onClick={() => openQuickView(product)}>Xem nhanh</button>
              <button className="wishlist-btn">Yêu thích</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn">Đầu tiên</button>
        <button className="page-btn">Trước</button>
        <span className="page-numbers">1 2 3</span>
        <button className="page-btn">Tiếp</button>
        <button className="page-btn">Cuối cùng</button>
      </div>
      <div className="floating-buttons">
        <button className="chat-btn">Chat</button>
        <button className="support-btn">Hỗ trợ</button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
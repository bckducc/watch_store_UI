import React, { useState } from "react";
import "./Header.css";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  const sampleProducts = [
    { id: 1, name: 'Casio MTP-1374L-1AVDF', image: '/src/assets/watch.jpg' },
    { id: 2, name: 'Citizen NH8350-83L', image: '/src/assets/watch.jpg' },
    { id: 3, name: 'Orient FAC00002B0', image: '/src/assets/watch.jpg' },
    { id: 4, name: 'G-Shock GA-2100-1A1DR', image: '/src/assets/watch.jpg' },
  ];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const results = sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">BCKDUCWATCH</Link>
        </div>

        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          <Link className={location.pathname === '/trend' ? 'active' : ''} to="/trend">Xu Hướng 2025</Link>
          <Link className={location.pathname.startsWith('/products') ? 'active' : ''} to="/products">Đồng Hồ</Link>
          <Link className={location.pathname === '/men' ? 'active' : ''} to="/men">Nam</Link>
          <Link className={location.pathname === '/women' ? 'active' : ''} to="/women">Nữ</Link>
          <Link className={location.pathname === '/accessories' ? 'active' : ''} to="/accessories">Phụ Kiện</Link>
        </nav>

        <div className="actions">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Tìm sản phẩm, thương hiệu..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((result) => (
                  <Link to={`/product/${result.id}`} className="search-result-item" key={result.id}>
                    <img src={result.image} alt={result.name} />
                    <p>{result.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="icon-group">
            <Link to="/favorites" className="icon-btn" title="Yêu thích">
              <FiHeart />
            </Link>

            <Link to="/cart" className="icon-btn cart" title="Giỏ hàng">
              <FiShoppingCart />
              <span className="badge">0</span>
            </Link>

            <button className="mobile-toggle" onClick={() => setMobileOpen(s => !s)} aria-label="Toggle menu">
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

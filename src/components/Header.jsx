import React, { useState } from "react";
import "./Header.css";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
            <input type="text" placeholder="Tìm sản phẩm, thương hiệu..." />
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

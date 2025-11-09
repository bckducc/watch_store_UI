import React from "react";
import "./Header.css";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">BCKDUCWATCH</a>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/trend">Xu Hướng 2025</Link>
          <Link to="/products">Đồng Hồ</Link>
          <Link to="/men">Nam</Link>
          <Link to="/women">Nữ</Link>
          <Link to="/accessories">Phụ Kiện</Link>
        </nav>

        {/* Actions */}
        <div className="actions">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Tìm là thấy..." />
          </div>

          <div className="icon-group">
            <Link to="/favorites" className="icon-btn" title="Yêu thích">
              <FiHeart />
            </Link>
            <Link to="/cart" className="icon-btn" title="Giỏ hàng">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

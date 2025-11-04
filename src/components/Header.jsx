import React from "react";
import "./Header.css";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">WATCHSTORE.VN</a>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="/">Xu Hướng 2025</a>
          <a href="/products">Đồng Hồ</a>
          <a href="/">Nam</a>
          <a href="/">Nữ</a>
          <a href="/">Phụ Kiện</a>
        </nav>

        {/* Actions */}
        <div className="actions">
          <div className="search-box">
            <input type="text" placeholder="Tìm là thấy" />
            <FiSearch className="search-icon" />
          </div>

          <div className="icon-group">
            <a href="/" className="icon-btn" title="Yêu thích">
              <FiHeart />
            </a>
            <a href="/cart" className="icon-btn" title="Giỏ hàng">
              <FiShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

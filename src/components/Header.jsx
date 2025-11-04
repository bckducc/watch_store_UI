import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">WatchStore.vn</div>
      <nav className="nav">
        <a href="/">Xu Hướng 2025</a>
        <a href="/products">Đồng Hồ</a>
        <a href="/">Nam</a>
        <a href="/">Nữ</a>
        <a href="/">Phụ Kiện</a>
      </nav>
      <div className="actions">
        <input type="text" placeholder="Tìm là thấy" className="search" />
        <a href="/cart" className="cart">🛒</a>
      </div>
    </header>
  );
};

export default Header;
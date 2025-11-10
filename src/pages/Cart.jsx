import React, { useState } from 'react';
import './Cart.css';
import Header from '../components/Header';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Classic Watch', 
      price: 199, 
      quantity: 1,
      image: '/src/assets/watch.jpg',
      brand: 'Casio'
    },
    { 
      id: 2, 
      name: 'Modern Watch', 
      price: 249, 
      quantity: 2,
      image: '/src/assets/watch.jpg',
      brand: 'Seiko'
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 10;
  const tax = subtotal * 0.1;
  const totalPrice = subtotal + shipping + tax;

  return (

    <div className="cart-page">
      <Header />

      <div className="cart-container">
        <div className="cart-header container">
          <h2 className="section-title">Giỏ Hàng Của Bạn</h2>
          <p className="item-count">{cartItems.length} sản phẩm</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Giỏ hàng trống</h2>
            <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
            <button className="btn-continue-shopping">Tiếp tục mua sắm</button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <div className="item-brand">{item.brand}</div>
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-price-mobile">${item.price}</div>
                  </div>

                  <div className="item-price">
                    <span className="price-label">Đơn giá</span>
                    <span className="price-value">${item.price}</span>
                  </div>

                  <div className="item-quantity">
                    <span className="quantity-label">Số lượng</span>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="item-total">
                    <span className="total-label">Tổng</span>
                    <span className="total-value">${item.price * item.quantity}</span>
                  </div>

                  <button 
                    className="btn-remove"
                    onClick={() => handleRemove(item.id)}
                    title="Xóa sản phẩm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h2 className="summary-title">Tóm Tắt Đơn Hàng</h2>
                
                <div className="summary-row">
                  <span>Tạm tính</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Phí vận chuyển</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Thuế (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-total">
                  <span>Tổng cộng</span>
                  <span className="total-amount">${totalPrice.toFixed(2)}</span>
                </div>

                <button className="btn-checkout">
                  Thanh Toán
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                <button className="btn-continue">
                  Tiếp tục mua sắm
                </button>
              
                <div className="payment-methods">
                  <span className="payment-label">Chấp nhận thanh toán</span>
                  <div className="payment-icons">
                    <span className="payment-icon">💳</span>
                    <span className="payment-icon">💰</span>
                    <span className="payment-icon">🏦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
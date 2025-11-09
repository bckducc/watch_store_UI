import React from 'react';
import './Footer.css';
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>VỀ CHÚNG TÔI</h4>
          <ul>
            <li>Giới thiệu về WatchStore</li>
            <li>Phản ánh - Khiếu nại</li>
            <li>Chứng nhận đại lý</li>
            <li>Tin tức công ty</li>
            <li>Top list đồng hồ</li>
            <li>Kiến thức đồng hồ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CHÍNH SÁCH CHUNG</h4>
          <ul>
            <li>Điều khoản thanh toán</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách đổi trả</li>
            <li>Thông tin các trang TMĐT</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CỬA HÀNG MIỀN BẮC</h4>
          <ul className="stores">
            <li>97 Trần Đại Nghĩa, P.Bạch Mai, Hà Nội</li>
            <li>58 Trần Đăng Ninh, P.Cầu Giấy, Hà Nội</li>
          </ul>

          <h4 style={{marginTop:18}}>CỬA HÀNG MIỀN TRUNG</h4>
          <ul className="stores">
            <li>339 Lê Duẩn, P.Thanh Khê, Đà Nẵng</li>
          </ul>

          <h4 style={{marginTop:18}}>CỬA HÀNG MIỀN NAM</h4>
          <ul className="stores">
            <li>642 CMT8, P.Thủ Dầu Một, HCM (Bình Dương)</li>
            <li>90 Lê Văn Sỹ, P.Phú Nhuận, HCM</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>LIÊN HỆ HỖ TRỢ</h4>
          <p>Hotline 1: 093 189 2222</p>
          <p>Hotline 2: 097 189 3333</p>
          <p>Hotline 3: 096 139 5555</p>
          <p style={{marginTop:8}}>Email: info@watchstore.vn</p>

          <h4 style={{marginTop:18}}>THEO DÕI CHÚNG TÔI TẠI</h4>
          <div className="socials">
            <a aria-label="facebook" href="#"><FaFacebookF /></a>
            <a aria-label="youtube" href="#"><FaYoutube /></a>
            <a aria-label="tiktok" href="#"><FaTiktok /></a>
            <a aria-label="instagram" href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          ©2020-2025 by WatchStore.vn. Hotline: 093.189.2222 - Giấy chứng nhận kinh doanh số: HKD WATCHSTORE QUANG TRUNG - Mã số thuế: 41M8057473.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

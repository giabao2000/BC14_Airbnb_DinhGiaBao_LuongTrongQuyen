import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <footer className="p-l-r-80">
      <div className="footer-content row">
        <div className="footer-item col-lg-3 col-md-6 col-sm-12">
          <div className="logo">
            <i className="fab fa-jedi-order"></i>
            <NavLink to="/">Airbnb</NavLink>
          </div>

          <div className="footer-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
            natus facilis! Earum repellendus inventore eaque dignissimos
            reiciendis, commodi voluptatum, temporibus nulla sit veniam
            architecto nam. Soluta, cupiditate? Placeat, sit animi.
          </div>

          <div className="social-list">
            <div className="social-item">
              <NavLink to="#">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
            </div>

            <div className="social-item">
              <NavLink to="#">
                <i className="fab fa-instagram"></i>
              </NavLink>
            </div>

            <div className="social-item">
              <NavLink to="#">
                <i className="fab fa-twitter"></i>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="footer-item col-lg-3 col-md-6 col-sm-12">
          <ul className="footer-category">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="#">About</NavLink>
            </li>

            <li>
              <NavLink to="#">Blog</NavLink>
            </li>

            <li>
              <NavLink to="#">Rooms</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-item col-lg-3 col-md-6 col-sm-12">
          <ul className="footer-category">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="#">About</NavLink>
            </li>

            <li>
              <NavLink to="#">Blog</NavLink>
            </li>

            <li>
              <NavLink to="#">Rooms</NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <h5 className="footer-title">Contact</h5>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              459 Sư Vạn Hạnh, Quận 10, TP HCM
            </div>

            <div className="footer-contact-item">
              <i className="fas fa-mobile-alt"></i>
              Hotline: 096.105.1014 – 077.886.1911
            </div>

            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              Email: Cybersoft@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

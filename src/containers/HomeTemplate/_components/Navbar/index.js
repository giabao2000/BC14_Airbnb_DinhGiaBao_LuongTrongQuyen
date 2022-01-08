import { React, useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import $ from "jquery";
import { actLogout } from "../../LoginPage/modules/Login/actions";

function Navbar(props) {
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();

  const user = JSON.parse(
    localStorage.getItem("UserClient") || localStorage.getItem("UserAdmin")
  )?.user;

  const handleClickMenuToggle = () => {
    $(".menu-toggle").on("click", () => {
      $(".nav-list").toggleClass("active");
    });
  };

  const handleOnScroll = () => {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      handleOnScroll();
    };

    handleClickMenuToggle();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      window.removeEventListener("click", handleClickMenuToggle);
    };
  }, []);

  const renderBtn = () => {
    if (user) {
      return (
        <button
          className="btn btn-style"
          onClick={() => {
            dispatch(actLogout(props.history));
          }}
        >
          Đăng Xuất
        </button>
      );
    }

    return (
      <NavLink to="/login" className="btn btn-style">
        Đăng Nhập
      </NavLink>
    );
  };

  return (
    <header>
      <div
        className="nav-wrapper"
        style={{
          height: scrolling ? "80px" : "100px",
        }}
      >
        <div className="logo">
          <i className="fab fa-jedi-order"></i>
          <NavLink to="/">Airbnb</NavLink>
        </div>

        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>

        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="#">Blog</NavLink>
            </li>

            {user && (
              <li className="nav-item welcome-user">Xin chào {user.name}</li>
            )}

            <li>{renderBtn()}</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Navbar);

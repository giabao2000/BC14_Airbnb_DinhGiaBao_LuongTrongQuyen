import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/style.css";
import { useFormRegister, useFormLogin } from "./useForm";
import validateRegister from "./validateRegister";
import validateLogin from "./validateLogin";

export default function LoginPage(props) {
  const { error } = useSelector((state) => state.loginReducer);
  let dataRegister = useSelector((state) => state.registerReducer.data);
  let errorRegister = useSelector((state) => state.registerReducer.error);

  const { handleOnChangeRegister, handleSubmitRegister, values, errors } =
    useFormRegister(validateRegister);

  const { handleOnChangeLogin, handleSubmitLogin, errorsLogin } = useFormLogin(
    validateLogin,
    props.history
  );

  const handleLoginClick = () => {
    document.querySelector("#btn-active").style.left = "0";
    document.querySelector("#register").style.left = "450px";
    document.querySelector("#login").style.left = "50px";
    document.querySelector(".login-active").style.color = "#fff";
    document.querySelector(".register-active").style.color = "#000";
  };

  const handleRegisterClick = () => {
    document.querySelector("#btn-active").style.left = "130px";
    document.querySelector("#register").style.left = "50px";
    document.querySelector("#login").style.left = "-400px";
    document.querySelector(".login-active").style.color = "#000";
    document.querySelector(".register-active").style.color = "#fff";
  };

  return (
    <div className="login-home">
      <div className="form-box">
        {/* button box */}
        <div className="button-box">
          <div id="btn-active"></div>

          <button
            type="button"
            className="toggle-btn login-active"
            onClick={handleLoginClick}
          >
            Login
          </button>

          <button
            type="button"
            className="toggle-btn register-active"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>

        {/* Form Login */}
        <form id="login" className="input-group" onSubmit={handleSubmitLogin}>
          {error && (
            <div className="error text-center">
              Tài khoản hoặc mật khẩu không hợp lệ!
            </div>
          )}

          <div>
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              className="input-field"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleOnChangeLogin}
            />
          </div>

          {errorsLogin.email && (
            <div className="error d-flex justify-content-center">
              {errorsLogin.email}
            </div>
          )}

          <div>
            <i className="fas fa-key"></i>
            <input
              type="password"
              className="input-field"
              name="password"
              required
              placeholder="Enter your password"
              onChange={handleOnChangeLogin}
            />
          </div>

          {errorsLogin.password && (
            <div className="error d-flex justify-content-center">
              {errorsLogin.password}
            </div>
          )}

          <button type="submit" className="submit-btn mt-3">
            Login
          </button>

          <div className="back-home mt-3">
            <i className="fas fa-angle-double-left"></i>
            <NavLink to="/">Quay về trang chủ</NavLink>
          </div>
        </form>

        {/* Form Register */}
        <form
          id="register"
          className="input-group"
          onSubmit={handleSubmitRegister}
        >
          {dataRegister && (
            <div className="success d-flex justify-content-center">
              Register success!
            </div>
          )}

          {errorRegister && (
            <div className="error d-flex justify-content-center">
              Register Failed !
            </div>
          )}

          <div>
            <i className="fas fa-question-circle"></i>
            <input
              type="input"
              className="input-field"
              name="name"
              placeholder="Enter your fullname"
              value={dataRegister ? "" : values.name}
              onChange={handleOnChangeRegister}
            />
          </div>

          {errors.name && <div className="error">{errors.name}</div>}

          <div>
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              className="input-field"
              name="email"
              placeholder="Enter your email"
              value={dataRegister ? "" : values.email}
              onChange={handleOnChangeRegister}
            />
          </div>

          {errors.email && <div className="error">{errors.email}</div>}

          <div>
            <i className="fas fa-key"></i>
            <input
              type="password"
              className="input-field"
              name="password"
              placeholder="Enter your password"
              value={dataRegister ? "" : values.password}
              onChange={handleOnChangeRegister}
            />
          </div>

          {errors.password && <div className="error">{errors.password}</div>}

          <div>
            <i className="fas fa-phone"></i>
            <input
              type="text"
              className="input-field"
              name="phone"
              placeholder="Enter your phone"
              value={dataRegister ? "" : values.phone}
              onChange={handleOnChangeRegister}
            />
          </div>

          {errors.phone && <div className="error">{errors.phone}</div>}

          <div>
            <i className="fas fa-calendar-alt"></i>
            <input
              type="text"
              className="input-field"
              name="birthday"
              placeholder="Enter your birthday MM-DD-YYYY"
              value={dataRegister ? "" : values.birthday}
              onChange={handleOnChangeRegister}
            />
          </div>

          {errors.birthday && <div className="error">{errors.birthday}</div>}

          <div>
            <i className="fas fa-venus-mars"></i>
            <input
              type="radio"
              name="gender"
              className="gender"
              value="true"
              checked={values.gender}
              required
              onChange={handleOnChangeRegister}
            />
            Male
            <input
              type="radio"
              name="gender"
              className="gender"
              value="false"
              required
              onChange={handleOnChangeRegister}
            />
            Female
          </div>

          <div>
            <i className="fas fa-address-card"></i>
            <input
              type="text"
              className="input-field"
              name="address"
              placeholder="Enter your address"
              value={dataRegister ? "" : values.address}
              onChange={handleOnChangeRegister}
            />
          </div>

          {errors.address && <div className="error">{errors.address}</div>}

          <button type="submit" className="submit-btn mt-3 mb-3">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/style.css";
import { actDetailRoomApi } from "./modules/detail/actions";
import { actOrderRoomApi, actOrderRoomReset } from "./modules/order/actions";

export default function DetailPage(props) {
  const dispatch = useDispatch();

  const [orderInfo, setOrderInfo] = useState({
    roomId: props.match.params.id,
    checkIn: "",
    checkOut: "",
  });

  const [errorDate, setErrorDate] = useState({
    errorCheckIn: "",
    errorCheckOut: "",
  });

  const { data } = useSelector((state) => state.detailRoomReducer);
  let errorOrder = useSelector((state) => state.orderRoomReducer.error);
  let dataOrder = useSelector((state) => state.orderRoomReducer.data);

  useEffect(() => {
    // Call API detail room
    dispatch(actDetailRoomApi(props.match.params.id));

    // Cleanup function
    return () => {
      dispatch(actOrderRoomReset());

      setOrderInfo({
        roomId: "",
        checkIn: "",
        checkOut: "",
      });
    };
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    check_date(name, value);

    setOrderInfo({
      ...orderInfo,
      [name]: value,
    });
  };

  const check_date = (name, date_input) => {
    let date_regex = /^(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])-(19|20)\d{2}$/;

    if (!date_regex.test(date_input) && name === "checkIn") {
      setErrorDate({
        ...errorDate,
        errorCheckIn: "Vui lòng nhập ngày theo định dạng MM-DD-YYYY!",
      });

      return false;
    } else if (date_regex.test(date_input) && name === "checkIn") {
      setErrorDate({
        ...errorDate,
        errorCheckIn: "",
      });

      return true;
    }

    if (!date_regex.test(date_input) && name === "checkOut") {
      setErrorDate({
        ...errorDate,
        errorCheckOut: "Vui lòng nhập ngày theo định dạng MM-DD-YYYY!",
      });

      return false;
    } else if (date_regex.test(date_input) && name === "checkOut") {
      setErrorDate({
        ...errorDate,
        errorCheckOut: "",
      });

      return true;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!errorDate) {
      dispatch(actOrderRoomApi(orderInfo));
    }
  };

  const calculate_total_price = (price) => {
    if (orderInfo.checkIn && orderInfo.checkOut) {
      let checkIn = new Date(orderInfo.checkIn);
      let checkOut = new Date(orderInfo.checkOut);

      let total_price = 0;

      if (checkIn.getDate() < checkOut.getDate()) {
        if (checkIn.getMonth() === checkOut.getMonth()) {
          total_price = price * (checkOut.getDate() - checkIn.getDate());
          return (
            <div className="total-price">
              Tổng: {total_price.toLocaleString()} VND
            </div>
          );
        }

        if (checkIn.getMonth() < checkOut.getMonth()) {
          let count_day =
            (checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24);

          total_price = price * count_day;

          return (
            <div className="total-price">
              Tổng: {total_price.toLocaleString()} VND
            </div>
          );
        }

        if (
          checkIn.getMonth() > checkOut.getMonth() &&
          checkIn.getFullYear() >= checkOut.getFullYear()
        ) {
          return (
            <div className="total-price">
              Thời gian nhận phòng phải nhỏ hơn thời gian trả phòng!
            </div>
          );
        }
      }

      if (checkIn.getDate() > checkOut.getDate()) {
        if (
          (checkIn.getMonth() === checkOut.getMonth() ||
            checkIn.getMonth() > checkOut.getMonth()) &&
          checkIn.getFullYear() >= checkOut.getFullYear()
        ) {
          return (
            <div className="total-price">
              Thời gian nhận phòng phải nhỏ hơn thời gian trả phòng!
            </div>
          );
        }

        if (
          checkIn.getMonth() < checkOut.getMonth() &&
          checkIn.getFullYear() <= checkOut.getFullYear()
        ) {
          let count_day =
            (checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24);

          total_price = price * count_day;

          return (
            <div className="total-price">
              Tổng: {total_price.toLocaleString()} VND
            </div>
          );
        }
      }
    }
  };

  return (
    <div className="pt-100 detail-wrapper">
      <h2 className="text-center mt-4">THÔNG TIN CHI TIẾT</h2>

      <div className="container">
        <h3 className="mt-4">
          <i className="fab fa-jedi-order"></i> {data?.name}
        </h3>

        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>

        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>
            {data?.name}, {data?.locationId?.province},{" "}
            {data?.locationId?.country}
          </span>
        </div>

        <div className="row info-wrapper">
          <div className="detail-left col-lg-6 col-md-12 col-sm-12">
            <div className="detail-left-img">
              <img src={data?.image} alt={data?.image} />
            </div>
          </div>

          <div className="detail-right col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              <div className="detail-right-img col-lg-6 col-md-6 col-sm-12">
                <img
                  src="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988807493Wl/178964092.jpg"
                  alt="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988807493Wl/178964092.jpg"
                />
              </div>

              <div className="detail-right-img col-lg-6 col-md-6 col-sm-12">
                <img
                  src="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988807508ef/178962865.jpg"
                  alt="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988807508ef/178962865.jpg"
                />
              </div>

              <div className="detail-right-img col-lg-6 col-md-6 col-sm-12">
                <img
                  src="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988854514PK/171409520.jpg"
                  alt="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988854514PK/171409520.jpg"
                />
              </div>

              <div className="detail-right-img col-lg-6 col-md-6 col-sm-12">
                <img
                  src="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988854935nD/170120402.jpg"
                  alt="https://tripi.vn/cdn-cgi/image/width=1280,height=1280/https://storage.googleapis.com/hms_prod/photo/img/1616988854935nD/170120402.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-wrapper row mt-3">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="room-detail-info">
              <span>
                <i className="fas fa-user"></i>
                Số lượng: {data?.guests} người
              </span>

              <span>
                <i className="far fa-money-bill-alt"></i>
                Giá: {data?.price.toLocaleString()} VND
              </span>
            </div>

            <div className="room-detail-info">
              <span>
                <i className="fas fa-tv"></i>
                TV với truyền hình cáp
              </span>

              <span>
                <i className="fas fa-dumbbell"></i>
                Phòng GYM
              </span>
            </div>

            <div className="room-detail-info">
              <span>
                <i className="fas fa-wifi"></i>
                Wifi tốc độ cao
              </span>

              <span>
                <i className="fas fa-swimmer"></i>
                Hồ bơi sạch đẹp
              </span>
            </div>

            <div className="detail-description">{data?.description}</div>
          </div>

          <div className="order-right col-lg-6 col-md-12 col-sm-12">
            <div className="search-item">
              <h5 className="search-title">
                <i className="fas fa-hotel"></i>
                Nhận Phòng
              </h5>
              <input
                type="input"
                placeholder="Thêm ngày MM-DD-YYYY"
                name="checkIn"
                onChange={handleOnChange}
              />
            </div>

            {errorDate.errorCheckIn && (
              <div className="total-price mb-3">{errorDate.errorCheckIn}</div>
            )}

            <div className="search-item">
              <h5 className="search-title">
                <i className="fas fa-paper-plane"></i> Trả Phòng
              </h5>
              <input
                type="input"
                placeholder="Thêm ngày MM-DD-YYYY"
                name="checkOut"
                onChange={handleOnChange}
              />
            </div>

            {errorDate.errorCheckOut && (
              <div className="total-price mb-3">{errorDate.errorCheckOut}</div>
            )}

            {errorOrder && (
              <div className="error d-flex justify-content-center">
                Đặt phòng thất bại!
              </div>
            )}

            {dataOrder && (
              <div className="success d-flex justify-content-center">
                Đặt phòng thành công!
              </div>
            )}

            {calculate_total_price(data?.price)}

            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-style" onClick={handleOnSubmit}>
                Đặt Phòng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actListRoom } from "./modules/actions";
import "./css/style.css";

export default function ListRoomPage(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.listRoomReducer);

  useEffect(() => {
    // Call API Get List Room
    dispatch(actListRoom(props.match.params.id));
  }, []);

  const handleOnClick = (id) => {
    if (
      localStorage.getItem("UserClient") ||
      localStorage.getItem("UserAdmin")
    ) {
      // Đã login
      props.history.replace(`/detail/${id}`);
      return;
    }

    // Chưa login
    props.history.replace("/login");
  };

  const renderListRoom = () => {
    return data?.map((room, index) => {
      return (
        <div className="room-item" key={index}>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="room-img">
              <img src={room?.image} alt={room?.image} />
            </div>
          </div>

          <div className="room-info col-lg-8 col-md-12 col-sm-12">
            <div className="room-name">{room?.name}</div>
            <div>
              <i className="fas fa-user"></i>
              Số lượng: {room?.guests} người
            </div>
            <div>
              <i className="far fa-money-bill-alt"></i>
              Giá: {room?.price.toLocaleString()} VND
            </div>
            <div>
              <i className="far fa-check-circle"></i>
              Tiện ích: Máy Sấy - Thang Máy - Wifi - GYM
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              Địa điểm: {room?.locationId?.name}, {room?.locationId?.province},{" "}
              {room?.locationId?.country}
            </div>

            <div className="btn-detail">
              <button
                className="btn btn-style"
                onClick={() => handleOnClick(room?._id)}
              >
                Chi Tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="room-wrapper pt-100">
      <h3>DANH SÁCH PHÒNG</h3>

      <div className="container">
        <div className="room-list row">{renderListRoom()}</div>
      </div>
    </div>
  );
}

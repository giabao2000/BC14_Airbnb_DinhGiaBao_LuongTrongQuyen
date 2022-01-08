import { React, useEffect, useState } from "react";
import "./css/style.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actListPlace } from "./modules/actions";

export default function BannerComponent() {
  const { data } = useSelector((state) => state.listPlaceReducer);
  const [places, setPlaces] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // Call API get list Place
    dispatch(actListPlace());
  }, []);

  const handleOnChange = (e) => {
    let currentPlace = e.target.value;

    const result = data?.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(currentPlace.trim().toLowerCase());
    });

    if (currentPlace) {
      setPlaces(result);
      return;
    }

    setPlaces([]);
  };

  const renderHistorySearch = () => {
    return places?.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={`/list-room/${item._id}`}>
            <i className="fas fa-map-marker-alt"></i>
            {item.name}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className="banner">
      <div className="overlay"></div>

      <div className="search container">
        <div className="search-item">
          <h5 className="search-title">
            <i className="fas fa-map-marker-alt"></i>
            Địa Điểm
          </h5>
          <input
            type="search"
            placeholder="Bạn sắp đi đâu?"
            onChange={handleOnChange}
          />
        </div>

        <div className="history-search">
          <ul>{places ? renderHistorySearch() : ""}</ul>
        </div>

        <div className="search-item">
          <h5 className="search-title">
            <i className="fas fa-hotel"></i>
            Nhận Phòng
          </h5>
          <input type="search" placeholder="Thêm ngày" />
        </div>

        <div className="search-item">
          <h5 className="search-title">
            <i className="fas fa-paper-plane"></i> Trả Phòng
          </h5>
          <input type="search" placeholder="Thêm ngày" />
        </div>

        <div className="search-item">
          <h5 className="search-title">
            <i className="fas fa-user"></i> Khách
          </h5>
          <input type="search" placeholder="Thêm khách" />
        </div>
      </div>
    </div>
  );
}

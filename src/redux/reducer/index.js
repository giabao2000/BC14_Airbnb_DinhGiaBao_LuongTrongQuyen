import { combineReducers } from "redux";
import listRoomReducer from "../../containers/HomeTemplate/ListRoomPage/modules/reducer";
import listPlaceReducer from "../../containers/HomeTemplate/HomePage/BannerComponent/modules/reducer";
import loginReducer from "../../containers/HomeTemplate/LoginPage/modules/Login/reducer";
import registerReducer from "../../containers/HomeTemplate/LoginPage/modules/Register/reducer";
import detailRoomReducer from "../../containers/HomeTemplate/DetailPage/modules/detail/reducer";
import orderRoomReducer from "../../containers/HomeTemplate/DetailPage/modules/order/reducer";

const rootReducer = combineReducers({
  listPlaceReducer,
  listRoomReducer,
  loginReducer,
  registerReducer,
  detailRoomReducer,
  orderRoomReducer,
});

export default rootReducer;

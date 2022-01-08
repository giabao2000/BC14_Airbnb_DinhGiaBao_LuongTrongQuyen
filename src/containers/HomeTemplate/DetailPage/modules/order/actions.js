import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actOrderRoomApi = (orderInfo) => {
  return (dispatch) => {
    dispatch(actOrderRoomRequest());

    api
      .post("rooms/booking", orderInfo)
      .then((result) => {
        dispatch(actOrderRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actOrderRoomFailed(error));
      });
  };
};

export const actOrderRoomReset = () => {
  return {
    type: ActionType.ORDER_ROOM_RESET,
  };
};

const actOrderRoomRequest = () => {
  return {
    type: ActionType.ORDER_ROOM_REQUEST,
  };
};

const actOrderRoomSuccess = (data) => {
  return {
    type: ActionType.ORDER_ROOM_SUCCESS,
    payload: data,
  };
};

const actOrderRoomFailed = (error) => {
  return {
    type: ActionType.ORDER_ROOM_FAILED,
    payload: error,
  };
};

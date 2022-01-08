import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actDetailRoomApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailRoomRequest());

    api
      .get(`rooms/${id}`)
      .then((result) => {
        dispatch(actDetailRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actDetailRoomFailed(error));
      });
  };
};

const actDetailRoomRequest = () => {
  return {
    type: ActionType.DETAIL_ROOM_REQUEST,
  };
};

const actDetailRoomSuccess = (data) => {
  return {
    type: ActionType.DETAIL_ROOM_SUCCESS,
    payload: data,
  };
};

const actDetailRoomFailed = (error) => {
  return {
    type: ActionType.DETAIL_ROOM_FAILED,
    payload: error,
  };
};

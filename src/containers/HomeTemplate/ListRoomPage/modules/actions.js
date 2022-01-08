import * as ActionType from "./constants";
import api from "../../../../utils/apiUtils";

export const actListRoom = (id) => {
  return (dispatch) => {
    dispatch(actListRoomRequest());

    api
      .get(`rooms?locationId=${id}`)
      .then((result) => {
        dispatch(actListRoomSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actListRoomFailed(error));
      });
  };
};

const actListRoomRequest = () => {
  return {
    type: ActionType.LIST_ROOM_REQUEST,
  };
};

const actListRoomSuccess = (data) => {
  return {
    type: ActionType.LIST_ROOM_SUCCESS,
    payload: data,
  };
};

const actListRoomFailed = (error) => {
  return {
    type: ActionType.LIST_ROOM_FAILED,
    payload: error,
  };
};

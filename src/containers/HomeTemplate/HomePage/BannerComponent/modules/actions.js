import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actListPlace = () => {
  return (dispatch) => {
    dispatch(actListPlaceRequest());

    api
      .get("locations")
      .then((result) => {
        dispatch(actListPlaceSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actListPlaceFailed(error));
      });
  };
};

const actListPlaceRequest = () => {
  return {
    type: ActionType.LIST_PLACE_REQUEST,
  };
};

const actListPlaceSuccess = (data) => {
  return {
    type: ActionType.LIST_PLACE_SUCCESS,
    payload: data,
  };
};

const actListPlaceFailed = (error) => {
  return {
    type: ActionType.LIST_PLACE_FAILED,
    payload: error,
  };
};

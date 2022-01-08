import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actRegisterApi = (user) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());

    api
      .post("auth/register", user)
      .then((result) => {
        dispatch(actRegisterSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actRegisterFailed(error));
      });
  };
};

const actRegisterRequest = () => {
  return {
    type: ActionType.REGISTER_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: ActionType.REGISTER_SUCCESS,
    payload: data,
  };
};

const actRegisterFailed = (error) => {
  return {
    type: ActionType.REGISTER_FAILED,
    payload: error,
  };
};

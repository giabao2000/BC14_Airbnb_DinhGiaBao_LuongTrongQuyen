import * as ActionType from "./constants";
import api from "../../../../../utils/apiUtils";

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api
      .post("auth/login", user)
      .then((result) => {
        // Lưu thông tin client xuống localStorage
        if (result.data.user.type === "CLIENT") {
          localStorage.setItem("UserClient", JSON.stringify(result.data));
        } else if (result.data.user.type === "ADMIN") {
          localStorage.setItem("UserAdmin", JSON.stringify(result.data));
        }

        history.goBack();

        dispatch(actLoginSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actLoginFailed(error));
      });
  };
};

export const actLogout = (history) => {
  // Xóa user dưới localStorage
  if (localStorage.getItem("UserClient")) {
    localStorage.removeItem("UserClient");
  } else if (localStorage.getItem("UserAdmin")) {
    localStorage.removeItem("UserAdmin");
  }

  history.replace("/login");

  return {
    type: ActionType.LOGIN_CLEAR_DATA,
  };
};

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};

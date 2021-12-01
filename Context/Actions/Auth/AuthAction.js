import axiosInstance from "../../../utils/axiosInstance";
import firebase from "../../../utils/firebase-config";

export const LOGIN_REQUEST = "login_request";
export const LOGIN_SUCCESS = "login_success";
export const LOGIN_ERROR = "login_error";

export const SIGNUP_REQUEST = "signup_request";
export const SIGNUP_SUCCESS = "signup_success";
export const SIGNUP_ERROR = "signup_error";

export const LOGOUT_REQUEST = "logout_request";
export const LOGOUT_SUCCESS = "logout_success";
export const LOGOUT_ERROR = "logout_error";

export default function socialMediaAuth(provider) {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return res.user;
    })
    .catch(err => {
      return err;
    });
}

export const loginAuth = payload => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  return axiosInstance
    .post("/login", payload)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        data: res.data.data
      });
      return {
        type: LOGIN_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        error: err.response.data
      });
      return {
        type: LOGIN_ERROR,
        error: err.response.data
      };
    });
};

export const signupAuth = payload => dispatch => {
  dispatch({ type: SIGNUP_REQUEST });
  return axiosInstance
    .post("/signup", payload)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        data: res.data.data
      });
      return {
        type: SIGNUP_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_ERROR,
        error: err.response.data
      });
      return {
        type: SIGNUP_ERROR,
        error: err.response.data
      };
    });
};

export const logoutAuth = token => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  return axiosInstance
    .delete(`/logout?access_token=${token}`)
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
        data: res.data.data
      });
      return {
        type: LOGOUT_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: LOGOUT_ERROR,
        error: err.response.data
      });
      return {
        type: LOGOUT_ERROR,
        error: err.response.data
      };
    });
};

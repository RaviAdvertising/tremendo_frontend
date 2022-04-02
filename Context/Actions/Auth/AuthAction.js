import Cookies from "js-cookie";
import axiosInstance from "../../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../../utils/constants";
import firebase from "../../../utils/firebase-config";

export const LOGIN_REQUEST = "login_request";
export const LOGIN_SUCCESS = "login_success";
export const LOGIN_ERROR = "login_error";

export const SIGNUP_REQUEST = "signup_request";
export const SIGNUP_SUCCESS = "signup_success";
export const SIGNUP_ERROR = "signup_error";

export const SUBSCRIBE_REQUEST = "SUBSCRIBE_request";
export const SUBSCRIBE_SUCCESS = "SUBSCRIBE_success";
export const SUBSCRIBE_ERROR = "SUBSCRIBE_error";

export const LOGOUT_REQUEST = "logout_request";
export const LOGOUT_SUCCESS = "logout_success";
export const LOGOUT_ERROR = "logout_error";

export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_request";
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_success";
export const GET_USER_PROFILE_ERROR = "GET_USER_PROFILE_error";

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

export const getUserProfile = accessType => dispatch => {
  dispatch({ type: GET_USER_PROFILE_REQUEST });
  return axiosInstance
    .get(
      `/getProfile?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&access_type=${accessType}`
    )
    .then(res => {
      dispatch({
        type: GET_USER_PROFILE_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USER_PROFILE_ERROR,
        error: err.response.data
      });
    });
};

export const subscribe = payload => dispatch => {
  dispatch({ type: SUBSCRIBE_REQUEST });
  return axiosInstance
    .post("/subscribeMe", {
      email: "jangra.ravi18@gmail.com"
    })
    .then(res => {
      return {
        type: SUBSCRIBE_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: SUBSCRIBE_ERROR,
        error: err.response.data
      });
    });
};

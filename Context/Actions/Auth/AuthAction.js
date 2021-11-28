import axiosInstance from "../../../utils/axiosInstance";
import firebase from "../../../utils/firebase-config";

export const LOGIN_REQUEST = "login_request";
export const LOGIN_SUCCESS = "login_success";
export const LOGIN_ERROR = "login_error";

export const SIGNUP_REQUEST = "signup_request";
export const SIGNUP_SUCCESS = "signup_success";
export const SIGNUP_ERROR = "signup_error";

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
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/login", payload)
      .then(res => {
        resolve(res.data);
        return dispatch({
          type: LOGIN_SUCCESS,
          data: res.data.data
        });
      })
      .catch(err => {
        reject(err);
        return dispatch({
          type: LOGIN_ERROR,
          error: err.message
        });
      });
  });
};

export const signupAuth = payload => dispatch => {
  dispatch({ type: SIGNUP_REQUEST });
  axiosInstance
    .post("/signup", payload)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_ERROR,
        error: err.message
      });
    });
};

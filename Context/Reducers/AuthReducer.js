import Cookies from "js-cookie";
import { COOKIE_TOKEN, USER_DETAILS } from "../../utils/constants";
import * as authAction from "../Actions/Auth/AuthAction";
const authReducer = (state, action) => {
  switch (action.type) {
    case authAction.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loginLoading: true
      });
    case authAction.LOGIN_SUCCESS:
      Cookies.set(COOKIE_TOKEN, action.data.access_token, { expires: 7 });
      localStorage.setItem(USER_DETAILS, JSON.stringify(action.data));
      return Object.assign({}, state, {
        loginLoading: false,
        loginData: action.data
      });
    case authAction.LOGIN_ERROR:
      return Object.assign({}, state, {
        loginLoading: false
      });

    case authAction.GET_USER_PROFILE_REQUEST:
      return Object.assign({}, state, {
        userProfileLoading: true
      });
    case authAction.GET_USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        userProfileLoading: false,
        userProfileData: action.data
      });
    case authAction.GET_USER_PROFILE_ERROR:
      return Object.assign({}, state, {
        userProfileLoading: false
      });

    case authAction.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        signupLoading: true
      });
    case authAction.SIGNUP_SUCCESS:
      Cookies.set(COOKIE_TOKEN, action.data.access_token, { expires: 7 });
      localStorage.setItem(USER_DETAILS, JSON.stringify(action.data));
      return Object.assign({}, state, {
        signupLoading: false,
        signUpData: action.data
      });
    case authAction.SIGNUP_ERROR:
      return Object.assign({}, state, {
        signupLoading: false
      });

    case authAction.LOGOUT_REQUEST:
      return Object.assign({}, state, {
        logoutLoading: true
      });
    case authAction.LOGOUT_SUCCESS:
      Cookies.remove(COOKIE_TOKEN);
      localStorage.removeItem(USER_DETAILS);
      return Object.assign({}, state, {
        logoutLoading: false,
        logout: action.data
      });
    case authAction.LOGOUT_ERROR:
      return Object.assign({}, state, {
        logoutLoading: false
      });

    default:
      return state;
  }
};

export default authReducer;

import Cookies from "js-cookie";
import axiosInstance from "../../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../../utils/constants";

export const GET_STUDENT_DASHBOARD_DATA_REQUEST =
  "get_student_dashboard_Data_request";
export const GET_STUDENT_DASHBOARD_DATA_SUCCESS =
  "get_student_dashboard_Data_success";
export const GET_STUDENT_DASHBOARD_DATA_ERROR =
  "get_student_dashboard_Data_error";

export const UPDATE_PROFILE_DATA_REQUEST = "UPDATE_PROFILE_DATA_request";
export const UPDATE_PROFILE_DATA_SUCCESS = "UPDATE_PROFILE_DATA_success";
export const UPDATE_PROFILE_DATA_ERROR = "UPDATE_PROFILE_DATA_error";

export const getStudentDashboardData = languageCode => dispatch => {
  dispatch({ type: GET_STUDENT_DASHBOARD_DATA_REQUEST });
  return axiosInstance
    .get(
      `/getStudentDashboardData?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&lang=${languageCode}`
    )
    .then(res => {
      dispatch({
        type: GET_STUDENT_DASHBOARD_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_DASHBOARD_DATA_ERROR,
        error: err.response.data
      });
    });
};

export const updateMentorProfile = payload => dispatch => {
  dispatch({ type: UPDATE_PROFILE_DATA_REQUEST });
  return axiosInstance
    .post(`/updateUserProfile`, payload)
    .then(res => {
      dispatch({
        type: UPDATE_PROFILE_DATA_SUCCESS,
        data: res.data.data
      });
      return {
        type: UPDATE_PROFILE_DATA_SUCCESS,
        data: res.data.data
      };
    })
    .catch(err => {
      dispatch({
        type: UPDATE_PROFILE_DATA_ERROR,
        error: err.response.data
      });
      return {
        type: UPDATE_PROFILE_DATA_ERROR,
        error: err.response.data
      };
    });
};

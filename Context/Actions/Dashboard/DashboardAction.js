import Cookies from "js-cookie";
import moment from "moment";
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

export const GET_MENTOR_BATCHLIST_REQUEST = "GET_MENTOR_BATCHLIST_request";
export const GET_MENTOR_BATCHLIST_SUCCESS = "GET_MENTOR_BATCHLIST_success";
export const GET_MENTOR_BATCHLIST_ERROR = "GET_MENTOR_BATCHLIST_error";

export const GET_MENTOR_STUDENTLIST_REQUEST = "GET_MENTOR_STUDENTLIST_request";
export const GET_MENTOR_STUDENTLIST_SUCCESS = "GET_MENTOR_STUDENTLIST_success";
export const GET_MENTOR_STUDENTLIST_ERROR = "GET_MENTOR_STUDENTLIST_error";

export const GET_MENTOR_DASHBOARD_DATA_REQUEST =
  "GET_MENTOR_DASHBOARD_DATA_request";
export const GET_MENTOR_DASHBOARD_DATA_SUCCESS =
  "GET_MENTOR_DASHBOARD_DATA_success";
export const GET_MENTOR_DASHBOARD_DATA_ERROR =
  "GET_MENTOR_DASHBOARD_DATA_error";

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

export const getMentorBatches = () => dispatch => {
  dispatch({ type: GET_MENTOR_BATCHLIST_REQUEST });
  return axiosInstance
    .get(`/getMentorBatchList?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_MENTOR_BATCHLIST_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_MENTOR_BATCHLIST_SUCCESS,
        data: res.data.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_BATCHLIST_ERROR,
        error: err.response.data
      });
    });
};

export const getMentorStudentList = batchCode => dispatch => {
  dispatch({ type: GET_MENTOR_STUDENTLIST_REQUEST });
  return axiosInstance
    .get(
      `/getMentorBatchStudentList?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batchCode}`
    )
    .then(res => {
      dispatch({
        type: GET_MENTOR_STUDENTLIST_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_STUDENTLIST_ERROR,
        error: err.response.data
      });
    });
};

export const getMentorDashboardData = (
  batchCode,
  startsAt,
  endsAt
) => dispatch => {
  dispatch({ type: GET_MENTOR_DASHBOARD_DATA_REQUEST });
  return axiosInstance
    .get(
      `/getMentorDashboard?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batchCode}&startsAt=${startsAt}&endsAt=${endsAt}`
    )
    .then(res => {
      dispatch({
        type: GET_MENTOR_DASHBOARD_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_DASHBOARD_DATA_ERROR,
        error: err.response.data
      });
    });
};

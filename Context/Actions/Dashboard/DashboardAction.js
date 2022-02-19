import Cookies from "js-cookie";
import axiosInstance from "../../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../../utils/constants";

export const GET_STUDENT_DASHBOARD_DATA_REQUEST =
  "get_student_dashboard_Data_request";
export const GET_STUDENT_DASHBOARD_DATA_SUCCESS =
  "get_student_dashboard_Data_success";
export const GET_STUDENT_DASHBOARD_DATA_ERROR =
  "get_student_dashboard_Data_error";

export const GET_BATCHMATES_DATA_REQUEST = "GET_BATCHMATES_Data_request";
export const GET_BATCHMATES_DATA_SUCCESS = "GET_BATCHMATES_Data_success";
export const GET_BATCHMATES_DATA_ERROR = "GET_BATCHMATES_Data_error";

export const GET_UPCOMING_TASKS_DATA_REQUEST =
  "GET_UPCOMING_TASKS_Data_request";
export const GET_UPCOMING_TASKS_DATA_SUCCESS =
  "GET_UPCOMING_TASKS_Data_success";
export const GET_UPCOMING_TASKS_DATA_ERROR = "GET_UPCOMING_TASKS_Data_error";

export const GET_MYRESOURCE_TAB_DATA_REQUEST =
  "GET_MYRESOURCE_TAB_Data_request";
export const GET_MYRESOURCE_TAB_DATA_SUCCESS =
  "GET_MYRESOURCE_TAB_Data_success";
export const GET_MYRESOURCE_TAB_DATA_ERROR = "GET_MYRESOURCE_TAB_Data_error";

export const GET_PROGRESS_TAB_DATA_REQUEST = "GET_PROGRESS_TAB_Data_request";
export const GET_PROGRESS_TAB_DATA_SUCCESS = "GET_PROGRESS_TAB_Data_success";
export const GET_PROGRESS_TAB_DATA_ERROR = "GET_PROGRESS_TAB_Data_error";

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

export const getBatchMates = () => dispatch => {
  dispatch({ type: GET_BATCHMATES_DATA_REQUEST });
  return axiosInstance
    .get(`/getStudentBatchMatesList?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_BATCHMATES_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_BATCHMATES_DATA_ERROR,
        error: err.response.data
      });
    });
};

export const getUpcomingTasks = () => dispatch => {
  dispatch({ type: GET_UPCOMING_TASKS_DATA_REQUEST });
  return axiosInstance
    .get(`/getStudentUpcomingTask?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_UPCOMING_TASKS_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_UPCOMING_TASKS_DATA_ERROR,
        error: err.response.data
      });
    });
};

export const getMyResourceTabData = () => dispatch => {
  dispatch({ type: GET_MYRESOURCE_TAB_DATA_REQUEST });
  return axiosInstance
    .get(`/getStudentAssignments?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_MYRESOURCE_TAB_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MYRESOURCE_TAB_DATA_ERROR,
        error: err.response.data
      });
    });
};

export const getProgressTabData = () => dispatch => {
  dispatch({ type: GET_PROGRESS_TAB_DATA_REQUEST });
  return axiosInstance
    .get(`/getStudentProgress?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_PROGRESS_TAB_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROGRESS_TAB_DATA_ERROR,
        error: err.response.data
      });
    });
};

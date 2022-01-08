import axiosInstance from "../../../utils/axiosInstance";

export const GET_LANGUAGE_REQUEST = "get_language_request";
export const GET_LANGUAGE_SUCCESS = "get_language_success";
export const GET_LANGUAGE_ERROR = "get_language_error";

export const GET_PAGE_DATA_REQUEST = "GET_PAGE_DATA_request";
export const GET_PAGE_DATA_SUCCESS = "GET_PAGE_DATA_success";
export const GET_PAGE_DATA_ERROR = "GET_PAGE_DATA_error";

export const GET_REVIEW_DATA_REQUEST = "GET_REVIEW_DATA_request";
export const GET_REVIEW_DATA_SUCCESS = "GET_REVIEW_DATA_success";
export const GET_REVIEW_DATA_ERROR = "GET_REVIEW_DATA_error";

export const SET_REVIEW_DATA_REQUEST = "SET_REVIEW_DATA_request";
export const SET_REVIEW_DATA_SUCCESS = "SET_REVIEW_DATA_success";
export const SET_REVIEW_DATA_ERROR = "SET_REVIEW_DATA_error";

export const GET_REVIEW_DETAILS_REQUEST = "GET_REVIEW_DETAILS_request";
export const GET_REVIEW_DETAILS_SUCCESS = "GET_REVIEW_DETAILS_success";
export const GET_REVIEW_DETAILS_ERROR = "GET_REVIEW_DETAILS_error";

export const ADD_REVIEW_COMMENT_REQUEST = "ADD_REVIEW_COMMENT_request";
export const ADD_REVIEW_COMMENT_SUCCESS = "ADD_REVIEW_COMMENT_success";
export const ADD_REVIEW_COMMENT_ERROR = "ADD_REVIEW_COMMENT_error";

export const SET_REVIEW_LIKE_REQUEST = "SET_REVIEW_LIKE_request";
export const SET_REVIEW_LIKE_SUCCESS = "SET_REVIEW_LIKE_success";
export const SET_REVIEW_LIKE_ERROR = "SET_REVIEW_LIKE_error";

export const getLanguages = () => dispatch => {
  dispatch({ type: GET_LANGUAGE_REQUEST });

  return axiosInstance
    .get("/getLanguages")
    .then(res => {
      dispatch({
        type: GET_LANGUAGE_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_LANGUAGE_SUCCESS,
        data: res.data.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_LANGUAGE_ERROR,
        error: err.message
      });
    });
};

export const getPageData = pageType => dispatch => {
  dispatch({ type: GET_PAGE_DATA_REQUEST });

  axiosInstance
    .get(`/getCommonData?page=${pageType}`)
    .then(res => {
      dispatch({
        type: GET_PAGE_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PAGE_DATA_ERROR,
        error: err.message
      });
    });
};

export const getReviewData = () => dispatch => {
  dispatch({ type: GET_REVIEW_DATA_REQUEST });
  return axiosInstance
    .get(`/getCourseReview`)
    .then(res => {
      dispatch({
        type: GET_REVIEW_DATA_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_REVIEW_DATA_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_REVIEW_DATA_ERROR,
        error: err.response.data
      });
      return {
        type: GET_REVIEW_DATA_ERROR,
        error: err.response.data
      };
    });
};

export const setReviewData = payload => dispatch => {
  dispatch({ type: SET_REVIEW_DATA_REQUEST });
  return axiosInstance
    .post(`/addCourseReview`, payload)
    .then(res => {
      dispatch({
        type: SET_REVIEW_DATA_SUCCESS,
        data: res.data.data
      });
      return {
        type: SET_REVIEW_DATA_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: SET_REVIEW_DATA_ERROR,
        error: err.response.data
      });
      return {
        type: SET_REVIEW_DATA_ERROR,
        error: err.response.data
      };
    });
};

export const getReviewDetails = id => dispatch => {
  dispatch({ type: GET_REVIEW_DETAILS_REQUEST });
  return axiosInstance
    .get(`/getCourseReviewDetails?id=${id}`)
    .then(res => {
      dispatch({
        type: GET_REVIEW_DETAILS_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_REVIEW_DETAILS_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_REVIEW_DETAILS_ERROR,
        error: err.response.data
      });
      return {
        type: GET_REVIEW_DETAILS_ERROR,
        error: err.response.data
      };
    });
};

export const addReviewComments = payload => dispatch => {
  dispatch({ type: ADD_REVIEW_COMMENT_REQUEST });
  return axiosInstance
    .post(`/addCourseReviewComment`, payload)
    .then(res => {
      dispatch({
        type: ADD_REVIEW_COMMENT_SUCCESS,
        data: res.data.data
      });
      return {
        type: ADD_REVIEW_COMMENT_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: ADD_REVIEW_COMMENT_ERROR,
        error: err.response.data
      });
      return {
        type: ADD_REVIEW_COMMENT_ERROR,
        error: err.response.data
      };
    });
};

export const setReviewLikeStatus = payload => dispatch => {
  dispatch({ type: SET_REVIEW_LIKE_REQUEST });
  return axiosInstance
    .post(`/updateCourseReviewLike`, payload)
    .then(res => {
      dispatch({
        type: SET_REVIEW_LIKE_SUCCESS,
        data: res.data.data
      });
      return {
        type: SET_REVIEW_LIKE_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: SET_REVIEW_LIKE_ERROR,
        error: err.response.data
      });
      return {
        type: SET_REVIEW_LIKE_ERROR,
        error: err.response.data
      };
    });
};

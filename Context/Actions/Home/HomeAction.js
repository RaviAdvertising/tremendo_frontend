import Cookies from "js-cookie";
import axiosInstance from "../../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../../utils/constants";

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

export const CONTACT_US_REQUEST = "CONTACT_US_request";
export const CONTACT_US_SUCCESS = "CONTACT_US_success";
export const CONTACT_US_ERROR = "CONTACT_US_error";

export const GET_BLOGS_REQUEST = "GET_BLOGS_request";
export const GET_BLOGS_SUCCESS = "GET_BLOGS_success";
export const GET_BLOGS_ERROR = "GET_BLOGS_error";

export const GET_FAQS_REQUEST = "GET_FAQS_request";
export const GET_FAQS_SUCCESS = "GET_FAQS_success";
export const GET_FAQS_ERROR = "GET_FAQS_error";

export const ADD_USER_FAQ_REQUEST = "ADD_USER_FAQ_request";
export const ADD_USER_FAQ_SUCCESS = "ADD_USER_FAQ_success";
export const ADD_USER_FAQ_ERROR = "ADD_USER_FAQ_error";

export const GET_USER_FAQ_REQUEST = "GET_USER_FAQ_request";
export const GET_USER_FAQ_SUCCESS = "GET_USER_FAQ_success";
export const GET_USER_FAQ_ERROR = "GET_USER_FAQ_error";

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
    .get(`/getCourseReview?access_token=${Cookies.get(COOKIE_TOKEN)}`)
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
    .get(
      `/getCourseReviewDetails?id=${id}?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}`
    )
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

export const contactUs = payload => dispatch => {
  dispatch({ type: CONTACT_US_REQUEST });
  return axiosInstance
    .post(`/contactUs`, payload)
    .then(res => {
      dispatch({
        type: CONTACT_US_SUCCESS,
        data: res.data.data
      });
      return {
        type: CONTACT_US_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: CONTACT_US_ERROR,
        error: err.response.data
      });
    });
};

export const getBlogs = () => dispatch => {
  dispatch({ type: GET_BLOGS_REQUEST });
  return axiosInstance
    .get(`/getCourseBlogList`)
    .then(res => {
      dispatch({
        type: GET_BLOGS_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_BLOGS_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_BLOGS_ERROR,
        error: err.response.data
      });
    });
};

export const getFaqs = () => dispatch => {
  dispatch({ type: GET_FAQS_REQUEST });
  return axiosInstance
    .get(`/getCourseFaqs?faq_type=common`)
    .then(res => {
      dispatch({
        type: GET_FAQS_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_FAQS_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_FAQS_ERROR,
        error: err.response.data
      });
    });
};

export const addUserFaqs = payload => dispatch => {
  dispatch({ type: ADD_USER_FAQ_REQUEST });
  return axiosInstance
    .post(`/addUserFaq`, payload)
    .then(res => {
      dispatch({
        type: ADD_USER_FAQ_SUCCESS,
        data: res.data.data
      });
      return {
        type: ADD_USER_FAQ_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: ADD_USER_FAQ_ERROR,
        error: err.response.data
      });
    });
};

export const getUserFaqs = () => dispatch => {
  dispatch({ type: GET_USER_FAQ_REQUEST });
  return axiosInstance
    .get(`/getUserFaqs?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_USER_FAQ_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_USER_FAQ_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_USER_FAQ_ERROR,
        error: err.response.data
      });
    });
};

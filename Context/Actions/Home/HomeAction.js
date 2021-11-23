import axiosInstance from "../../../utils/axiosInstance";

export const GET_LANGUAGE_REQUEST = "get_language_request";
export const GET_LANGUAGE_SUCCESS = "get_language_success";
export const GET_LANGUAGE_ERROR = "get_language_error";

export const GET_PAGE_DATA_REQUEST = "GET_PAGE_DATA_request";
export const GET_PAGE_DATA_SUCCESS = "GET_PAGE_DATA_success";
export const GET_PAGE_DATA_ERROR = "GET_PAGE_DATA_error";

export const getLanguages = () => dispatch => {
  dispatch({ type: GET_LANGUAGE_REQUEST });

  axiosInstance
    .get("/getLanguages")
    .then(res => {
      dispatch({
        type: GET_LANGUAGE_SUCCESS,
        data: res.data.data
      });
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

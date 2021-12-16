import axiosInstance from "../../../utils/axiosInstance";

export const GET_LANGUAGE_DETAILS_REQUEST = "get_language_details_request";
export const GET_LANGUAGE_DETAILS_SUCCESS = "get_language_details_success";
export const GET_LANGUAGE_DETAILS_ERROR = "get_language_details_error";

export const getLangaugeDetails = languageCode => dispatch => {
  dispatch({ type: GET_LANGUAGE_DETAILS_REQUEST });
  return axiosInstance
    .get(`/getLanguageDetails?id=${languageCode}`)
    .then(res => {
      dispatch({
        type: GET_LANGUAGE_DETAILS_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_LANGUAGE_DETAILS_SUCCESS,
        data: res.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_LANGUAGE_DETAILS_ERROR,
        error: err.response.data
      });
      return {
        type: GET_LANGUAGE_DETAILS_ERROR,
        error: err.response.data
      };
    });
};

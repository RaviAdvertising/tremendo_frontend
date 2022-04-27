import axiosInstance from "../../../utils/axiosInstance";

export const GET_LANGUAGE_DETAILS_REQUEST = "get_language_details_request";
export const GET_LANGUAGE_DETAILS_SUCCESS = "get_language_details_success";
export const GET_LANGUAGE_DETAILS_ERROR = "get_language_details_error";

export const SET_STUDENT_SELECTED_LANGUAGE = "setStudentSelectedLnagugae";
export const SET_MENTOR_BATCH_DETAIL = "setMentorBatchDetails";

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

export const setStudentSelectedLanguage = languageObj => dispatch => {
  dispatch({
    type: SET_STUDENT_SELECTED_LANGUAGE,
    data: languageObj
  });
};

export const storeMentorBatch = batchObj => dispatch => {
  dispatch({
    type: SET_MENTOR_BATCH_DETAIL,
    data: batchObj
  });
};

import * as languageAction from "../Actions/Language/LanguageAction";
const languageReducer = (state, action) => {
  switch (action.type) {
    case languageAction.GET_LANGUAGE_DETAILS_REQUEST:
      return Object.assign({}, state, {
        getLangaugeDetailsLoading: true
      });
    case languageAction.GET_LANGUAGE_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        getLangaugeDetailsLoading: false,
        getLanguageDetails: action.data
      });
    case languageAction.GET_LANGUAGE_DETAILS_ERROR:
      return Object.assign({}, state, {
        getLangaugeDetailsLoading: false
      });

    default:
      return state;
  }
};

export default languageReducer;

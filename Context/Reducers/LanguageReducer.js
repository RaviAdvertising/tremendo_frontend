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
    case languageAction.SET_STUDENT_SELECTED_LANGUAGE:
      return Object.assign({}, state, {
        setStudentSelectedLanguage: action.data
      });
    case languageAction.SET_MENTOR_BATCH_DETAIL:
      return Object.assign({}, state, {
        storedMentorBatch: action.data
      });

    default:
      return state;
  }
};

export default languageReducer;

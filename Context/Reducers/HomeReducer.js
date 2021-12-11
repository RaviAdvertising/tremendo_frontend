import * as homeAction from "../Actions/Home/HomeAction";
const homeReducer = (state, action) => {
  switch (action.type) {
    case homeAction.GET_LANGUAGE_REQUEST:
      return Object.assign({}, state, {
        getLangaugeLoading: true
      });
    case homeAction.GET_LANGUAGE_SUCCESS:
      return Object.assign({}, state, {
        getLangaugeLoading: false,
        getLanguage: action.data
      });
    case homeAction.GET_LANGUAGE_ERROR:
      return Object.assign({}, state, {
        getLangaugeLoading: false
      });

    case homeAction.GET_PAGE_DATA_REQUEST:
      return Object.assign({}, state, {
        pageDataLoading: true
      });
    case homeAction.GET_PAGE_DATA_SUCCESS:
      return Object.assign({}, state, {
        pageDataLoading: false,
        pageData: action.data
      });
    case homeAction.GET_PAGE_DATA_ERROR:
      return Object.assign({}, state, {
        pageDataLoading: false
      });

    default:
      return state;
  }
};

export default homeReducer;

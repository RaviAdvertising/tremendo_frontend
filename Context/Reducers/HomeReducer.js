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

    case homeAction.GET_REVIEW_DATA_REQUEST:
      return Object.assign({}, state, {
        reviewDataLoading: true
      });
    case homeAction.GET_REVIEW_DATA_SUCCESS:
      return Object.assign({}, state, {
        reviewDataLoading: false,
        reviewData: action.data
      });
    case homeAction.GET_REVIEW_DATA_ERROR:
      return Object.assign({}, state, {
        reviewDataLoading: false
      });

    case homeAction.SET_REVIEW_DATA_REQUEST:
      return Object.assign({}, state, {
        setReviewLoading: true
      });
    case homeAction.SET_REVIEW_DATA_SUCCESS:
      return Object.assign({}, state, {
        setReviewLoading: false,
        setReviewData: action.data
      });
    case homeAction.SET_REVIEW_DATA_ERROR:
      return Object.assign({}, state, {
        setReviewLoading: false
      });

    case homeAction.GET_REVIEW_DETAILS_REQUEST:
      return Object.assign({}, state, {
        reviewDetailsLoading: true
      });
    case homeAction.GET_REVIEW_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        reviewDetailsLoading: false,
        reviewDetails: action.data
      });
    case homeAction.GET_REVIEW_DETAILS_ERROR:
      return Object.assign({}, state, {
        reviewDetailsLoading: false
      });

    case homeAction.ADD_REVIEW_COMMENT_REQUEST:
      return Object.assign({}, state, {
        reviewCommentLoading: true
      });
    case homeAction.ADD_REVIEW_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        reviewCommentLoading: false,
        reviewComment: action.data
      });
    case homeAction.ADD_REVIEW_COMMENT_ERROR:
      return Object.assign({}, state, {
        reviewCommentLoading: false
      });

    case homeAction.SET_REVIEW_LIKE_REQUEST:
      return Object.assign({}, state, {
        setReviewLikeLoading: true
      });
    case homeAction.SET_REVIEW_LIKE_SUCCESS:
      return Object.assign({}, state, {
        setReviewLikeLoading: false,
        setReviewLike: action.data
      });
    case homeAction.SET_REVIEW_LIKE_ERROR:
      return Object.assign({}, state, {
        setReviewLikeLoading: false
      });

    case homeAction.CONTACT_US_REQUEST:
      return Object.assign({}, state, {
        contactUsLoading: true
      });
    case homeAction.CONTACT_US_SUCCESS:
      return Object.assign({}, state, {
        contactUsLoading: false
      });
    case homeAction.CONTACT_US_ERROR:
      return Object.assign({}, state, {
        contactUsLoading: false
      });

    case homeAction.GET_BLOGS_REQUEST:
      return Object.assign({}, state, {
        getBlogsLoading: true
      });
    case homeAction.GET_BLOGS_SUCCESS:
      return Object.assign({}, state, {
        getBlogsLoading: false,
        getBlogs: action.data
      });
    case homeAction.GET_BLOGS_ERROR:
      return Object.assign({}, state, {
        getBlogsLoading: false
      });

    default:
      return state;
  }
};

export default homeReducer;

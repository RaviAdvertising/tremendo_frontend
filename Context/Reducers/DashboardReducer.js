import * as dashboardAction from "../Actions/Dashboard/DashboardAction";
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case dashboardAction.GET_STUDENT_DASHBOARD_DATA_REQUEST:
      return Object.assign({}, state, {
        getStudentDashboardDataLoading: true
      });
    case dashboardAction.GET_STUDENT_DASHBOARD_DATA_SUCCESS:
      return Object.assign({}, state, {
        getStudentDashboardDataLoading: false,
        getStudentDashboardData: action.data
      });
    case dashboardAction.GET_STUDENT_DASHBOARD_DATA_ERROR:
      return Object.assign({}, state, {
        getStudentDashboardDataLoading: false
      });

    case dashboardAction.UPDATE_PROFILE_DATA_REQUEST:
      return Object.assign({}, state, {
        profileUpdateLoading: true
      });
    case dashboardAction.UPDATE_PROFILE_DATA_SUCCESS:
      return Object.assign({}, state, {
        profileUpdateLoading: false
      });
    case dashboardAction.UPDATE_PROFILE_DATA_ERROR:
      return Object.assign({}, state, {
        profileUpdateLoading: false
      });

    case dashboardAction.GET_MENTOR_BATCHLIST_REQUEST:
      return Object.assign({}, state, {
        mentorBatchesLoading: true
      });
    case dashboardAction.GET_MENTOR_BATCHLIST_SUCCESS:
      return Object.assign({}, state, {
        mentorBatchesLoading: false,
        mentorBatches: action.data
      });
    case dashboardAction.GET_MENTOR_BATCHLIST_ERROR:
      return Object.assign({}, state, {
        mentorBatchesLoading: false
      });

    case dashboardAction.GET_MENTOR_STUDENTLIST_REQUEST:
      return Object.assign({}, state, {
        mentorStudentListLoading: true
      });
    case dashboardAction.GET_MENTOR_STUDENTLIST_SUCCESS:
      return Object.assign({}, state, {
        mentorStudentListLoading: false,
        mentorStudentList: action.data
      });
    case dashboardAction.GET_MENTOR_STUDENTLIST_ERROR:
      return Object.assign({}, state, {
        mentorStudentListLoading: false
      });

    case dashboardAction.GET_MENTOR_DASHBOARD_DATA_REQUEST:
      return Object.assign({}, state, {
        mentorDashboardDataLoading: true
      });
    case dashboardAction.GET_MENTOR_DASHBOARD_DATA_SUCCESS:
      return Object.assign({}, state, {
        mentorDashboardDataLoading: false,
        mentorDashboardData: action.data
      });
    case dashboardAction.GET_MENTOR_DASHBOARD_DATA_ERROR:
      return Object.assign({}, state, {
        mentorDashboardDataLoading: false
      });

    case dashboardAction.GET_MENTOR_ASSIGNMENT_LIST_REQUEST:
      return Object.assign({}, state, {
        mentorDashboardAssignmentListLoading: true
      });
    case dashboardAction.GET_MENTOR_ASSIGNMENT_LIST_SUCCESS:
      return Object.assign({}, state, {
        mentorDashboardAssignmentListLoading: false,
        mentorDashboardAssignmentList: action.data
      });
    case dashboardAction.GET_MENTOR_ASSIGNMENT_LIST_ERROR:
      return Object.assign({}, state, {
        mentorDashboardAssignmentListLoading: false
      });

    case dashboardAction.SUBMITTED_ASSIGNMENT_LIST_REQUEST:
      return Object.assign({}, state, {
        getSubmittedAssignemntListLoading: true
      });
    case dashboardAction.SUBMITTED_ASSIGNMENT_LIST_SUCCESS:
      return Object.assign({}, state, {
        getSubmittedAssignemntListLoading: false,
        getSubmittedAssignemntList: action.data
      });
    case dashboardAction.SUBMITTED_ASSIGNMENT_LIST_ERROR:
      return Object.assign({}, state, {
        getSubmittedAssignemntListLoading: false
      });

    default:
      return state;
  }
};

export default dashboardReducer;

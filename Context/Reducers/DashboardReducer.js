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

    default:
      return state;
  }
};

export default dashboardReducer;

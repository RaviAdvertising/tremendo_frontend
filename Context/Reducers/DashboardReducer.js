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

    case dashboardAction.GET_BATCHMATES_DATA_REQUEST:
      return Object.assign({}, state, {
        getBatchMatesLoading: true
      });
    case dashboardAction.GET_BATCHMATES_DATA_SUCCESS:
      return Object.assign({}, state, {
        getBatchMatesLoading: false,
        getBatchMatesData: action.data
      });
    case dashboardAction.GET_BATCHMATES_DATA_ERROR:
      return Object.assign({}, state, {
        getBatchMatesLoading: false
      });

    case dashboardAction.GET_UPCOMING_TASKS_DATA_REQUEST:
      return Object.assign({}, state, {
        getUpcomingTasksLoading: true
      });
    case dashboardAction.GET_UPCOMING_TASKS_DATA_SUCCESS:
      return Object.assign({}, state, {
        getUpcomingTasksLoading: false,
        getUpcomingTask: action.data
      });
    case dashboardAction.GET_UPCOMING_TASKS_DATA_ERROR:
      return Object.assign({}, state, {
        getUpcomingTasksLoading: false
      });
    case dashboardAction.GET_MYRESOURCE_TAB_DATA_REQUEST:
      return Object.assign({}, state, {
        getMyResourceTabLoading: true
      });
    case dashboardAction.GET_MYRESOURCE_TAB_DATA_SUCCESS:
      return Object.assign({}, state, {
        getMyResourceTabLoading: false,
        getMyResourceTabData: action.data
      });
    case dashboardAction.GET_MYRESOURCE_TAB_DATA_ERROR:
      return Object.assign({}, state, {
        getMyResourceTabLoading: false
      });
    case dashboardAction.GET_PROGRESS_TAB_DATA_REQUEST:
      return Object.assign({}, state, {
        getProgressTabLoading: true
      });
    case dashboardAction.GET_PROGRESS_TAB_DATA_SUCCESS:
      return Object.assign({}, state, {
        getProgressTabLoading: false,
        getProgressTabData: action.data
      });
    case dashboardAction.GET_PROGRESS_TAB_DATA_ERROR:
      return Object.assign({}, state, {
        getProgressTabLoading: false
      });

    default:
      return state;
  }
};

export default dashboardReducer;

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

    case dashboardAction.STUDENT_UPCOMING_TASKS_REQUEST:
      return Object.assign({}, state, {
        studentUpcomingTaskLoading: true
      });
    case dashboardAction.STUDENT_UPCOMING_TASKS_SUCCESS:
      return Object.assign({}, state, {
        studentUpcomingTaskLoading: false,
        studentUpcomingTasks: action.data
      });
    case dashboardAction.STUDENT_UPCOMING_TASKS_ERROR:
      return Object.assign({}, state, {
        studentUpcomingTaskLoading: false
      });

    case dashboardAction.STUDENT_BATCH_MATES_REQUEST:
      return Object.assign({}, state, {
        studentBatchMatesLoading: true
      });
    case dashboardAction.STUDENT_BATCH_MATES_SUCCESS:
      return Object.assign({}, state, {
        studentBatchMatesLoading: false,
        studentBatchMates: action.data
      });
    case dashboardAction.STUDENT_BATCH_MATES_ERROR:
      return Object.assign({}, state, {
        studentBatchMatesLoading: false
      });

    case dashboardAction.GET_STUDENT_ASSIGNMENT_LIST_REQUEST:
      return Object.assign({}, state, {
        studentAssignmentListLoading: true
      });
    case dashboardAction.GET_STUDENT_ASSIGNMENT_LIST_SUCCESS:
      return Object.assign({}, state, {
        studentAssignmentListLoading: false,
        studentAssignmentList: action.data
      });
    case dashboardAction.GET_STUDENT_ASSIGNMENT_LIST_ERROR:
      return Object.assign({}, state, {
        studentAssignmentListLoading: false
      });

    case dashboardAction.GET_STUDENT_PROGRESS_REQUEST:
      return Object.assign({}, state, {
        getStudentProgressLoading: true
      });
    case dashboardAction.GET_STUDENT_PROGRESS_SUCCESS:
      return Object.assign({}, state, {
        getStudentProgressLoading: false,
        getStudentProgress: action.data
      });
    case dashboardAction.GET_STUDENT_PROGRESS_ERROR:
      return Object.assign({}, state, {
        getStudentProgressLoading: false
      });

    case dashboardAction.GET_STUDENT_COURSE_DETAILS_REQUEST:
      return Object.assign({}, state, {
        getStudentCourseDetailsLoading: true
      });
    case dashboardAction.GET_STUDENT_COURSE_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        getStudentCourseDetailsLoading: false,
        getStudentCourseDetails: action.data
      });
    case dashboardAction.GET_STUDENT_COURSE_DETAILS_ERROR:
      return Object.assign({}, state, {
        getStudentCourseDetailsLoading: false
      });

    case dashboardAction.MENTOR_UPCOMING_TASKS_REQUEST:
      return Object.assign({}, state, {
        mentorUpcomingTasksLoading: true
      });
    case dashboardAction.MENTOR_UPCOMING_TASKS_SUCCESS:
      return Object.assign({}, state, {
        mentorUpcomingTasksLoading: false,
        mentorUpcomingTask: action.data
      });
    case dashboardAction.MENTOR_UPCOMING_TASKS_ERROR:
      return Object.assign({}, state, {
        mentorUpcomingTasksLoading: false
      });

    case dashboardAction.UPDATE_STUDENT_SCORE_REQUEST:
      return Object.assign({}, state, {
        updateScoreLoading: true
      });
    case dashboardAction.UPDATE_STUDENT_SCORE_SUCCESS:
      return Object.assign({}, state, {
        updateScoreLoading: false
      });
    case dashboardAction.UPDATE_STUDENT_SCORE_ERROR:
      return Object.assign({}, state, {
        updateScoreLoading: false
      });

    case dashboardAction.GET_STUDENT_NOTIFICATION_REQUEST:
      return Object.assign({}, state, {
        studentNotificationLoading: true
      });
    case dashboardAction.GET_STUDENT_NOTIFICATION_SUCCESS:
      return Object.assign({}, state, {
        studentNotificationLoading: false,
        studentNotificationList: action.data
      });
    case dashboardAction.GET_STUDENT_NOTIFICATION_ERROR:
      return Object.assign({}, state, {
        studentNotificationLoading: false
      });

    case dashboardAction.GET_MENTOR_NOTIFICATION_REQUEST:
      return Object.assign({}, state, {
        mentorNotificaiotnLoading: true
      });
    case dashboardAction.GET_MENTOR_NOTIFICATION_SUCCESS:
      return Object.assign({}, state, {
        mentorNotificaiotnLoading: false,
        mentorNotificationList: action.data
      });
    case dashboardAction.GET_MENTOR_NOTIFICATION_ERROR:
      return Object.assign({}, state, {
        mentorNotificaiotnLoading: false
      });
    default:
      return state;
  }
};

export default dashboardReducer;

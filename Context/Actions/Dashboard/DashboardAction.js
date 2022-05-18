import Cookies from "js-cookie";
import moment from "moment";
import axiosInstance from "../../../utils/axiosInstance";
import { COOKIE_TOKEN } from "../../../utils/constants";

export const GET_STUDENT_DASHBOARD_DATA_REQUEST =
  "get_student_dashboard_Data_request";
export const GET_STUDENT_DASHBOARD_DATA_SUCCESS =
  "get_student_dashboard_Data_success";
export const GET_STUDENT_DASHBOARD_DATA_ERROR =
  "get_student_dashboard_Data_error";

export const UPDATE_PROFILE_DATA_REQUEST = "UPDATE_PROFILE_DATA_request";
export const UPDATE_PROFILE_DATA_SUCCESS = "UPDATE_PROFILE_DATA_success";
export const UPDATE_PROFILE_DATA_ERROR = "UPDATE_PROFILE_DATA_error";

export const GET_MENTOR_BATCHLIST_REQUEST = "GET_MENTOR_BATCHLIST_request";
export const GET_MENTOR_BATCHLIST_SUCCESS = "GET_MENTOR_BATCHLIST_success";
export const GET_MENTOR_BATCHLIST_ERROR = "GET_MENTOR_BATCHLIST_error";

export const GET_MENTOR_STUDENTLIST_REQUEST = "GET_MENTOR_STUDENTLIST_request";
export const GET_MENTOR_STUDENTLIST_SUCCESS = "GET_MENTOR_STUDENTLIST_success";
export const GET_MENTOR_STUDENTLIST_ERROR = "GET_MENTOR_STUDENTLIST_error";

export const GET_MENTOR_DASHBOARD_DATA_REQUEST =
  "GET_MENTOR_DASHBOARD_DATA_request";
export const GET_MENTOR_DASHBOARD_DATA_SUCCESS =
  "GET_MENTOR_DASHBOARD_DATA_success";
export const GET_MENTOR_DASHBOARD_DATA_ERROR =
  "GET_MENTOR_DASHBOARD_DATA_error";

export const DELETE_ASSIGNEMNT_REQUEST = "DELETE_ASSIGNEMNT_request";
export const DELETE_ASSIGNEMNT_SUCCESS = "DELETE_ASSIGNEMNT_success";
export const DELETE_ASSIGNEMNT_ERROR = "DELETE_ASSIGNEMNT_error";

export const UPDATE_STUDENT_SCORE_REQUEST = "UPDATE_STUDENT_SCORE_request";
export const UPDATE_STUDENT_SCORE_SUCCESS = "UPDATE_STUDENT_SCORE_success";
export const UPDATE_STUDENT_SCORE_ERROR = "UPDATE_STUDENT_SCORE_error";

export const SUBMITTED_ASSIGNMENT_LIST_REQUEST =
  "SUBMITTED_ASSIGNMENT_LIST_request";
export const SUBMITTED_ASSIGNMENT_LIST_SUCCESS =
  "SUBMITTED_ASSIGNMENT_LIST_success";
export const SUBMITTED_ASSIGNMENT_LIST_ERROR =
  "SUBMITTED_ASSIGNMENT_LIST_error";

export const GET_MENTOR_ASSIGNMENT_LIST_REQUEST =
  "GET_MENTOR_ASSIGNMENT_LIST_request";
export const GET_MENTOR_ASSIGNMENT_LIST_SUCCESS =
  "GET_MENTOR_ASSIGNMENT_LIST_success";
export const GET_MENTOR_ASSIGNMENT_LIST_ERROR =
  "GET_MENTOR_ASSIGNMENT_LIST_error";

export const STUDENT_UPCOMING_TASKS_REQUEST = "STUDENT_UPCOMING_TASKS_request";
export const STUDENT_UPCOMING_TASKS_SUCCESS = "STUDENT_UPCOMING_TASKS_success";
export const STUDENT_UPCOMING_TASKS_ERROR = "STUDENT_UPCOMING_TASKS_error";

export const STUDENT_BATCH_MATES_REQUEST = "STUDENT_BATCH_MATES_request";
export const STUDENT_BATCH_MATES_SUCCESS = "STUDENT_BATCH_MATES_success";
export const STUDENT_BATCH_MATES_ERROR = "STUDENT_BATCH_MATES_error";

export const GET_STUDENT_ASSIGNMENT_LIST_REQUEST =
  "GET_STUDENT_ASSIGNMENT_LIST_request";
export const GET_STUDENT_ASSIGNMENT_LIST_SUCCESS =
  "GET_STUDENT_ASSIGNMENT_LIST_success";
export const GET_STUDENT_ASSIGNMENT_LIST_ERROR =
  "GET_STUDENT_ASSIGNMENT_LIST_error";

export const GET_STUDENT_PROGRESS_REQUEST = "GET_STUDENT_PROGRESS_request";
export const GET_STUDENT_PROGRESS_SUCCESS = "GET_STUDENT_PROGRESS_success";
export const GET_STUDENT_PROGRESS_ERROR = "GET_STUDENT_PROGRESS_error";

export const GET_STUDENT_COURSE_DETAILS_REQUEST =
  "GET_STUDENT_COURSE_DETAILS_request";
export const GET_STUDENT_COURSE_DETAILS_SUCCESS =
  "GET_STUDENT_COURSE_DETAILS_success";
export const GET_STUDENT_COURSE_DETAILS_ERROR =
  "GET_STUDENT_COURSE_DETAILS_error";

export const MENTOR_UPCOMING_TASKS_REQUEST = "MENTOR_UPCOMING_TASKS_request";
export const MENTOR_UPCOMING_TASKS_SUCCESS = "MENTOR_UPCOMING_TASKS_success";
export const MENTOR_UPCOMING_TASKS_ERROR = "MENTOR_UPCOMING_TASKS_error";

export const GET_STUDENT_NOTIFICATION_REQUEST =
  "GET_STUDENT_NOTIFICATION_request";
export const GET_STUDENT_NOTIFICATION_SUCCESS =
  "GET_STUDENT_NOTIFICATION_success";
export const GET_STUDENT_NOTIFICATION_ERROR = "GET_STUDENT_NOTIFICATION_error";

export const GET_MENTOR_NOTIFICATION_REQUEST =
  "GET_MENTOR_NOTIFICATION_request";
export const GET_MENTOR_NOTIFICATION_SUCCESS =
  "GET_MENTOR_NOTIFICATION_success";
export const GET_MENTOR_NOTIFICATION_ERROR = "GET_MENTOR_NOTIFICATION_error";

export const getMentorNotificationList = id => dispatch => {
  dispatch({ type: GET_MENTOR_NOTIFICATION_REQUEST });
  return axiosInstance
    .get(
      `/getMentorNotification?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${id}`
    )
    .then(res => {
      dispatch({
        type: GET_MENTOR_NOTIFICATION_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_NOTIFICATION_ERROR,
        error: err.response.data
      });
    });
};

export const getStudentNotificationList = id => dispatch => {
  dispatch({ type: GET_STUDENT_NOTIFICATION_REQUEST });
  return axiosInstance
    .get(
      `/getStudentNotificationList?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${id}`
    )
    .then(res => {
      dispatch({
        type: GET_STUDENT_NOTIFICATION_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_NOTIFICATION_ERROR,
        error: err.response.data
      });
    });
};

export const mentorUpcomingTasks = id => dispatch => {
  dispatch({ type: MENTOR_UPCOMING_TASKS_REQUEST });
  return axiosInstance
    .get(
      `/getMentorUpcomingTask?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${id}`
    )
    .then(res => {
      dispatch({
        type: MENTOR_UPCOMING_TASKS_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: MENTOR_UPCOMING_TASKS_ERROR,
        error: err.response.data
      });
    });
};

export const getStudentCourseDetails = batch_id => dispatch => {
  dispatch({ type: GET_STUDENT_COURSE_DETAILS_REQUEST });
  return axiosInstance
    .get(
      `/getStudentBatchDetails?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: GET_STUDENT_COURSE_DETAILS_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_COURSE_DETAILS_ERROR,
        error: err.response.data
      });
    });
};
export const getStudentProgress = batch_id => dispatch => {
  dispatch({ type: GET_STUDENT_PROGRESS_REQUEST });
  return axiosInstance
    .get(
      `/getUserProgress?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: GET_STUDENT_PROGRESS_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_PROGRESS_ERROR,
        error: err.response.data
      });
    });
};

export const getStudentAssignmentList = batch_id => dispatch => {
  dispatch({ type: GET_STUDENT_ASSIGNMENT_LIST_REQUEST });
  return axiosInstance
    .get(
      `/getUserAssignments?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: GET_STUDENT_ASSIGNMENT_LIST_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_ASSIGNMENT_LIST_ERROR,
        error: err.response.data
      });
    });
};

export const getStudentDashboardData = batch_id => dispatch => {
  dispatch({ type: GET_STUDENT_DASHBOARD_DATA_REQUEST });
  return axiosInstance
    .get(
      `/getUserDashboardData?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: GET_STUDENT_DASHBOARD_DATA_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_STUDENT_DASHBOARD_DATA_ERROR,
        error: err.response.data
      });
    });
};
export const studentUpcomingTasks = batch_id => dispatch => {
  dispatch({ type: STUDENT_UPCOMING_TASKS_REQUEST });
  return axiosInstance
    .get(
      `/getStudentUpcomingTask?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: STUDENT_UPCOMING_TASKS_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: STUDENT_UPCOMING_TASKS_ERROR,
        error: err.response.data
      });
    });
};
export const studentBatchMates = batch_id => dispatch => {
  dispatch({ type: STUDENT_BATCH_MATES_REQUEST });
  return axiosInstance
    .get(
      `/getStudentBatchMatesList?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: STUDENT_BATCH_MATES_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: STUDENT_BATCH_MATES_ERROR,
        error: err.response.data
      });
    });
};

export const updateMentorProfile = payload => dispatch => {
  dispatch({ type: UPDATE_PROFILE_DATA_REQUEST });
  return axiosInstance
    .post(`/updateUserProfile`, payload)
    .then(res => {
      dispatch({
        type: UPDATE_PROFILE_DATA_SUCCESS,
        data: res.data.data
      });
      return {
        type: UPDATE_PROFILE_DATA_SUCCESS,
        data: res.data.data
      };
    })
    .catch(err => {
      dispatch({
        type: UPDATE_PROFILE_DATA_ERROR,
        error: err.response.data
      });
      return {
        type: UPDATE_PROFILE_DATA_ERROR,
        error: err.response.data
      };
    });
};

export const getMentorBatches = () => dispatch => {
  dispatch({ type: GET_MENTOR_BATCHLIST_REQUEST });
  return axiosInstance
    .get(`/getMentorBatchList?access_token=${Cookies.get(COOKIE_TOKEN)}`)
    .then(res => {
      dispatch({
        type: GET_MENTOR_BATCHLIST_SUCCESS,
        data: res.data.data
      });
      return {
        type: GET_MENTOR_BATCHLIST_SUCCESS,
        data: res.data.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_BATCHLIST_ERROR,
        error: err.response.data
      });
    });
};

export const getMentorStudentList = batchCode => dispatch => {
  dispatch({ type: GET_MENTOR_STUDENTLIST_REQUEST });
  return axiosInstance
    .get(
      `/getMentorBatchStudentList?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batchCode}`
    )
    .then(res => {
      dispatch({
        type: GET_MENTOR_STUDENTLIST_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_STUDENTLIST_ERROR,
        error: err.response.data
      });
    });
};

export const getMentorDashboardData = (
  batchCode,
  startsAt,
  endsAt
) => dispatch => {
  dispatch({ type: GET_MENTOR_DASHBOARD_DATA_REQUEST });
  return axiosInstance
    .get(
      `/getMentorDashboard?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batchCode}&startsAt=${startsAt}&endsAt=${endsAt}`
    )
    .then(res => {
      dispatch({
        type: GET_MENTOR_DASHBOARD_DATA_SUCCESS,
        data: res.data.data
      });
      return {
        data: res.data.data
      };
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_DASHBOARD_DATA_ERROR,
        error: err.response.data
      });
    });
};

export const deleteAssignment = assignmentId => dispatch => {
  dispatch({ type: DELETE_ASSIGNEMNT_REQUEST });
  return axiosInstance
    .delete(
      `/deleteAssignment?assignment_id=${assignmentId}&access_token=${Cookies.get(
        COOKIE_TOKEN
      )}`
    )
    .then(res => {
      dispatch({
        type: DELETE_ASSIGNEMNT_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_ASSIGNEMNT_ERROR,
        error: err.response.data
      });
    });
};

export const updateStudentAssignmentScore = payload => dispatch => {
  dispatch({ type: UPDATE_STUDENT_SCORE_REQUEST });
  return axiosInstance
    .post(`/updateStudentAssignmentScore`, payload)
    .then(res => {
      dispatch({
        type: UPDATE_STUDENT_SCORE_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_STUDENT_SCORE_ERROR,
        error: err.response.data
      });
    });
};

export const getSubmittedAssignmentList = assignment_id => dispatch => {
  dispatch({ type: SUBMITTED_ASSIGNMENT_LIST_REQUEST });
  return axiosInstance
    .get(
      `/getSubmittedAssignmentList?assignment_id=${assignment_id}&access_token=${Cookies.get(
        COOKIE_TOKEN
      )}`
    )
    .then(res => {
      dispatch({
        type: SUBMITTED_ASSIGNMENT_LIST_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: SUBMITTED_ASSIGNMENT_LIST_ERROR,
        error: err.response.data
      });
    });
};

export const getMentorAssignmentList = batch_id => dispatch => {
  dispatch({ type: GET_MENTOR_ASSIGNMENT_LIST_REQUEST });
  return axiosInstance
    .get(
      `/getMentorAssignmentList?access_token=${Cookies.get(
        COOKIE_TOKEN
      )}&batch_id=${batch_id}`
    )
    .then(res => {
      dispatch({
        type: GET_MENTOR_ASSIGNMENT_LIST_SUCCESS,
        data: res.data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MENTOR_ASSIGNMENT_LIST_ERROR,
        error: err.response.data
      });
    });
};

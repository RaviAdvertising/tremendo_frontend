exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 1957:
/***/ ((module) => {

// Exports
module.exports = {
	"blackFooterbase": "Footer_blackFooterbase__K-AK2",
	"copyright": "Footer_copyright__PzPTf",
	"heading": "Footer_heading__gm0l-",
	"subheading": "Footer_subheading__2cHk5",
	"whiteFooter": "Footer_whiteFooter__3ILo5",
	"followIcons": "Footer_followIcons__2xG-a",
	"footerSection": "Footer_footerSection__1c4ZC",
	"socialSection": "Footer_socialSection__2Pp4C",
	"socialIcons": "Footer_socialIcons__2Ik0l",
	"footerItem": "Footer_footerItem__SEILv"
};


/***/ }),

/***/ 3019:
/***/ ((module) => {

// Exports
module.exports = {
	"menuWrapper": "Navbar_menuWrapper__1-Vz_",
	"dropdownWrapper": "Navbar_dropdownWrapper__31X8k",
	"itemWrapper": "Navbar_itemWrapper__28NfD",
	"activeItemWrapper": "Navbar_activeItemWrapper__10JqA",
	"menuStyling": "Navbar_menuStyling__aEejZ",
	"signUpButton": "Navbar_signUpButton__kPWml",
	"mobileBase": "Navbar_mobileBase__1ibiM",
	"toggleIcon": "Navbar_toggleIcon__DmOJP",
	"overlayBase": "Navbar_overlayBase__1x5It",
	"contentWrapper": "Navbar_contentWrapper__3eWl8",
	"line": "Navbar_line__1dPq4",
	"hamburger": "Navbar_hamburger__3-LCr",
	"mwebMenus": "Navbar_mwebMenus__2kizc",
	"mwebLanguage": "Navbar_mwebLanguage__2myJE",
	"profileName": "Navbar_profileName__ZS9ZV",
	"profileOptions": "Navbar_profileOptions__2qO_e",
	"profileLogout": "Navbar_profileLogout__1o9dF"
};


/***/ }),

/***/ 4938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cn": () => (/* binding */ LOGIN_REQUEST),
/* harmony export */   "XP": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "iP": () => (/* binding */ LOGIN_ERROR),
/* harmony export */   "yc": () => (/* binding */ SIGNUP_REQUEST),
/* harmony export */   "Nh": () => (/* binding */ SIGNUP_SUCCESS),
/* harmony export */   "vK": () => (/* binding */ SIGNUP_ERROR),
/* harmony export */   "ev": () => (/* binding */ SUBSCRIBE_REQUEST),
/* harmony export */   "ZC": () => (/* binding */ SUBSCRIBE_SUCCESS),
/* harmony export */   "Lo": () => (/* binding */ SUBSCRIBE_ERROR),
/* harmony export */   "y": () => (/* binding */ LOGOUT_REQUEST),
/* harmony export */   "$x": () => (/* binding */ LOGOUT_SUCCESS),
/* harmony export */   "xI": () => (/* binding */ LOGOUT_ERROR),
/* harmony export */   "ge": () => (/* binding */ GET_USER_PROFILE_REQUEST),
/* harmony export */   "gA": () => (/* binding */ GET_USER_PROFILE_SUCCESS),
/* harmony export */   "tv": () => (/* binding */ GET_USER_PROFILE_ERROR),
/* harmony export */   "ZP": () => (/* binding */ socialMediaAuth),
/* harmony export */   "i8": () => (/* binding */ loginAuth),
/* harmony export */   "q9": () => (/* binding */ signupAuth),
/* harmony export */   "Aq": () => (/* binding */ logoutAuth),
/* harmony export */   "et": () => (/* binding */ getUserProfile),
/* harmony export */   "Ld": () => (/* binding */ subscribe)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9016);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
/* harmony import */ var _utils_firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
([_utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const LOGIN_REQUEST = "login_request";
const LOGIN_SUCCESS = "login_success";
const LOGIN_ERROR = "login_error";
const SIGNUP_REQUEST = "signup_request";
const SIGNUP_SUCCESS = "signup_success";
const SIGNUP_ERROR = "signup_error";
const SUBSCRIBE_REQUEST = "SUBSCRIBE_request";
const SUBSCRIBE_SUCCESS = "SUBSCRIBE_success";
const SUBSCRIBE_ERROR = "SUBSCRIBE_error";
const LOGOUT_REQUEST = "logout_request";
const LOGOUT_SUCCESS = "logout_success";
const LOGOUT_ERROR = "logout_error";
const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_request";
const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_success";
const GET_USER_PROFILE_ERROR = "GET_USER_PROFILE_error";
function socialMediaAuth(provider) {
    return _utils_firebase_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"].auth */ .Z.auth().signInWithPopup(provider).then((res)=>{
        return res.user;
    }).catch((err)=>{
        return err;
    });
};
const loginAuth = (payload)=>(dispatch)=>{
        dispatch({
            type: LOGIN_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/login", payload).then((res)=>{
            dispatch({
                type: LOGIN_SUCCESS,
                data: res.data.data
            });
            return {
                type: LOGIN_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: LOGIN_ERROR,
                error: err.response.data
            });
            return {
                type: LOGIN_ERROR,
                error: err.response.data
            };
        });
    }
;
const signupAuth = (payload)=>(dispatch)=>{
        dispatch({
            type: SIGNUP_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/signup", payload).then((res)=>{
            dispatch({
                type: SIGNUP_SUCCESS,
                data: res.data.data
            });
            return {
                type: SIGNUP_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: SIGNUP_ERROR,
                error: err.response.data
            });
            return {
                type: SIGNUP_ERROR,
                error: err.response.data
            };
        });
    }
;
const logoutAuth = (token)=>(dispatch)=>{
        dispatch({
            type: LOGOUT_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](`/logout?access_token=${token}`).then((res)=>{
            dispatch({
                type: LOGOUT_SUCCESS,
                data: res.data.data
            });
            return {
                type: LOGOUT_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: LOGOUT_ERROR,
                error: err.response.data
            });
            return {
                type: LOGOUT_ERROR,
                error: err.response.data
            };
        });
    }
;
const getUserProfile = (accessType)=>{
    return (dispatch)=>{
        dispatch({
            type: GET_USER_PROFILE_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getProfile?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_TOKEN */ .t5)}&access_type=${accessType}`).then((res)=>{
            dispatch({
                type: GET_USER_PROFILE_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_USER_PROFILE_SUCCESS,
                data: res.data.data
            };
        }).catch((err)=>{
            var ref;
            dispatch({
                type: GET_USER_PROFILE_ERROR,
                error: (ref = err.response) === null || ref === void 0 ? void 0 : ref.data
            });
        });
    };
};
const subscribe = (email)=>(dispatch)=>{
        dispatch({
            type: SUBSCRIBE_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post("/subscribeMe", {
            email: email
        }).then((res)=>{
            dispatch({
                type: SUBSCRIBE_SUCCESS,
                data: res.data
            });
            return {
                type: SUBSCRIBE_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: SUBSCRIBE_ERROR,
                error: err.response.data
            });
        });
    }
;

});

/***/ }),

/***/ 3897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hI": () => (/* binding */ GET_STUDENT_DASHBOARD_DATA_REQUEST),
/* harmony export */   "vE": () => (/* binding */ GET_STUDENT_DASHBOARD_DATA_SUCCESS),
/* harmony export */   "O2": () => (/* binding */ GET_STUDENT_DASHBOARD_DATA_ERROR),
/* harmony export */   "rB": () => (/* binding */ UPDATE_PROFILE_DATA_REQUEST),
/* harmony export */   "O$": () => (/* binding */ UPDATE_PROFILE_DATA_SUCCESS),
/* harmony export */   "FV": () => (/* binding */ UPDATE_PROFILE_DATA_ERROR),
/* harmony export */   "sK": () => (/* binding */ GET_MENTOR_BATCHLIST_REQUEST),
/* harmony export */   "$t": () => (/* binding */ GET_MENTOR_BATCHLIST_SUCCESS),
/* harmony export */   "ag": () => (/* binding */ GET_MENTOR_BATCHLIST_ERROR),
/* harmony export */   "Jv": () => (/* binding */ GET_MENTOR_STUDENTLIST_REQUEST),
/* harmony export */   "mM": () => (/* binding */ GET_MENTOR_STUDENTLIST_SUCCESS),
/* harmony export */   "OK": () => (/* binding */ GET_MENTOR_STUDENTLIST_ERROR),
/* harmony export */   "jB": () => (/* binding */ GET_MENTOR_DASHBOARD_DATA_REQUEST),
/* harmony export */   "bg": () => (/* binding */ GET_MENTOR_DASHBOARD_DATA_SUCCESS),
/* harmony export */   "VN": () => (/* binding */ GET_MENTOR_DASHBOARD_DATA_ERROR),
/* harmony export */   "mg": () => (/* binding */ UPDATE_STUDENT_SCORE_REQUEST),
/* harmony export */   "dw": () => (/* binding */ UPDATE_STUDENT_SCORE_SUCCESS),
/* harmony export */   "Fn": () => (/* binding */ UPDATE_STUDENT_SCORE_ERROR),
/* harmony export */   "X$": () => (/* binding */ SUBMITTED_ASSIGNMENT_LIST_REQUEST),
/* harmony export */   "Ar": () => (/* binding */ SUBMITTED_ASSIGNMENT_LIST_SUCCESS),
/* harmony export */   "qI": () => (/* binding */ SUBMITTED_ASSIGNMENT_LIST_ERROR),
/* harmony export */   "xP": () => (/* binding */ GET_MENTOR_ASSIGNMENT_LIST_REQUEST),
/* harmony export */   "OG": () => (/* binding */ GET_MENTOR_ASSIGNMENT_LIST_SUCCESS),
/* harmony export */   "Ej": () => (/* binding */ GET_MENTOR_ASSIGNMENT_LIST_ERROR),
/* harmony export */   "bb": () => (/* binding */ STUDENT_UPCOMING_TASKS_REQUEST),
/* harmony export */   "s5": () => (/* binding */ STUDENT_UPCOMING_TASKS_SUCCESS),
/* harmony export */   "LU": () => (/* binding */ STUDENT_UPCOMING_TASKS_ERROR),
/* harmony export */   "K1": () => (/* binding */ STUDENT_BATCH_MATES_REQUEST),
/* harmony export */   "PX": () => (/* binding */ STUDENT_BATCH_MATES_SUCCESS),
/* harmony export */   "OJ": () => (/* binding */ STUDENT_BATCH_MATES_ERROR),
/* harmony export */   "Lj": () => (/* binding */ GET_STUDENT_ASSIGNMENT_LIST_REQUEST),
/* harmony export */   "OD": () => (/* binding */ GET_STUDENT_ASSIGNMENT_LIST_SUCCESS),
/* harmony export */   "HP": () => (/* binding */ GET_STUDENT_ASSIGNMENT_LIST_ERROR),
/* harmony export */   "K_": () => (/* binding */ GET_STUDENT_PROGRESS_REQUEST),
/* harmony export */   "Ac": () => (/* binding */ GET_STUDENT_PROGRESS_SUCCESS),
/* harmony export */   "Uc": () => (/* binding */ GET_STUDENT_PROGRESS_ERROR),
/* harmony export */   "yE": () => (/* binding */ GET_STUDENT_COURSE_DETAILS_REQUEST),
/* harmony export */   "Yp": () => (/* binding */ GET_STUDENT_COURSE_DETAILS_SUCCESS),
/* harmony export */   "oZ": () => (/* binding */ GET_STUDENT_COURSE_DETAILS_ERROR),
/* harmony export */   "ko": () => (/* binding */ MENTOR_UPCOMING_TASKS_REQUEST),
/* harmony export */   "NL": () => (/* binding */ MENTOR_UPCOMING_TASKS_SUCCESS),
/* harmony export */   "C5": () => (/* binding */ MENTOR_UPCOMING_TASKS_ERROR),
/* harmony export */   "Es": () => (/* binding */ GET_STUDENT_NOTIFICATION_REQUEST),
/* harmony export */   "Ke": () => (/* binding */ GET_STUDENT_NOTIFICATION_SUCCESS),
/* harmony export */   "z6": () => (/* binding */ GET_STUDENT_NOTIFICATION_ERROR),
/* harmony export */   "kU": () => (/* binding */ GET_MENTOR_NOTIFICATION_REQUEST),
/* harmony export */   "TV": () => (/* binding */ GET_MENTOR_NOTIFICATION_SUCCESS),
/* harmony export */   "Mf": () => (/* binding */ GET_MENTOR_NOTIFICATION_ERROR),
/* harmony export */   "kB": () => (/* binding */ getMentorNotificationList),
/* harmony export */   "SC": () => (/* binding */ getStudentNotificationList),
/* harmony export */   "BR": () => (/* binding */ mentorUpcomingTasks),
/* harmony export */   "R1": () => (/* binding */ getStudentCourseDetails),
/* harmony export */   "VQ": () => (/* binding */ getStudentProgress),
/* harmony export */   "ZN": () => (/* binding */ getStudentAssignmentList),
/* harmony export */   "Zs": () => (/* binding */ getStudentDashboardData),
/* harmony export */   "Y4": () => (/* binding */ studentUpcomingTasks),
/* harmony export */   "DL": () => (/* binding */ studentBatchMates),
/* harmony export */   "br": () => (/* binding */ updateMentorProfile),
/* harmony export */   "G6": () => (/* binding */ getMentorBatches),
/* harmony export */   "FK": () => (/* binding */ getMentorStudentList),
/* harmony export */   "Rj": () => (/* binding */ getMentorDashboardData),
/* harmony export */   "CT": () => (/* binding */ deleteAssignment),
/* harmony export */   "OQ": () => (/* binding */ updateStudentAssignmentScore),
/* harmony export */   "XA": () => (/* binding */ getSubmittedAssignmentList),
/* harmony export */   "Qc": () => (/* binding */ getMentorAssignmentList)
/* harmony export */ });
/* unused harmony exports DELETE_ASSIGNEMNT_REQUEST, DELETE_ASSIGNEMNT_SUCCESS, DELETE_ASSIGNEMNT_ERROR */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9016);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const GET_STUDENT_DASHBOARD_DATA_REQUEST = "get_student_dashboard_Data_request";
const GET_STUDENT_DASHBOARD_DATA_SUCCESS = "get_student_dashboard_Data_success";
const GET_STUDENT_DASHBOARD_DATA_ERROR = "get_student_dashboard_Data_error";
const UPDATE_PROFILE_DATA_REQUEST = "UPDATE_PROFILE_DATA_request";
const UPDATE_PROFILE_DATA_SUCCESS = "UPDATE_PROFILE_DATA_success";
const UPDATE_PROFILE_DATA_ERROR = "UPDATE_PROFILE_DATA_error";
const GET_MENTOR_BATCHLIST_REQUEST = "GET_MENTOR_BATCHLIST_request";
const GET_MENTOR_BATCHLIST_SUCCESS = "GET_MENTOR_BATCHLIST_success";
const GET_MENTOR_BATCHLIST_ERROR = "GET_MENTOR_BATCHLIST_error";
const GET_MENTOR_STUDENTLIST_REQUEST = "GET_MENTOR_STUDENTLIST_request";
const GET_MENTOR_STUDENTLIST_SUCCESS = "GET_MENTOR_STUDENTLIST_success";
const GET_MENTOR_STUDENTLIST_ERROR = "GET_MENTOR_STUDENTLIST_error";
const GET_MENTOR_DASHBOARD_DATA_REQUEST = "GET_MENTOR_DASHBOARD_DATA_request";
const GET_MENTOR_DASHBOARD_DATA_SUCCESS = "GET_MENTOR_DASHBOARD_DATA_success";
const GET_MENTOR_DASHBOARD_DATA_ERROR = "GET_MENTOR_DASHBOARD_DATA_error";
const DELETE_ASSIGNEMNT_REQUEST = "DELETE_ASSIGNEMNT_request";
const DELETE_ASSIGNEMNT_SUCCESS = "DELETE_ASSIGNEMNT_success";
const DELETE_ASSIGNEMNT_ERROR = "DELETE_ASSIGNEMNT_error";
const UPDATE_STUDENT_SCORE_REQUEST = "UPDATE_STUDENT_SCORE_request";
const UPDATE_STUDENT_SCORE_SUCCESS = "UPDATE_STUDENT_SCORE_success";
const UPDATE_STUDENT_SCORE_ERROR = "UPDATE_STUDENT_SCORE_error";
const SUBMITTED_ASSIGNMENT_LIST_REQUEST = "SUBMITTED_ASSIGNMENT_LIST_request";
const SUBMITTED_ASSIGNMENT_LIST_SUCCESS = "SUBMITTED_ASSIGNMENT_LIST_success";
const SUBMITTED_ASSIGNMENT_LIST_ERROR = "SUBMITTED_ASSIGNMENT_LIST_error";
const GET_MENTOR_ASSIGNMENT_LIST_REQUEST = "GET_MENTOR_ASSIGNMENT_LIST_request";
const GET_MENTOR_ASSIGNMENT_LIST_SUCCESS = "GET_MENTOR_ASSIGNMENT_LIST_success";
const GET_MENTOR_ASSIGNMENT_LIST_ERROR = "GET_MENTOR_ASSIGNMENT_LIST_error";
const STUDENT_UPCOMING_TASKS_REQUEST = "STUDENT_UPCOMING_TASKS_request";
const STUDENT_UPCOMING_TASKS_SUCCESS = "STUDENT_UPCOMING_TASKS_success";
const STUDENT_UPCOMING_TASKS_ERROR = "STUDENT_UPCOMING_TASKS_error";
const STUDENT_BATCH_MATES_REQUEST = "STUDENT_BATCH_MATES_request";
const STUDENT_BATCH_MATES_SUCCESS = "STUDENT_BATCH_MATES_success";
const STUDENT_BATCH_MATES_ERROR = "STUDENT_BATCH_MATES_error";
const GET_STUDENT_ASSIGNMENT_LIST_REQUEST = "GET_STUDENT_ASSIGNMENT_LIST_request";
const GET_STUDENT_ASSIGNMENT_LIST_SUCCESS = "GET_STUDENT_ASSIGNMENT_LIST_success";
const GET_STUDENT_ASSIGNMENT_LIST_ERROR = "GET_STUDENT_ASSIGNMENT_LIST_error";
const GET_STUDENT_PROGRESS_REQUEST = "GET_STUDENT_PROGRESS_request";
const GET_STUDENT_PROGRESS_SUCCESS = "GET_STUDENT_PROGRESS_success";
const GET_STUDENT_PROGRESS_ERROR = "GET_STUDENT_PROGRESS_error";
const GET_STUDENT_COURSE_DETAILS_REQUEST = "GET_STUDENT_COURSE_DETAILS_request";
const GET_STUDENT_COURSE_DETAILS_SUCCESS = "GET_STUDENT_COURSE_DETAILS_success";
const GET_STUDENT_COURSE_DETAILS_ERROR = "GET_STUDENT_COURSE_DETAILS_error";
const MENTOR_UPCOMING_TASKS_REQUEST = "MENTOR_UPCOMING_TASKS_request";
const MENTOR_UPCOMING_TASKS_SUCCESS = "MENTOR_UPCOMING_TASKS_success";
const MENTOR_UPCOMING_TASKS_ERROR = "MENTOR_UPCOMING_TASKS_error";
const GET_STUDENT_NOTIFICATION_REQUEST = "GET_STUDENT_NOTIFICATION_request";
const GET_STUDENT_NOTIFICATION_SUCCESS = "GET_STUDENT_NOTIFICATION_success";
const GET_STUDENT_NOTIFICATION_ERROR = "GET_STUDENT_NOTIFICATION_error";
const GET_MENTOR_NOTIFICATION_REQUEST = "GET_MENTOR_NOTIFICATION_request";
const GET_MENTOR_NOTIFICATION_SUCCESS = "GET_MENTOR_NOTIFICATION_success";
const GET_MENTOR_NOTIFICATION_ERROR = "GET_MENTOR_NOTIFICATION_error";
const getMentorNotificationList = (id)=>(dispatch)=>{
        dispatch({
            type: GET_MENTOR_NOTIFICATION_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getMentorNotification?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${id}`).then((res)=>{
            dispatch({
                type: GET_MENTOR_NOTIFICATION_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_MENTOR_NOTIFICATION_ERROR,
                error: err.response.data
            });
        });
    }
;
const getStudentNotificationList = (id)=>(dispatch)=>{
        dispatch({
            type: GET_STUDENT_NOTIFICATION_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getStudentNotificationList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${id}`).then((res)=>{
            dispatch({
                type: GET_STUDENT_NOTIFICATION_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_STUDENT_NOTIFICATION_ERROR,
                error: err.response.data
            });
        });
    }
;
const mentorUpcomingTasks = (id)=>(dispatch)=>{
        dispatch({
            type: MENTOR_UPCOMING_TASKS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getMentorUpcomingTask?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${id}`).then((res)=>{
            dispatch({
                type: MENTOR_UPCOMING_TASKS_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: MENTOR_UPCOMING_TASKS_ERROR,
                error: err.response.data
            });
        });
    }
;
const getStudentCourseDetails = (batch_id)=>(dispatch)=>{
        dispatch({
            type: GET_STUDENT_COURSE_DETAILS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getStudentBatchDetails?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: GET_STUDENT_COURSE_DETAILS_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_STUDENT_COURSE_DETAILS_ERROR,
                error: err.response.data
            });
        });
    }
;
const getStudentProgress = (batch_id)=>(dispatch)=>{
        dispatch({
            type: GET_STUDENT_PROGRESS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getUserProgress?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: GET_STUDENT_PROGRESS_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_STUDENT_PROGRESS_ERROR,
                error: err.response.data
            });
        });
    }
;
const getStudentAssignmentList = (batch_id)=>(dispatch)=>{
        dispatch({
            type: GET_STUDENT_ASSIGNMENT_LIST_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getUserAssignments?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: GET_STUDENT_ASSIGNMENT_LIST_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_STUDENT_ASSIGNMENT_LIST_ERROR,
                error: err.response.data
            });
        });
    }
;
const getStudentDashboardData = (batch_id)=>(dispatch)=>{
        dispatch({
            type: GET_STUDENT_DASHBOARD_DATA_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getUserDashboardData?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: GET_STUDENT_DASHBOARD_DATA_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_STUDENT_DASHBOARD_DATA_ERROR,
                error: err.response.data
            });
        });
    }
;
const studentUpcomingTasks = (batch_id)=>(dispatch)=>{
        dispatch({
            type: STUDENT_UPCOMING_TASKS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getStudentUpcomingTask?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: STUDENT_UPCOMING_TASKS_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: STUDENT_UPCOMING_TASKS_ERROR,
                error: err.response.data
            });
        });
    }
;
const studentBatchMates = (batch_id)=>(dispatch)=>{
        dispatch({
            type: STUDENT_BATCH_MATES_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getStudentBatchMatesList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: STUDENT_BATCH_MATES_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: STUDENT_BATCH_MATES_ERROR,
                error: err.response.data
            });
        });
    }
;
const updateMentorProfile = (payload)=>(dispatch)=>{
        dispatch({
            type: UPDATE_PROFILE_DATA_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post(`/updateUserProfile`, payload).then((res)=>{
            dispatch({
                type: UPDATE_PROFILE_DATA_SUCCESS,
                data: res.data.data
            });
            return {
                type: UPDATE_PROFILE_DATA_SUCCESS,
                data: res.data.data
            };
        }).catch((err)=>{
            dispatch({
                type: UPDATE_PROFILE_DATA_ERROR,
                error: err.response.data
            });
            return {
                type: UPDATE_PROFILE_DATA_ERROR,
                error: err.response.data
            };
        });
    }
;
const getMentorBatches = ()=>(dispatch)=>{
        dispatch({
            type: GET_MENTOR_BATCHLIST_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getMentorBatchList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}`).then((res)=>{
            dispatch({
                type: GET_MENTOR_BATCHLIST_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_MENTOR_BATCHLIST_SUCCESS,
                data: res.data.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_MENTOR_BATCHLIST_ERROR,
                error: err.response.data
            });
        });
    }
;
const getMentorStudentList = (batchCode)=>(dispatch)=>{
        dispatch({
            type: GET_MENTOR_STUDENTLIST_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getMentorBatchStudentList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batchCode}`).then((res)=>{
            dispatch({
                type: GET_MENTOR_STUDENTLIST_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_MENTOR_STUDENTLIST_ERROR,
                error: err.response.data
            });
        });
    }
;
const getMentorDashboardData = (batchCode, startsAt, endsAt)=>(dispatch)=>{
        dispatch({
            type: GET_MENTOR_DASHBOARD_DATA_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getMentorDashboard?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batchCode}&startsAt=${startsAt}&endsAt=${endsAt}`).then((res)=>{
            dispatch({
                type: GET_MENTOR_DASHBOARD_DATA_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_MENTOR_DASHBOARD_DATA_ERROR,
                error: err.response.data
            });
        });
    }
;
const deleteAssignment = (assignmentId)=>(dispatch)=>{
        dispatch({
            type: DELETE_ASSIGNEMNT_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"]["delete"] */ .Z["delete"](`/deleteAssignment?assignment_id=${assignmentId}&access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}`).then((res)=>{
            dispatch({
                type: DELETE_ASSIGNEMNT_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: DELETE_ASSIGNEMNT_ERROR,
                error: err.response.data
            });
        });
    }
;
const updateStudentAssignmentScore = (payload)=>(dispatch)=>{
        dispatch({
            type: UPDATE_STUDENT_SCORE_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post(`/updateStudentAssignmentScore`, payload).then((res)=>{
            dispatch({
                type: UPDATE_STUDENT_SCORE_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: UPDATE_STUDENT_SCORE_ERROR,
                error: err.response.data
            });
        });
    }
;
const getSubmittedAssignmentList = (assignment_id)=>(dispatch)=>{
        dispatch({
            type: SUBMITTED_ASSIGNMENT_LIST_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getSubmittedAssignmentList?assignment_id=${assignment_id}&access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}`).then((res)=>{
            dispatch({
                type: SUBMITTED_ASSIGNMENT_LIST_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: SUBMITTED_ASSIGNMENT_LIST_ERROR,
                error: err.response.data
            });
        });
    }
;
const getMentorAssignmentList = (batch_id)=>(dispatch)=>{
        dispatch({
            type: GET_MENTOR_ASSIGNMENT_LIST_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(`/getMentorAssignmentList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)}&batch_id=${batch_id}`).then((res)=>{
            dispatch({
                type: GET_MENTOR_ASSIGNMENT_LIST_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_MENTOR_ASSIGNMENT_LIST_ERROR,
                error: err.response.data
            });
        });
    }
;

});

/***/ }),

/***/ 2132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sm": () => (/* binding */ GET_LANGUAGE_REQUEST),
/* harmony export */   "FH": () => (/* binding */ GET_LANGUAGE_SUCCESS),
/* harmony export */   "qj": () => (/* binding */ GET_LANGUAGE_ERROR),
/* harmony export */   "gt": () => (/* binding */ GET_PAGE_DATA_REQUEST),
/* harmony export */   "Um": () => (/* binding */ GET_PAGE_DATA_SUCCESS),
/* harmony export */   "xI": () => (/* binding */ GET_PAGE_DATA_ERROR),
/* harmony export */   "b0": () => (/* binding */ GET_REVIEW_DATA_REQUEST),
/* harmony export */   "y1": () => (/* binding */ GET_REVIEW_DATA_SUCCESS),
/* harmony export */   "$m": () => (/* binding */ GET_REVIEW_DATA_ERROR),
/* harmony export */   "Cg": () => (/* binding */ SET_REVIEW_DATA_REQUEST),
/* harmony export */   "Ic": () => (/* binding */ SET_REVIEW_DATA_SUCCESS),
/* harmony export */   "kI": () => (/* binding */ SET_REVIEW_DATA_ERROR),
/* harmony export */   "o_": () => (/* binding */ GET_REVIEW_DETAILS_REQUEST),
/* harmony export */   "Uj": () => (/* binding */ GET_REVIEW_DETAILS_SUCCESS),
/* harmony export */   "sJ": () => (/* binding */ GET_REVIEW_DETAILS_ERROR),
/* harmony export */   "UD": () => (/* binding */ ADD_REVIEW_COMMENT_REQUEST),
/* harmony export */   "vM": () => (/* binding */ ADD_REVIEW_COMMENT_SUCCESS),
/* harmony export */   "cM": () => (/* binding */ ADD_REVIEW_COMMENT_ERROR),
/* harmony export */   "vI": () => (/* binding */ SET_REVIEW_LIKE_REQUEST),
/* harmony export */   "YK": () => (/* binding */ SET_REVIEW_LIKE_SUCCESS),
/* harmony export */   "TM": () => (/* binding */ SET_REVIEW_LIKE_ERROR),
/* harmony export */   "Hv": () => (/* binding */ CONTACT_US_REQUEST),
/* harmony export */   "g0": () => (/* binding */ CONTACT_US_SUCCESS),
/* harmony export */   "QP": () => (/* binding */ CONTACT_US_ERROR),
/* harmony export */   "iQ": () => (/* binding */ GET_BLOGS_REQUEST),
/* harmony export */   "Sk": () => (/* binding */ GET_BLOGS_SUCCESS),
/* harmony export */   "s1": () => (/* binding */ GET_BLOGS_ERROR),
/* harmony export */   "f_": () => (/* binding */ GET_FAQS_REQUEST),
/* harmony export */   "m5": () => (/* binding */ GET_FAQS_SUCCESS),
/* harmony export */   "ev": () => (/* binding */ GET_FAQS_ERROR),
/* harmony export */   "nz": () => (/* binding */ ADD_USER_FAQ_REQUEST),
/* harmony export */   "VD": () => (/* binding */ ADD_USER_FAQ_SUCCESS),
/* harmony export */   "Z_": () => (/* binding */ ADD_USER_FAQ_ERROR),
/* harmony export */   "vk": () => (/* binding */ GET_USER_FAQ_REQUEST),
/* harmony export */   "Fj": () => (/* binding */ GET_USER_FAQ_SUCCESS),
/* harmony export */   "ij": () => (/* binding */ GET_USER_FAQ_ERROR),
/* harmony export */   "Vb": () => (/* binding */ getLanguages),
/* harmony export */   "um": () => (/* binding */ getPageData),
/* harmony export */   "YG": () => (/* binding */ getReviewData),
/* harmony export */   "D8": () => (/* binding */ setReviewData),
/* harmony export */   "e$": () => (/* binding */ getReviewDetails),
/* harmony export */   "oN": () => (/* binding */ addReviewComments),
/* harmony export */   "$N": () => (/* binding */ setReviewLikeStatus),
/* harmony export */   "hz": () => (/* binding */ contactUs),
/* harmony export */   "_Z": () => (/* binding */ getBlogs),
/* harmony export */   "nm": () => (/* binding */ getFaqs),
/* harmony export */   "SH": () => (/* binding */ addUserFaqs),
/* harmony export */   "c8": () => (/* binding */ getUserFaqs)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9016);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const GET_LANGUAGE_REQUEST = "get_language_request";
const GET_LANGUAGE_SUCCESS = "get_language_success";
const GET_LANGUAGE_ERROR = "get_language_error";
const GET_PAGE_DATA_REQUEST = "GET_PAGE_DATA_request";
const GET_PAGE_DATA_SUCCESS = "GET_PAGE_DATA_success";
const GET_PAGE_DATA_ERROR = "GET_PAGE_DATA_error";
const GET_REVIEW_DATA_REQUEST = "GET_REVIEW_DATA_request";
const GET_REVIEW_DATA_SUCCESS = "GET_REVIEW_DATA_success";
const GET_REVIEW_DATA_ERROR = "GET_REVIEW_DATA_error";
const SET_REVIEW_DATA_REQUEST = "SET_REVIEW_DATA_request";
const SET_REVIEW_DATA_SUCCESS = "SET_REVIEW_DATA_success";
const SET_REVIEW_DATA_ERROR = "SET_REVIEW_DATA_error";
const GET_REVIEW_DETAILS_REQUEST = "GET_REVIEW_DETAILS_request";
const GET_REVIEW_DETAILS_SUCCESS = "GET_REVIEW_DETAILS_success";
const GET_REVIEW_DETAILS_ERROR = "GET_REVIEW_DETAILS_error";
const ADD_REVIEW_COMMENT_REQUEST = "ADD_REVIEW_COMMENT_request";
const ADD_REVIEW_COMMENT_SUCCESS = "ADD_REVIEW_COMMENT_success";
const ADD_REVIEW_COMMENT_ERROR = "ADD_REVIEW_COMMENT_error";
const SET_REVIEW_LIKE_REQUEST = "SET_REVIEW_LIKE_request";
const SET_REVIEW_LIKE_SUCCESS = "SET_REVIEW_LIKE_success";
const SET_REVIEW_LIKE_ERROR = "SET_REVIEW_LIKE_error";
const CONTACT_US_REQUEST = "CONTACT_US_request";
const CONTACT_US_SUCCESS = "CONTACT_US_success";
const CONTACT_US_ERROR = "CONTACT_US_error";
const GET_BLOGS_REQUEST = "GET_BLOGS_request";
const GET_BLOGS_SUCCESS = "GET_BLOGS_success";
const GET_BLOGS_ERROR = "GET_BLOGS_error";
const GET_FAQS_REQUEST = "GET_FAQS_request";
const GET_FAQS_SUCCESS = "GET_FAQS_success";
const GET_FAQS_ERROR = "GET_FAQS_error";
const ADD_USER_FAQ_REQUEST = "ADD_USER_FAQ_request";
const ADD_USER_FAQ_SUCCESS = "ADD_USER_FAQ_success";
const ADD_USER_FAQ_ERROR = "ADD_USER_FAQ_error";
const GET_USER_FAQ_REQUEST = "GET_USER_FAQ_request";
const GET_USER_FAQ_SUCCESS = "GET_USER_FAQ_success";
const GET_USER_FAQ_ERROR = "GET_USER_FAQ_error";
const getLanguages = ()=>(dispatch)=>{
        dispatch({
            type: GET_LANGUAGE_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("/getLanguages").then((res)=>{
            dispatch({
                type: GET_LANGUAGE_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_LANGUAGE_SUCCESS,
                data: res.data.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_LANGUAGE_ERROR,
                error: err.message
            });
        });
    }
;
const getPageData = (pageType)=>(dispatch)=>{
        dispatch({
            type: GET_PAGE_DATA_REQUEST
        });
        _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getCommonData?page=${pageType}`).then((res)=>{
            dispatch({
                type: GET_PAGE_DATA_SUCCESS,
                data: res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type: GET_PAGE_DATA_ERROR,
                error: err.message
            });
        });
    }
;
const getReviewData = ()=>(dispatch)=>{
        dispatch({
            type: GET_REVIEW_DATA_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getCourseReview?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_TOKEN */ .t5)}`).then((res)=>{
            dispatch({
                type: GET_REVIEW_DATA_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_REVIEW_DATA_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_REVIEW_DATA_ERROR,
                error: err.response.data
            });
            return {
                type: GET_REVIEW_DATA_ERROR,
                error: err.response.data
            };
        });
    }
;
const setReviewData = (payload)=>(dispatch)=>{
        dispatch({
            type: SET_REVIEW_DATA_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/addCourseReview`, payload).then((res)=>{
            dispatch({
                type: SET_REVIEW_DATA_SUCCESS,
                data: res.data.data
            });
            return {
                type: SET_REVIEW_DATA_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: SET_REVIEW_DATA_ERROR,
                error: err.response.data
            });
            return {
                type: SET_REVIEW_DATA_ERROR,
                error: err.response.data
            };
        });
    }
;
const getReviewDetails = (id)=>(dispatch)=>{
        dispatch({
            type: GET_REVIEW_DETAILS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getCourseReviewDetails?id=${id}&access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_TOKEN */ .t5)}`).then((res)=>{
            dispatch({
                type: GET_REVIEW_DETAILS_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_REVIEW_DETAILS_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_REVIEW_DETAILS_ERROR,
                error: err.response.data
            });
            return {
                type: GET_REVIEW_DETAILS_ERROR,
                error: err.response.data
            };
        });
    }
;
const addReviewComments = (payload)=>(dispatch)=>{
        dispatch({
            type: ADD_REVIEW_COMMENT_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/addCourseReviewComment`, payload).then((res)=>{
            dispatch({
                type: ADD_REVIEW_COMMENT_SUCCESS,
                data: res.data.data
            });
            return {
                type: ADD_REVIEW_COMMENT_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: ADD_REVIEW_COMMENT_ERROR,
                error: err.response.data
            });
            return {
                type: ADD_REVIEW_COMMENT_ERROR,
                error: err.response.data
            };
        });
    }
;
const setReviewLikeStatus = (payload)=>(dispatch)=>{
        dispatch({
            type: SET_REVIEW_LIKE_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/updateCourseReviewLike`, payload).then((res)=>{
            dispatch({
                type: SET_REVIEW_LIKE_SUCCESS,
                data: res.data.data
            });
            return {
                type: SET_REVIEW_LIKE_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: SET_REVIEW_LIKE_ERROR,
                error: err.response.data
            });
            return {
                type: SET_REVIEW_LIKE_ERROR,
                error: err.response.data
            };
        });
    }
;
const contactUs = (payload)=>(dispatch)=>{
        dispatch({
            type: CONTACT_US_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/contactUs`, payload).then((res)=>{
            dispatch({
                type: CONTACT_US_SUCCESS,
                data: res.data.data
            });
            return {
                type: CONTACT_US_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: CONTACT_US_ERROR,
                error: err.response.data
            });
        });
    }
;
const getBlogs = ()=>(dispatch)=>{
        dispatch({
            type: GET_BLOGS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getCourseBlogList`).then((res)=>{
            dispatch({
                type: GET_BLOGS_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_BLOGS_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_BLOGS_ERROR,
                error: err.response.data
            });
        });
    }
;
const getFaqs = ()=>(dispatch)=>{
        dispatch({
            type: GET_FAQS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getCourseFaqs?faq_type=common`).then((res)=>{
            dispatch({
                type: GET_FAQS_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_FAQS_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_FAQS_ERROR,
                error: err.response.data
            });
        });
    }
;
const addUserFaqs = (payload)=>(dispatch)=>{
        dispatch({
            type: ADD_USER_FAQ_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post(`/addUserFaq`, payload).then((res)=>{
            dispatch({
                type: ADD_USER_FAQ_SUCCESS,
                data: res.data.data
            });
            return {
                type: ADD_USER_FAQ_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: ADD_USER_FAQ_ERROR,
                error: err.response.data
            });
        });
    }
;
const getUserFaqs = ()=>(dispatch)=>{
        dispatch({
            type: GET_USER_FAQ_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/getUserFaqs?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_TOKEN */ .t5)}`).then((res)=>{
            dispatch({
                type: GET_USER_FAQ_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_USER_FAQ_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_USER_FAQ_ERROR,
                error: err.response.data
            });
        });
    }
;

});

/***/ }),

/***/ 9213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ GET_LANGUAGE_DETAILS_REQUEST),
/* harmony export */   "Ed": () => (/* binding */ GET_LANGUAGE_DETAILS_SUCCESS),
/* harmony export */   "IW": () => (/* binding */ GET_LANGUAGE_DETAILS_ERROR),
/* harmony export */   "Eb": () => (/* binding */ SET_STUDENT_SELECTED_LANGUAGE),
/* harmony export */   "xW": () => (/* binding */ SET_MENTOR_BATCH_DETAIL),
/* harmony export */   "Z7": () => (/* binding */ getLangaugeDetails),
/* harmony export */   "yt": () => (/* binding */ setStudentSelectedLanguage),
/* harmony export */   "lA": () => (/* binding */ storeMentorBatch)
/* harmony export */ });
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9016);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__]);
_utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const GET_LANGUAGE_DETAILS_REQUEST = "get_language_details_request";
const GET_LANGUAGE_DETAILS_SUCCESS = "get_language_details_success";
const GET_LANGUAGE_DETAILS_ERROR = "get_language_details_error";
const SET_STUDENT_SELECTED_LANGUAGE = "setStudentSelectedLnagugae";
const SET_MENTOR_BATCH_DETAIL = "setMentorBatchDetails";
const getLangaugeDetails = (languageCode)=>(dispatch)=>{
        dispatch({
            type: GET_LANGUAGE_DETAILS_REQUEST
        });
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/getLanguageDetails?id=${languageCode}`).then((res)=>{
            dispatch({
                type: GET_LANGUAGE_DETAILS_SUCCESS,
                data: res.data.data
            });
            return {
                type: GET_LANGUAGE_DETAILS_SUCCESS,
                data: res.data
            };
        }).catch((err)=>{
            dispatch({
                type: GET_LANGUAGE_DETAILS_ERROR,
                error: err.response.data
            });
            return {
                type: GET_LANGUAGE_DETAILS_ERROR,
                error: err.response.data
            };
        });
    }
;
const setStudentSelectedLanguage = (languageObj)=>(dispatch)=>{
        dispatch({
            type: SET_STUDENT_SELECTED_LANGUAGE,
            data: languageObj
        });
    }
;
const storeMentorBatch = (batchObj)=>(dispatch)=>{
        dispatch({
            type: SET_MENTOR_BATCH_DETAIL,
            data: batchObj
        });
    }
;

});

/***/ }),

/***/ 6210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const authInitialState = {
    loginData: "",
    loginLoading: false,
    signUpData: "",
    signupLoading: false,
    logout: "",
    logoutLoading: false,
    profileData: "",
    profileDataLoading: false,
    subscribeLoading: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authInitialState);


/***/ }),

/***/ 8330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dashboardIntialState = {
    getStudentDashboardData: [],
    getStudentDashboardDataLoading: false,
    profileUpdateLoading: false,
    profileUpdatedData: "",
    mentorBatches: [],
    mentorBatchesLoading: false,
    mentorStudentList: [],
    mentorStudentListLoading: false,
    mentorDashboardData: [],
    mentorDashboardDataLoading: false,
    mentorDashboardAssignmentList: [],
    mentorDashboardAssignmentListLoading: false,
    getSubmittedAssignemntList: [],
    getSubmittedAssignemntListLoading: false,
    studentUpcomingTasks: [],
    studentUpcomingTaskLoading: false,
    studentBatchMates: [],
    studentBatchMatesLoading: false,
    studentAssignmentList: [],
    studentAssignmentListLoading: false,
    getStudentProgress: [],
    getStudentProgressLoading: false,
    getStudentCourseDetails: [],
    getStudentCourseDetailsLoading: false,
    mentorUpcomingTask: [],
    mentorUpcomingTasksLoading: false,
    updateScoreLoading: false,
    studentNotificationList: [],
    studentNotificationLoading: false,
    mentorNotificationList: [],
    mentorNotificaiotnLoading: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboardIntialState);


/***/ }),

/***/ 2593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeInitialState = {
    getLanguage: [],
    getLangaugeLoading: false,
    pageData: [],
    pageDataLoading: false,
    reviewData: [],
    reviewDataLoading: false,
    setReviewData: [],
    setReviewLoading: false,
    reviewDetails: [],
    reviewDetailsLoading: false,
    reviewComment: [],
    reviewCommentLoading: false,
    setReviewLike: [],
    setReviewLikeLoading: false,
    contactUsLoading: false,
    getBlogs: [],
    getBlogsLoading: false,
    getFaqs: [],
    getFaqsLoading: false,
    addUserFaq: [],
    addUserFaqLoading: false,
    getUserFaq: [],
    getUserFaqLoading: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeInitialState);


/***/ }),

/***/ 6551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const languageInitialStates = {
    getLanguageDetails: [],
    getLangaugeDetailsLoading: false,
    setStudentSelectedLanguage: {
    },
    storedMentorBatch: {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageInitialStates);


/***/ }),

/***/ 1554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ GlobalContext),
/* harmony export */   "R": () => (/* binding */ GlobalProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers_AuthReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7438);
/* harmony import */ var _Reducers_HomeReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(522);
/* harmony import */ var _InitialStates_AuthStates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6210);
/* harmony import */ var _InitialStates_HomeInitialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2593);
/* harmony import */ var _Reducers_LanguageReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4014);
/* harmony import */ var _InitialStates_LanguageInitialState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6551);
/* harmony import */ var _Reducers_DashboardReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6136);
/* harmony import */ var _InitialStates_DashboardInitialState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Reducers_DashboardReducer__WEBPACK_IMPORTED_MODULE_8__, _Reducers_LanguageReducer__WEBPACK_IMPORTED_MODULE_6__, _Reducers_AuthReducer__WEBPACK_IMPORTED_MODULE_2__, _Reducers_HomeReducer__WEBPACK_IMPORTED_MODULE_3__]);
([_Reducers_DashboardReducer__WEBPACK_IMPORTED_MODULE_8__, _Reducers_LanguageReducer__WEBPACK_IMPORTED_MODULE_6__, _Reducers_AuthReducer__WEBPACK_IMPORTED_MODULE_2__, _Reducers_HomeReducer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
});
const GlobalProvider = ({ children  })=>{
    const { 0: homeState , 1: homeDispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_Reducers_HomeReducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, _InitialStates_HomeInitialState__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const { 0: authState , 1: authDispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_Reducers_AuthReducer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, _InitialStates_AuthStates__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { 0: languageState , 1: languageDispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_Reducers_LanguageReducer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _InitialStates_LanguageInitialState__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const { 0: studentDashboardState , 1: studentDashboardDispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_Reducers_DashboardReducer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _InitialStates_DashboardInitialState__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
        value: {
            homeState,
            homeDispatch,
            authState,
            authDispatch,
            languageState,
            languageDispatch,
            studentDashboardState,
            studentDashboardDispatch
        },
        children: children
    }));
};

});

/***/ }),

/***/ 7438:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6076);
/* harmony import */ var _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
([_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const authReducer = (state, action)=>{
    switch(action.type){
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_REQUEST */ .Cn:
            return Object.assign({
            }, state, {
                loginLoading: true
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_SUCCESS */ .XP:
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .COOKIE_TOKEN */ .t5, action.data.access_token, {
                expires: 7
            });
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_DETAILS */ .DX, JSON.stringify(action.data));
            return Object.assign({
            }, state, {
                loginLoading: false,
                loginData: action.data
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_ERROR */ .iP:
            return Object.assign({
            }, state, {
                loginLoading: false
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .SIGNUP_REQUEST */ .yc:
            return Object.assign({
            }, state, {
                signupLoading: true
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .SIGNUP_SUCCESS */ .Nh:
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .COOKIE_TOKEN */ .t5, action.data.access_token, {
                expires: 7
            });
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_DETAILS */ .DX, JSON.stringify(action.data));
            return Object.assign({
            }, state, {
                signupLoading: false,
                signUpData: action.data
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .SIGNUP_ERROR */ .vK:
            return Object.assign({
            }, state, {
                signupLoading: false
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .LOGOUT_REQUEST */ .y:
            return Object.assign({
            }, state, {
                logoutLoading: true
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .LOGOUT_SUCCESS */ .$x:
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .COOKIE_TOKEN */ .t5);
            localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_DETAILS */ .DX);
            return Object.assign({
            }, state, {
                logoutLoading: false,
                logout: action.data
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .LOGOUT_ERROR */ .xI:
            return Object.assign({
            }, state, {
                logoutLoading: false
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_PROFILE_REQUEST */ .ge:
            return Object.assign({
            }, state, {
                profileDataLoading: true
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_PROFILE_SUCCESS */ .gA:
            const localstorageValue = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_DETAILS */ .DX) && JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_DETAILS */ .DX));
            const updatedLocalstorage = {
                ...localstorageValue,
                profileUrl: action.data.user_data.avatar
            };
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .USER_DETAILS */ .DX, JSON.stringify(updatedLocalstorage));
            return Object.assign({
            }, state, {
                profileDataLoading: false,
                profileData: action.data
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_PROFILE_ERROR */ .tv:
            return Object.assign({
            }, state, {
                profileDataLoading: false
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .SUBSCRIBE_REQUEST */ .ev:
            return Object.assign({
            }, state, {
                subscribeLoading: true
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .SUBSCRIBE_SUCCESS */ .ZC:
            return Object.assign({
            }, state, {
                subscribeLoading: false
            });
        case _Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_2__/* .SUBSCRIBE_ERROR */ .Lo:
            return Object.assign({
            }, state, {
                subscribeLoading: false
            });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);

});

/***/ }),

/***/ 6136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3897);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__]);
_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const dashboardReducer = (state, action)=>{
    switch(action.type){
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_DASHBOARD_DATA_REQUEST */ .hI:
            return Object.assign({
            }, state, {
                getStudentDashboardDataLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_DASHBOARD_DATA_SUCCESS */ .vE:
            return Object.assign({
            }, state, {
                getStudentDashboardDataLoading: false,
                getStudentDashboardData: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_DASHBOARD_DATA_ERROR */ .O2:
            return Object.assign({
            }, state, {
                getStudentDashboardDataLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PROFILE_DATA_REQUEST */ .rB:
            return Object.assign({
            }, state, {
                profileUpdateLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PROFILE_DATA_SUCCESS */ .O$:
            return Object.assign({
            }, state, {
                profileUpdateLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PROFILE_DATA_ERROR */ .FV:
            return Object.assign({
            }, state, {
                profileUpdateLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_BATCHLIST_REQUEST */ .sK:
            return Object.assign({
            }, state, {
                mentorBatchesLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_BATCHLIST_SUCCESS */ .$t:
            return Object.assign({
            }, state, {
                mentorBatchesLoading: false,
                mentorBatches: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_BATCHLIST_ERROR */ .ag:
            return Object.assign({
            }, state, {
                mentorBatchesLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_STUDENTLIST_REQUEST */ .Jv:
            return Object.assign({
            }, state, {
                mentorStudentListLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_STUDENTLIST_SUCCESS */ .mM:
            return Object.assign({
            }, state, {
                mentorStudentListLoading: false,
                mentorStudentList: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_STUDENTLIST_ERROR */ .OK:
            return Object.assign({
            }, state, {
                mentorStudentListLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_DASHBOARD_DATA_REQUEST */ .jB:
            return Object.assign({
            }, state, {
                mentorDashboardDataLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_DASHBOARD_DATA_SUCCESS */ .bg:
            return Object.assign({
            }, state, {
                mentorDashboardDataLoading: false,
                mentorDashboardData: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_DASHBOARD_DATA_ERROR */ .VN:
            return Object.assign({
            }, state, {
                mentorDashboardDataLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_ASSIGNMENT_LIST_REQUEST */ .xP:
            return Object.assign({
            }, state, {
                mentorDashboardAssignmentListLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_ASSIGNMENT_LIST_SUCCESS */ .OG:
            return Object.assign({
            }, state, {
                mentorDashboardAssignmentListLoading: false,
                mentorDashboardAssignmentList: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_ASSIGNMENT_LIST_ERROR */ .Ej:
            return Object.assign({
            }, state, {
                mentorDashboardAssignmentListLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .SUBMITTED_ASSIGNMENT_LIST_REQUEST */ .X$:
            return Object.assign({
            }, state, {
                getSubmittedAssignemntListLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .SUBMITTED_ASSIGNMENT_LIST_SUCCESS */ .Ar:
            return Object.assign({
            }, state, {
                getSubmittedAssignemntListLoading: false,
                getSubmittedAssignemntList: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .SUBMITTED_ASSIGNMENT_LIST_ERROR */ .qI:
            return Object.assign({
            }, state, {
                getSubmittedAssignemntListLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .STUDENT_UPCOMING_TASKS_REQUEST */ .bb:
            return Object.assign({
            }, state, {
                studentUpcomingTaskLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .STUDENT_UPCOMING_TASKS_SUCCESS */ .s5:
            return Object.assign({
            }, state, {
                studentUpcomingTaskLoading: false,
                studentUpcomingTasks: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .STUDENT_UPCOMING_TASKS_ERROR */ .LU:
            return Object.assign({
            }, state, {
                studentUpcomingTaskLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .STUDENT_BATCH_MATES_REQUEST */ .K1:
            return Object.assign({
            }, state, {
                studentBatchMatesLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .STUDENT_BATCH_MATES_SUCCESS */ .PX:
            return Object.assign({
            }, state, {
                studentBatchMatesLoading: false,
                studentBatchMates: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .STUDENT_BATCH_MATES_ERROR */ .OJ:
            return Object.assign({
            }, state, {
                studentBatchMatesLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_ASSIGNMENT_LIST_REQUEST */ .Lj:
            return Object.assign({
            }, state, {
                studentAssignmentListLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_ASSIGNMENT_LIST_SUCCESS */ .OD:
            return Object.assign({
            }, state, {
                studentAssignmentListLoading: false,
                studentAssignmentList: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_ASSIGNMENT_LIST_ERROR */ .HP:
            return Object.assign({
            }, state, {
                studentAssignmentListLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_PROGRESS_REQUEST */ .K_:
            return Object.assign({
            }, state, {
                getStudentProgressLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_PROGRESS_SUCCESS */ .Ac:
            return Object.assign({
            }, state, {
                getStudentProgressLoading: false,
                getStudentProgress: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_PROGRESS_ERROR */ .Uc:
            return Object.assign({
            }, state, {
                getStudentProgressLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_COURSE_DETAILS_REQUEST */ .yE:
            return Object.assign({
            }, state, {
                getStudentCourseDetailsLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_COURSE_DETAILS_SUCCESS */ .Yp:
            return Object.assign({
            }, state, {
                getStudentCourseDetailsLoading: false,
                getStudentCourseDetails: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_COURSE_DETAILS_ERROR */ .oZ:
            return Object.assign({
            }, state, {
                getStudentCourseDetailsLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .MENTOR_UPCOMING_TASKS_REQUEST */ .ko:
            return Object.assign({
            }, state, {
                mentorUpcomingTasksLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .MENTOR_UPCOMING_TASKS_SUCCESS */ .NL:
            return Object.assign({
            }, state, {
                mentorUpcomingTasksLoading: false,
                mentorUpcomingTask: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .MENTOR_UPCOMING_TASKS_ERROR */ .C5:
            return Object.assign({
            }, state, {
                mentorUpcomingTasksLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_STUDENT_SCORE_REQUEST */ .mg:
            return Object.assign({
            }, state, {
                updateScoreLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_STUDENT_SCORE_SUCCESS */ .dw:
            return Object.assign({
            }, state, {
                updateScoreLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_STUDENT_SCORE_ERROR */ .Fn:
            return Object.assign({
            }, state, {
                updateScoreLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_NOTIFICATION_REQUEST */ .Es:
            return Object.assign({
            }, state, {
                studentNotificationLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_NOTIFICATION_SUCCESS */ .Ke:
            return Object.assign({
            }, state, {
                studentNotificationLoading: false,
                studentNotificationList: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_STUDENT_NOTIFICATION_ERROR */ .z6:
            return Object.assign({
            }, state, {
                studentNotificationLoading: false
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_NOTIFICATION_REQUEST */ .kU:
            return Object.assign({
            }, state, {
                mentorNotificaiotnLoading: true
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_NOTIFICATION_SUCCESS */ .TV:
            return Object.assign({
            }, state, {
                mentorNotificaiotnLoading: false,
                mentorNotificationList: action.data
            });
        case _Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_MENTOR_NOTIFICATION_ERROR */ .Mf:
            return Object.assign({
            }, state, {
                mentorNotificaiotnLoading: false
            });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dashboardReducer);

});

/***/ }),

/***/ 522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2132);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__]);
_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const homeReducer = (state, action)=>{
    switch(action.type){
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_LANGUAGE_REQUEST */ .sm:
            return Object.assign({
            }, state, {
                getLangaugeLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_LANGUAGE_SUCCESS */ .FH:
            return Object.assign({
            }, state, {
                getLangaugeLoading: false,
                getLanguage: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_LANGUAGE_ERROR */ .qj:
            return Object.assign({
            }, state, {
                getLangaugeLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_PAGE_DATA_REQUEST */ .gt:
            return Object.assign({
            }, state, {
                pageDataLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_PAGE_DATA_SUCCESS */ .Um:
            return Object.assign({
            }, state, {
                pageDataLoading: false,
                pageData: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_PAGE_DATA_ERROR */ .xI:
            return Object.assign({
            }, state, {
                pageDataLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_REVIEW_DATA_REQUEST */ .b0:
            return Object.assign({
            }, state, {
                reviewDataLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_REVIEW_DATA_SUCCESS */ .y1:
            return Object.assign({
            }, state, {
                reviewDataLoading: false,
                reviewData: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_REVIEW_DATA_ERROR */ .$m:
            return Object.assign({
            }, state, {
                reviewDataLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_REVIEW_DATA_REQUEST */ .Cg:
            return Object.assign({
            }, state, {
                setReviewLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_REVIEW_DATA_SUCCESS */ .Ic:
            return Object.assign({
            }, state, {
                setReviewLoading: false,
                setReviewData: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_REVIEW_DATA_ERROR */ .kI:
            return Object.assign({
            }, state, {
                setReviewLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_REVIEW_DETAILS_REQUEST */ .o_:
            return Object.assign({
            }, state, {
                reviewDetailsLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_REVIEW_DETAILS_SUCCESS */ .Uj:
            return Object.assign({
            }, state, {
                reviewDetailsLoading: false,
                reviewDetails: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_REVIEW_DETAILS_ERROR */ .sJ:
            return Object.assign({
            }, state, {
                reviewDetailsLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .ADD_REVIEW_COMMENT_REQUEST */ .UD:
            return Object.assign({
            }, state, {
                reviewCommentLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .ADD_REVIEW_COMMENT_SUCCESS */ .vM:
            return Object.assign({
            }, state, {
                reviewCommentLoading: false,
                reviewComment: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .ADD_REVIEW_COMMENT_ERROR */ .cM:
            return Object.assign({
            }, state, {
                reviewCommentLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_REVIEW_LIKE_REQUEST */ .vI:
            return Object.assign({
            }, state, {
                setReviewLikeLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_REVIEW_LIKE_SUCCESS */ .YK:
            return Object.assign({
            }, state, {
                setReviewLikeLoading: false,
                setReviewLike: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_REVIEW_LIKE_ERROR */ .TM:
            return Object.assign({
            }, state, {
                setReviewLikeLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .CONTACT_US_REQUEST */ .Hv:
            return Object.assign({
            }, state, {
                contactUsLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .CONTACT_US_SUCCESS */ .g0:
            return Object.assign({
            }, state, {
                contactUsLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .CONTACT_US_ERROR */ .QP:
            return Object.assign({
            }, state, {
                contactUsLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_BLOGS_REQUEST */ .iQ:
            return Object.assign({
            }, state, {
                getBlogsLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_BLOGS_SUCCESS */ .Sk:
            return Object.assign({
            }, state, {
                getBlogsLoading: false,
                getBlogs: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_BLOGS_ERROR */ .s1:
            return Object.assign({
            }, state, {
                getBlogsLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_FAQS_REQUEST */ .f_:
            return Object.assign({
            }, state, {
                getFaqsLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_FAQS_SUCCESS */ .m5:
            return Object.assign({
            }, state, {
                getFaqsLoading: false,
                getFaqs: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_FAQS_ERROR */ .ev:
            return Object.assign({
            }, state, {
                getFaqsLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .ADD_USER_FAQ_REQUEST */ .nz:
            return Object.assign({
            }, state, {
                addUserFaqLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .ADD_USER_FAQ_SUCCESS */ .VD:
            return Object.assign({
            }, state, {
                addUserFaqLoading: false,
                addUserFaq: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .ADD_USER_FAQ_ERROR */ .Z_:
            return Object.assign({
            }, state, {
                addUserFaqLoading: false
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_USER_FAQ_REQUEST */ .vk:
            return Object.assign({
            }, state, {
                getUserFaqLoading: true
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_USER_FAQ_SUCCESS */ .Fj:
            return Object.assign({
            }, state, {
                getUserFaqLoading: false,
                getUserFaq: action.data
            });
        case _Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_USER_FAQ_ERROR */ .ij:
            return Object.assign({
            }, state, {
                getUserFaqLoading: false
            });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeReducer);

});

/***/ }),

/***/ 4014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__]);
_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const languageReducer = (state, action)=>{
    switch(action.type){
        case _Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_LANGUAGE_DETAILS_REQUEST */ .R:
            return Object.assign({
            }, state, {
                getLangaugeDetailsLoading: true
            });
        case _Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_LANGUAGE_DETAILS_SUCCESS */ .Ed:
            return Object.assign({
            }, state, {
                getLangaugeDetailsLoading: false,
                getLanguageDetails: action.data
            });
        case _Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__/* .GET_LANGUAGE_DETAILS_ERROR */ .IW:
            return Object.assign({
            }, state, {
                getLangaugeDetailsLoading: false
            });
        case _Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_STUDENT_SELECTED_LANGUAGE */ .Eb:
            return Object.assign({
            }, state, {
                setStudentSelectedLanguage: action.data
            });
        case _Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_0__/* .SET_MENTOR_BATCH_DETAIL */ .xW:
            return Object.assign({
            }, state, {
                storedMentorBatch: action.data
            });
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageReducer);

});

/***/ }),

/***/ 7534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DesktopOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_1__]);
_pages_app__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function DesktopOnly(props) {
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_1__.DeviceContext);
    return !isMobileView ? props.children : null;
};

});

/***/ }),

/***/ 6873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_1__]);
_pages_app__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function MobileOnly(props) {
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_1__.DeviceContext);
    return isMobileView ? props.children : null;
};

});

/***/ }),

/***/ 1561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1957);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7727);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Context_Provider__WEBPACK_IMPORTED_MODULE_4__]);
_Context_Provider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const INSTAGRAM_URL = "https://instagram.com/tremendo.in?utm_medium=copy_link";
const FB_URL = "https://www.facebook.com/tremendoin";
const LINKDIN_URL = "https://www.linkedin.com/company/tremendo-in";
const TWITTER_URL = "https://twitter.com/tremendo_in  ";
function Footer(props) {
    const { homeState  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_4__/* .GlobalContext */ .k);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .SIGN_UP_PATH */ .WE) || router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .LOGIN_PATH */ .wm)) {
        return false;
    }
    const goToSocialMedia = (url)=>{
        window.open(url);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().whiteFooter),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerSection),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
                                children: "About Tremendo"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().subheading),
                                children: [
                                    "Learning new languages can be fun and exciting when you embark on that journey with Tremendo. A hybrid learning platform where you get live classes and get real-time feedback on your progress.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "We started Tremendo to build a bridge of communication across the world. To give every keen learner a platform where they can master any language at the comfort of their home. It also helps people achieve their career goals and enroll in colleges abroad."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerSection),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
                                children: "Know us better"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().subheading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .ABOUTUS_PATH */ .qD}#whoweare`)
                                        ,
                                        children: "Who we are"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .ABOUTUS_PATH */ .qD}#whatwedo`)
                                        ,
                                        children: "What we do"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .ABOUTUS_PATH */ .qD}#ourmission`)
                                        ,
                                        children: "Our mission"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .ABOUTUS_PATH */ .qD}#ourvision`)
                                        ,
                                        children: "Our vision"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerSection),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
                                children: "Languages"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().subheading),
                                children: homeState.getLanguage.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .LANGUAGE_DETAIL */ .k1}${i.languge_id}`)
                                        ,
                                        children: i.title
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerSection),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
                                children: "Help"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().subheading),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .FAQS_PATH */ .lC)
                                        ,
                                        children: "FAQ’s"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().footerItem),
                                        onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_5__/* .CONTACTUS_PATH */ .JW)
                                        ,
                                        children: "Contact us"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().socialSection),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().followIcons),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().socialIcons),
                                                        onClick: ()=>goToSocialMedia(FB_URL)
                                                        ,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ffacebook.png?alt=media&token=d3fac0f8-b5cd-4455-8319-d6435caa1273",
                                                            alt: "facebook",
                                                            height: "50px",
                                                            width: "50px"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().socialIcons),
                                                        onClick: ()=>goToSocialMedia(INSTAGRAM_URL)
                                                        ,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Finstagram.png?alt=media&token=e86cf4f9-d7fb-4217-9512-cf4a386ccdb3",
                                                            alt: "instagram",
                                                            height: "50px",
                                                            width: "50px"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().socialIcons),
                                                        onClick: ()=>goToSocialMedia(TWITTER_URL)
                                                        ,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftwitter.png?alt=media&token=02fb92e9-11f7-480a-b54c-81526ca3a04e",
                                                            alt: "twitter",
                                                            height: "50px",
                                                            width: "50px"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().socialIcons),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fyoutube.png?alt=media&token=8e1b812e-c1f6-4727-94c1-858c30e05844",
                                                            alt: "youtube",
                                                            height: "50px",
                                                            width: "50px"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().blackFooterbase),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default().copyright),
                        children: "\xa9 2022 Tremendo"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftnc.pdf?alt=media&token=ae0e7ac3-62fc-45cf-b9db-8c2291429176",
                                download: "Term&Condition",
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    cursor: "pointer",
                                    color: "#fff"
                                },
                                children: "Terms and Conditions"
                            }),
                            " ",
                            "|",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fprivacy_policy.pdf?alt=media&token=162279da-2bec-4e1a-a47a-c330bd24b919",
                                download: "Privacy_and_policy",
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    cursor: "pointer",
                                    color: "#fff"
                                },
                                children: "Privacy Statement"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 7923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1561);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8395);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__, _Navbar__WEBPACK_IMPORTED_MODULE_3__]);
([_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__, _Navbar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




function Layout({ children  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 8395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3019);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7534);
/* harmony import */ var _DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6873);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3664);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7727);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1554);
/* harmony import */ var _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4938);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5675);
/* harmony import */ var _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2132);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__, _DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_8__, _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_10__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_13__, _Context_Provider__WEBPACK_IMPORTED_MODULE_9__]);
([_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__, _DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_8__, _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_10__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_13__, _Context_Provider__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















function Navbar({}) {
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: selectedLanguage , 1: setSelectedLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LANGUAGES");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { homeState , authState , authDispatch: dispatch , homeDispatch: homeDispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_9__/* .GlobalContext */ .k);
    const userDetails =  false && 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LANGUAGE_DETAIL */ .k1)) {
            setSelectedLanguage("LANGUAGES");
        // return false;
        }
        setLanguageToStore();
        if (userDetails) profileData();
    }, [
        router.pathname
    ]);
    const setLanguageToStore = async ()=>{
        const currentLanguagePage = router.query.languageId;
        const response = await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_13__/* .getLanguages */ .Vb)()(homeDispatch);
        const selectedLang = response.data.find((i)=>i.languge_id == currentLanguagePage
        );
        if (selectedLang) {
            setSelectedLanguage(selectedLang.title);
        } else {
            setSelectedLanguage("LANGUAGES");
        }
    };
    const profileData = async ()=>{
        if (userDetails) {
            const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_10__/* .getUserProfile */ .et)(userDetails.access_type)(dispatch);
        }
    };
    const signUpAndLogout = async ()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5)) {
            const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_10__/* .logoutAuth */ .Aq)(js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5))(dispatch);
            if (response.type == _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_10__/* .LOGOUT_ERROR */ .xI) {
                react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.error(response.error.msg, {
                    theme: "colored"
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success(response.data.msg, {
                    theme: "colored"
                });
                router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .HOME_PAGE */ .s6);
            }
        } else {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .SIGN_UP_PATH */ .WE);
        }
    };
    const goToLanguage = (language)=>{
        setSelectedLanguage(language.title);
        router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LANGUAGE_DETAIL */ .k1}${language.languge_id}`);
        setVisible(!visible);
    };
    const goToDashboard = ()=>{
        const activatedLanguage = authState.profileData.all_languages;
        if (userDetails.access_type == _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_STUDENT_TAB */ .mb && activatedLanguage.length == 0) {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .HOME_PAGE */ .s6);
        } else if (userDetails.access_type == _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_STUDENT_TAB */ .mb && activatedLanguage.length != 0) {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .STUDENT_DASHBOARD_PATH */ .M4);
        } else if (userDetails.access_type == _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .LOGIN_MENTOR_TAB */ .fr) {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .MENTOR_DASHBOARD_PATH */ .o7);
        } else if (userDetails.access_type == _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ADMIN_ACCESS_TYPE */ .xY || userDetails.access_type == _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .SUPER_ADMIN_ACCESS_TYPE */ .V6) {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .ADMIN_DASHBOARD_PATH */ .uu);
        } else {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .STUDENT_DASHBOARD_PATH */ .M4);
        }
    };
    const inviteFriends = ()=>{
        window.open("https://web.whatsapp.com/send?text=https://tremendo.in/");
    };
    const desktopNavbar = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
            fixed: "top",
            secondary: true,
            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().menuWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                    onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .HOME_PAGE */ .s6)
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                        src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftremendo_logo.png?alt=media&token=2180fdbc-cab2-4f3e-9721-cd61da3348ba",
                        alt: "tremendo logo",
                        width: "150px",
                        height: "50px"
                    })
                }),
                !router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .SIGN_UP_PATH */ .WE) && !router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LOGIN_PATH */ .wm) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Menu, {
                            position: "right",
                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().menuStyling),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    name: "ABOUT US",
                                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().itemWrapper)} ${router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .ABOUTUS_PATH */ .qD) && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().activeItemWrapper)}`,
                                    onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .ABOUTUS_PATH */ .qD)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                                    text: selectedLanguage,
                                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().dropdownWrapper)} ${router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LANGUAGE_DETAIL */ .k1) && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().activeItemWrapper)}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                                        children: homeState.getLanguage.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                                text: `${i.title}  (${i.welcome_text})`,
                                                onClick: ()=>goToLanguage(i)
                                            }, index)
                                        )
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    name: "REVIEW",
                                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().itemWrapper)} ${router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .REVIEW_PATH */ .O0) && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().activeItemWrapper)}`,
                                    onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .REVIEW_PATH */ .O0)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    name: "FAQ'S",
                                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().itemWrapper)} ${router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .FAQS_PATH */ .lC) && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().activeItemWrapper)}`,
                                    onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .FAQS_PATH */ .lC)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    name: "BLOGS",
                                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().itemWrapper)} ${router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .BLOGS_PATH */ .qi) && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().activeItemWrapper)}`,
                                    onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .BLOGS_PATH */ .qi)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    name: "CONTACT US",
                                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().itemWrapper)} ${router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .CONTACTUS_PATH */ .JW) && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().activeItemWrapper)}`,
                                    onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .CONTACTUS_PATH */ .JW)
                                })
                            ]
                        }),
                        !js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().itemWrapper),
                            onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LOGIN_PATH */ .wm)
                            ,
                            children: "LOGIN"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
                                trigger: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    src: userDetails.profileUrl ? userDetails.profileUrl : "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41",
                                    circular: true,
                                    alt: "profile",
                                    height: "35px",
                                    width: "35px"
                                }),
                                flowing: true,
                                hoverable: true,
                                style: {
                                    padding: "0px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().profileName),
                                        children: userDetails.name ? userDetails.name : userDetails.email
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().profileOptions),
                                        onClick: ()=>goToDashboard()
                                        ,
                                        children: "Dashboard"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().profileOptions),
                                        onClick: ()=>inviteFriends()
                                        ,
                                        children: "Invite friends"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().profileLogout),
                                        onClick: ()=>signUpAndLogout()
                                        ,
                                        children: "Log out"
                                    })
                                ]
                            })
                        }),
                        !js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                label: "SIGN UP",
                                height: 34,
                                borderRadius: 18,
                                textStyle: {
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontFamily: "Montserrat",
                                    fontSize: "13px"
                                },
                                border: "none",
                                onClick: ()=>signUpAndLogout()
                            })
                        })
                    ]
                })
            ]
        }));
    };
    const mobileNavbar = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mobileBase),
                    children: [
                        !router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .SIGN_UP_PATH */ .WE) && !router.pathname.includes(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LOGIN_PATH */ .wm) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().toggleIcon),
                            onClick: ()=>setVisible(!visible)
                            ,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${visible && (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().hamburger)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().line)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().line)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().line)
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .HOME_PAGE */ .s6)
                            ,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftremendo_logo.png?alt=media&token=2180fdbc-cab2-4f3e-9721-cd61da3348ba",
                                alt: "logo",
                                size: "small"
                            })
                        })
                    ]
                }),
                visible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().overlayBase),
                    onClick: ()=>setVisible(!visible)
                    ,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().contentWrapper),
                        children: [
                            !js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .LOGIN_PATH */ .wm)
                                ,
                                children: "Login"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>goToDashboard()
                                ,
                                children: userDetails.name ? userDetails.name : userDetails.email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>signUpAndLogout()
                                ,
                                children: js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .COOKIE_TOKEN */ .t5) ? "Log Out" : "Sign Up"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .ABOUTUS_PATH */ .qD)
                                ,
                                children: "About Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
                                text: "Languages",
                                pointing: "left",
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebLanguage),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                                    children: homeState.getLanguage.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                                            text: i.title,
                                            onClick: ()=>goToLanguage(i)
                                        }, index)
                                    )
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .REVIEW_PATH */ .O0)
                                ,
                                children: "Review"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .FAQS_PATH */ .lC)
                                ,
                                children: "FAQs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .BLOGS_PATH */ .qi)
                                ,
                                children: "Blogs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_15___default().mwebMenus),
                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_14__/* .CONTACTUS_PATH */ .JW)
                                ,
                                children: "Contact Us"
                            })
                        ]
                    })
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: mobileNavbar()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: desktopNavbar()
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

});

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceContext": () => (/* binding */ DeviceContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7923);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1554);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3326);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar_Layout__WEBPACK_IMPORTED_MODULE_2__, _Context_Provider__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Navbar_Layout__WEBPACK_IMPORTED_MODULE_2__, _Context_Provider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












const DeviceContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
});
function MyApp({ Component , pageProps , isMobileView  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Context_Provider__WEBPACK_IMPORTED_MODULE_3__/* .GlobalProvider */ .R, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DeviceContext.Provider, {
            value: {
                isMobileView
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: false,
                    draggable: false,
                    pauseOnHover: false
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    let isMobileView = (ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle|WPDesktop/i);
    return {
        pageProps: {
            ...Component.getInitialProps ? await Component.getInitialProps(ctx) : {
            },
            appProp: ctx.pathname
        },
        isMobileView: Boolean(isMobileView)
    };
};

});

/***/ }),

/***/ 6345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ storage),
/* harmony export */   "Z": () => (/* reexport default from dynamic */ firebase__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3860);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1668);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);


const firebaseConfig = {
    apiKey: "AIzaSyCjtr5UbOtW_5hGVCNvVRPT_txoZlOAcPg",
    authDomain: "tremendodev.firebaseapp.com",
    databaseURL: "https://tremendodev-default-rtdb.firebaseio.com",
    projectId: "tremendodev",
    storageBucket: "tremendodev.appspot.com",
    messagingSenderId: "127773024099",
    appId: "1:127773024099:web:837a772c2791d2f310bd56"
};
if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
    firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);
} else {
    firebase__WEBPACK_IMPORTED_MODULE_0___default().app(); // if already initialized, use that one
}
const storage = firebase__WEBPACK_IMPORTED_MODULE_0___default().storage();



/***/ })

};
;
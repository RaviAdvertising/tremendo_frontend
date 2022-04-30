(() => {
var exports = {};
exports.id = 918;
exports.ids = [918,888];
exports.modules = {

/***/ 7384:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "BatchManagement_base__293iO",
	"chartHeading": "BatchManagement_chartHeading__SEHEU",
	"dateMonthHeading": "BatchManagement_dateMonthHeading__1Yeta",
	"datesWrapper": "BatchManagement_datesWrapper__2z_16",
	"date": "BatchManagement_date__3HdxP",
	"courseName": "BatchManagement_courseName__2VOlm",
	"batchName": "BatchManagement_batchName__5EsLt",
	"courseDetailSection": "BatchManagement_courseDetailSection__225Dl",
	"detailsWrapper": "BatchManagement_detailsWrapper__1rbEA",
	"timeCode": "BatchManagement_timeCode__b8ImL",
	"overlay": "BatchManagement_overlay__1zZTh",
	"batchCode": "BatchManagement_batchCode__1cyph",
	"batchListHeader": "BatchManagement_batchListHeader__3IpyX",
	"headerOption": "BatchManagement_headerOption__3cWrQ",
	"batchListBody": "BatchManagement_batchListBody__t-tdO",
	"bodyOption": "BatchManagement_bodyOption__3lHJT",
	"bodyOptionWithCheckBox": "BatchManagement_bodyOptionWithCheckBox__Po4bb",
	"completeContainer": "BatchManagement_completeContainer__2ITNw",
	"checkbox": "BatchManagement_checkbox__2UDtZ",
	"checkmark": "BatchManagement_checkmark__QIah0",
	"batchListWrapper": "BatchManagement_batchListWrapper__3wp0M",
	"tableHeader": "BatchManagement_tableHeader__1eCJt",
	"headerName": "BatchManagement_headerName__ek0hf",
	"tableBody": "BatchManagement_tableBody__2kGoj",
	"bodyName": "BatchManagement_bodyName__QnLVG",
	"attendenceBody": "BatchManagement_attendenceBody__2v2OQ",
	"headingSubmitBtnWrapper": "BatchManagement_headingSubmitBtnWrapper__7Up_E"
};


/***/ }),

/***/ 8519:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "MentorDashboard_base__3Uv4-",
	"chartWrapper": "MentorDashboard_chartWrapper__1p6AV",
	"chartHeading": "MentorDashboard_chartHeading__2EB7w",
	"progressChartBox": "MentorDashboard_progressChartBox__2tpEV",
	"progressChart": "MentorDashboard_progressChart__3Q2uM",
	"attendenceChart": "MentorDashboard_attendenceChart__3NeSb",
	"barChart": "MentorDashboard_barChart__iDmDV",
	"courseName": "MentorDashboard_courseName__wjp-R",
	"batchName": "MentorDashboard_batchName__34TKH",
	"dateMonthHeading": "MentorDashboard_dateMonthHeading__24Q8a",
	"datesWrapper": "MentorDashboard_datesWrapper__3pbAU",
	"date": "MentorDashboard_date__18Wj-",
	"courseDetailSection": "MentorDashboard_courseDetailSection__ASAbA",
	"detailsWrapper": "MentorDashboard_detailsWrapper__3Q2t8",
	"batchCode": "MentorDashboard_batchCode__2GxMf",
	"timeCode": "MentorDashboard_timeCode__2qOw4",
	"overlay": "MentorDashboard_overlay__3uilZ",
	"showProgress": "MentorDashboard_showProgress__1dz8m",
	"canvasWrap": "MentorDashboard_canvasWrap__109R5"
};


/***/ }),

/***/ 4501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BatchManagement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3664);
/* harmony import */ var _BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7384);
/* harmony import */ var _BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8510);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1554);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9016);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6076);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_8__, _Context_Provider__WEBPACK_IMPORTED_MODULE_6__, _pages_app__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_8__, _Context_Provider__WEBPACK_IMPORTED_MODULE_6__, _pages_app__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













function BatchManagement() {
    var ref, ref1;
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_4__.DeviceContext);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: studentList , 1: setStudentList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: attedenceData , 1: setAttendenceData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { studentDashboardState , languageState , studentDashboardDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_6__/* .GlobalContext */ .k);
    const onChangeAttendence = (data, student)=>{
        let attendence = attedenceData;
        attendence.push({
            ["user_id"]: student.user_id,
            status: data.value
        });
        setAttendenceData(attendence);
    };
    const getStudentsAccordingToBatch = async (id)=>{
        setLoading(true);
        try {
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/getBatchStudentList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)}&batch_id=${id}`);
            setStudentList(response.data.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    const updateStudentAttendence = async ()=>{
        if (attedenceData.length == 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Select Attendence", {
                theme: "colored"
            });
            return false;
        }
        setLoading(true);
        const payload = {
            access_token: js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5),
            batch_id: languageState.storedMentorBatch.batch_id,
            attandance: attedenceData,
            class_id: studentList.class_data.class_id,
            attandance_date: studentList.class_data.class_date_format
        };
        try {
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__/* ["default"].post */ .Z.post(`/updateStudentAttandance`, payload);
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success("Attendence Submitted", {
                theme: "colored"
            });
            setLoading(false);
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error("Something went wrong!!", {
                theme: "colored"
            });
            setLoading(false);
        }
    };
    const getBatchStudents = async (id)=>{
        await getStudentsAccordingToBatch(id);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (studentDashboardState.mentorBatches.length > 0) {
            getStudentsAccordingToBatch(languageState.storedMentorBatch.batch_id);
        }
    }, []);
    // if (true) {
    //   return (
    //     <div
    //       style={{
    //         height: isMobileView ? "300px" : "700px",
    //         width: isMobileView ? "300px" : "700px",
    //         margin: "auto"
    //       }}
    //     >
    //       <Image
    //         src="https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194"
    //         alt="tremendo dashboard banner"
    //         height={isMobileView ? "300px" : "800px"}
    //         width={isMobileView ? "300px" : "700px"}
    //         className={styles.banner}
    //       />
    //     </div>
    //   );
    // }
    const noDataSection = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message.Header, {
                    children: "No Class"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "No Running Class for this batch"
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().base),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().chartHeading),
                children: "Batch List"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().batchListWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().batchListHeader),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerOption),
                                children: "Batch Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerOption),
                                children: "Total students"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerOption),
                                children: "Total Classes"
                            })
                        ]
                    }),
                    (ref = studentDashboardState.mentorBatches) === null || ref === void 0 ? void 0 : ref.map((i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().batchListBody),
                            onClick: ()=>getBatchStudents(i.batch_id)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyOption),
                                    children: `${i.batch_language}-${i.batch_id}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyOption),
                                    children: i.batch_capcity
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyOptionWithCheckBox),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: i.batch_total_classes
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().completeCheckbox),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().completeContainer),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "checkbox",
                                                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().checkbox),
                                                        onClick: (event)=>console.log(event.target.checked)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().checkmark)
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, i)
                    )
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headingSubmitBtnWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().chartHeading),
                        children: "Student Attendence"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().createFaqgbtn),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            label: "Submit Attendence",
                            height: 25,
                            borderRadius: 8,
                            backgroundColor: "#f98e46",
                            textStyle: {
                                color: "#fff",
                                fontWeight: "bold",
                                fontFamily: "Open Sans",
                                fontSize: "12px"
                            },
                            border: "none",
                            onClick: ()=>updateStudentAttendence()
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().tableHeader),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerName),
                        children: "S no."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerName),
                        children: "Name."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerName),
                        children: "ID"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerName),
                        children: "Status"
                    })
                ]
            }),
            studentList.class_data && Object.keys(studentList.class_data).length != 0 ? (ref1 = studentList.student_list) === null || ref1 === void 0 ? void 0 : ref1.map((i, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().tableBody),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyName),
                            children: [
                                index + 1,
                                "."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyName),
                            children: i.user_name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyName),
                            children: i.student_batch_id
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().bodyName),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
                                fluid: true,
                                options: [
                                    {
                                        text: "Present",
                                        value: "p"
                                    },
                                    {
                                        text: "Absent",
                                        value: "a"
                                    }
                                ],
                                className: (_BatchManagement_module_css__WEBPACK_IMPORTED_MODULE_11___default().attendenceBody),
                                onChange: (event, data)=>onChangeAttendence(data, i)
                                ,
                                placeholder: "Attendence"
                            })
                        })
                    ]
                }, index)
            ) : noDataSection()
        ]
    }));
};

});

/***/ }),

/***/ 9009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MentorDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8519);
/* harmony import */ var _MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7051);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5732);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js_auto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dashboard_StudentDashboardSkelton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2909);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8510);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3897);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1554);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9016);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_12__, _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_9__, _Context_Provider__WEBPACK_IMPORTED_MODULE_10__, _pages_app__WEBPACK_IMPORTED_MODULE_7__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_12__, _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_9__, _Context_Provider__WEBPACK_IMPORTED_MODULE_10__, _pages_app__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















function MentorDashboard({}) {
    var ref9, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_7__.DeviceContext);
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const { 0: feilds , 1: setFeilds  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    });
    const { 0: mentorList , 1: setMentorList  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { studentDashboardState , languageState , studentDashboardDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_10__/* .GlobalContext */ .k);
    const totalDatesInCurrentMonth = Array.from(Array(moment__WEBPACK_IMPORTED_MODULE_4___default()().daysInMonth()).keys());
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (document.getElementById("currentDate")) {
            document.getElementById("currentDate").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
        getDashboardData();
    }, []);
    const getDashboardData = async ()=>{
        var ref;
        const curr = new Date(); // get current date
        const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        const last = first + 6; // last day is the first day + 6
        const firstday = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date(curr.setDate(first))).format("x");
        const lastday = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date(curr.setDate(last))).format("x");
        const id = (ref = languageState.storedMentorBatch) === null || ref === void 0 ? void 0 : ref.batch_id;
        await (0,_Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_9__/* .getMentorDashboardData */ .Rj)(id, firstday, lastday)(dispatch);
        createCircle();
    };
    const createCircle = ()=>{
        let can = document.getElementById("canvas"), spanProcent = document.getElementById("procent"), c = can.getContext("2d");
        const percentage = can.getAttribute("data-percent");
        let posX = can.width / 2, posY = can.height / 2, fps = 1000 / 200, procent = 0, oneProcent = 360 / 100, result = oneProcent * percentage;
        c.lineCap = "round";
        arcMove();
        function arcMove() {
            var deegres = 0;
            var acrInterval = setInterval(function() {
                deegres += 1;
                c.clearRect(0, 0, can.width, can.height);
                procent = deegres / oneProcent;
                spanProcent.innerHTML = procent.toFixed();
                c.beginPath();
                c.arc(posX, posY, 100, Math.PI / 180 * 270, Math.PI / 180 * (270 + 360));
                c.strokeStyle = "#f2ddc0";
                c.lineWidth = "20";
                c.stroke();
                c.beginPath();
                c.strokeStyle = "#F4910A";
                c.lineWidth = "20";
                c.arc(posX, posY, 100, Math.PI / 180 * 270, Math.PI / 180 * (270 + deegres));
                c.stroke();
                if (deegres >= result) clearInterval(acrInterval);
            }, fps);
        }
    };
    const currentDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().format("D");
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    const currentDay = moment__WEBPACK_IMPORTED_MODULE_4___default()().day() ? moment__WEBPACK_IMPORTED_MODULE_4___default()().day() : 7;
    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                title: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    const onClickStartClass = (data)=>{
        getMentorList(dashboardData.batch_data.language_code);
        setOpenModal(dashboardData.batch_data);
        setFeilds({
            ...feilds,
            ...dashboardData.batch_data
        });
    };
    const onHandleChange = (value, type)=>{
        setFeilds({
            ...feilds,
            [type]: value
        });
    };
    const getMentorList = async (lang)=>{
        try {
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_11__/* ["default"].get */ .Z.get(`/getMentorFellowList?access_token=${js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_13__/* .COOKIE_TOKEN */ .t5)}`);
            setMentorList(response.data.data);
        } catch (err) {
        }
    };
    const createClassFunction = async ()=>{
        const mentorName = mentorList.find((i)=>{
            return i.user_code == (feilds === null || feilds === void 0 ? void 0 : feilds.batch_mentor_id);
        });
        try {
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_11__/* ["default"].post */ .Z.post(`/createNewBatchClass`, {
                access_token: js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_13__/* .COOKIE_TOKEN */ .t5),
                batch_id: openModal.batch_id,
                class_start_time: feilds === null || feilds === void 0 ? void 0 : feilds.batch_start_time,
                class_end_time: feilds === null || feilds === void 0 ? void 0 : feilds.batch_end_time,
                batch_mentor: mentorName.name,
                batch_mentor_id: feilds === null || feilds === void 0 ? void 0 : feilds.batch_mentor_id,
                class_link: feilds === null || feilds === void 0 ? void 0 : feilds.class_link
            });
            getDashboardData();
            setLoading(false);
            onCloseModal();
        } catch (err) {
            setLoading(false);
            onCloseModal();
        }
    };
    const onUpdateClass = async ()=>{
        setLoading(true);
        await createClassFunction();
    };
    const onCreateClass = async ()=>{
        setLoading(true);
        await createClassFunction();
        goToLink(feilds === null || feilds === void 0 ? void 0 : feilds.class_link);
    };
    const onCloseModal = ()=>{
        setOpenModal(null);
        setFeilds({
        });
    };
    const goToLink = (link)=>{
        const url = link.includes("https") ? link : `https://${link}`;
        window.open(url, "_blank");
    };
    const mentor_list = mentorList.map((i)=>{
        return {
            text: i.name,
            value: i.user_code
        };
    });
    const startClassModal = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal, {
            onClose: ()=>onCloseModal()
            ,
            open: openModal != null ? true : false,
            closeIcon: true,
            size: "tiny",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal.Header, {
                    children: "Create Classes"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal.Content, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal.Description, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
                                    value: feilds === null || feilds === void 0 ? void 0 : feilds.batch_start_time,
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: (e, data)=>onHandleChange(data.value, "batch_start_time")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
                                    value: feilds === null || feilds === void 0 ? void 0 : feilds.batch_end_time,
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: (e, data)=>onHandleChange(data.value, "batch_end_time")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
                                    fluid: true,
                                    selection: true,
                                    placeholder: "Change Mentor",
                                    options: mentor_list,
                                    value: feilds === null || feilds === void 0 ? void 0 : feilds.batch_mentor_id,
                                    onChange: (e, data)=>onHandleChange(data.value, "batch_mentor_id")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
                                    value: feilds === null || feilds === void 0 ? void 0 : feilds.class_link,
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: (e, data)=>onHandleChange(data.value, "class_link")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal.Actions, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
                            color: "orange",
                            loading: loading,
                            onClick: ()=>onCreateClass()
                            ,
                            children: "Create Class"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
                            content: "Update Class",
                            labelPosition: "right",
                            icon: "checkmark",
                            onClick: ()=>onUpdateClass()
                            ,
                            positive: true,
                            loading: loading
                        })
                    ]
                })
            ]
        }));
    };
    const dashboardData = studentDashboardState.mentorDashboardData;
    if (((ref9 = dashboardData.batch_details) === null || ref9 === void 0 ? void 0 : ref9.length) == 0) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                height: isMobileView ? "300px" : "700px",
                width: isMobileView ? "300px" : "700px",
                margin: "auto"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, {
                src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fno_data.png?alt=media&token=79834bd2-97fa-4f63-897f-fe9498236194",
                alt: "tremendo dashboard banner",
                height: isMobileView ? "300px" : "800px",
                width: isMobileView ? "300px" : "700px",
                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().banner)
            })
        }));
    }
    if (studentDashboardState.mentorDashboardDataLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dashboard_StudentDashboardSkelton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        }));
    }
    const attendencePercentage = ((ref1 = dashboardData.attandance_data) === null || ref1 === void 0 ? void 0 : ref1.present_count) / (((ref2 = dashboardData.attandance_data) === null || ref2 === void 0 ? void 0 : ref2.present_count) + ((ref3 = dashboardData.attandance_data) === null || ref3 === void 0 ? void 0 : ref3.absent_count)) * 100;
    const chartLabel = (ref4 = dashboardData.progress_data) === null || ref4 === void 0 ? void 0 : ref4.map((i)=>i.user_name
    );
    const marks = (ref5 = dashboardData.progress_data) === null || ref5 === void 0 ? void 0 : ref5.map((i)=>i.student_score
    );
    let classesArray = [];
    days.forEach((i, index)=>{
        var ref;
        return (ref = dashboardData.batch_details) === null || ref === void 0 ? void 0 : ref.forEach((j)=>{
            if (moment__WEBPACK_IMPORTED_MODULE_4___default()(j.class_date).isoWeekday() == index + 1) {
                classesArray.push({
                    day_name: i,
                    data: {
                        ...j
                    }
                });
            } else {
                classesArray.push({
                    day_name: i,
                    data: null
                });
            }
        });
    });
    const batch_days = (ref6 = dashboardData.batch_data) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.batch_class_days) === null || ref7 === void 0 ? void 0 : ref7.split(",");
    const checkTodaysClassValidate = (ref8 = dashboardData.class_details) === null || ref8 === void 0 ? void 0 : ref8.find((i)=>moment__WEBPACK_IMPORTED_MODULE_4___default()(i.class_date).isoWeekday() == currentDay
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().base),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().chartHeading),
                children: "Batch Details"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().dateMonthHeading),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().courseName),
                        children: "Date"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().batchName),
                        children: moment__WEBPACK_IMPORTED_MODULE_4___default()().format("MMM")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().datesWrapper),
                children: totalDatesInCurrentMonth.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().date),
                        style: {
                            backgroundColor: currentDate == i + 1 && "#fa9116"
                        },
                        id: currentDate == i + 1 ? "currentDate" : "otherDate",
                        children: i + 1
                    }, i)
                )
            }),
            days.map((i, index)=>{
                var ref, ref10, ref11;
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().courseDetailSection),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().detailsWrapper),
                        style: {
                            backgroundColor: !(batch_days === null || batch_days === void 0 ? void 0 : batch_days.includes(i)) || currentDay > index + 1 ? "#f2efef" : "#25b1ae"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().batchCode),
                                children: isMobileView ? i.substring(0, 3) : i
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().batchCode),
                                children: (ref = dashboardData.batch_data) === null || ref === void 0 ? void 0 : ref.batch_mentor
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().timeCode),
                                children: `${(ref10 = dashboardData.batch_data) === null || ref10 === void 0 ? void 0 : ref10.batch_start_time} - ${(ref11 = dashboardData.batch_data) === null || ref11 === void 0 ? void 0 : ref11.batch_end_time}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().batchCode),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    label: !(batch_days === null || batch_days === void 0 ? void 0 : batch_days.includes(i)) || currentDay > index + 1 ? "Finished" : checkTodaysClassValidate ? "Go To Link" : "Get Started",
                                    height: 33,
                                    borderRadius: 16,
                                    backgroundColor: !(batch_days === null || batch_days === void 0 ? void 0 : batch_days.includes(i)) || currentDay > index + 1 ? "#e6e4e4" : "#51faf6",
                                    textStyle: {
                                        color: "#000",
                                        fontWeight: "bold",
                                        fontFamily: "Open Sans",
                                        fontSize: isMobileView ? "10px" : "15px"
                                    },
                                    border: "none",
                                    onClick: checkTodaysClassValidate ? ()=>goToLink(checkTodaysClassValidate.class_link)
                                     : ()=>onClickStartClass()
                                })
                            }),
                            (!(batch_days === null || batch_days === void 0 ? void 0 : batch_days.includes(i)) || currentDay > index + 1) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().overlay)
                            })
                        ]
                    })
                }, index));
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().chartWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().progressChart),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().chartHeading),
                                children: "Progress"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().progressChartBox),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().barChart),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Bar, {
                                        data: {
                                            labels: chartLabel,
                                            datasets: [
                                                {
                                                    data: marks,
                                                    backgroundColor: [
                                                        "#8BDCDB",
                                                        "#8BDCDB",
                                                        "#8BDCDB",
                                                        "#8BDCDB",
                                                        "#8BDCDB",
                                                        "#8BDCDB",
                                                        "#8BDCDB",
                                                        "#8BDCDB"
                                                    ],
                                                    order: 2
                                                },
                                                {
                                                    data: marks,
                                                    backgroundColor: "#fff",
                                                    borderColor: "#fa9116",
                                                    order: 1,
                                                    type: "line"
                                                }
                                            ]
                                        },
                                        options: options
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().attendenceChart),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().chartHeading),
                                children: "Attendance"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().canvasWrap),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                                        id: "canvas",
                                        width: "240",
                                        height: "240",
                                        "data-percent": attendencePercentage
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_MentorDashboard_module_css__WEBPACK_IMPORTED_MODULE_14___default().showProgress),
                                        id: "procent"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            startClassModal()
        ]
    }));
};

});

/***/ }),

/***/ 2375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8979);
/* harmony import */ var _styles_student_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2416);
/* harmony import */ var _styles_student_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_student_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2380);
/* harmony import */ var _components_Dashboard_MentorDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9009);
/* harmony import */ var _components_CourseDetailTab_BatchManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4501);
/* harmony import */ var _components_MyResourceTab_MentorMyResource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(454);
/* harmony import */ var _components_ProgressTab_MentorProgresstab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4398);
/* harmony import */ var _components_FaqTab_MentorFaq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3509);
/* harmony import */ var _components_ProfileTab_MentorProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9796);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6076);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7727);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1554);
/* harmony import */ var _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3897);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_withAuth__WEBPACK_IMPORTED_MODULE_4__, _components_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__, _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_14__, _Context_Provider__WEBPACK_IMPORTED_MODULE_13__, _components_ProfileTab_MentorProfile__WEBPACK_IMPORTED_MODULE_10__, _components_FaqTab_MentorFaq__WEBPACK_IMPORTED_MODULE_9__, _components_ProgressTab_MentorProgresstab__WEBPACK_IMPORTED_MODULE_8__, _components_MyResourceTab_MentorMyResource__WEBPACK_IMPORTED_MODULE_7__, _components_CourseDetailTab_BatchManagement__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_MentorDashboard__WEBPACK_IMPORTED_MODULE_5__]);
([_utils_withAuth__WEBPACK_IMPORTED_MODULE_4__, _components_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__, _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_14__, _Context_Provider__WEBPACK_IMPORTED_MODULE_13__, _components_ProfileTab_MentorProfile__WEBPACK_IMPORTED_MODULE_10__, _components_FaqTab_MentorFaq__WEBPACK_IMPORTED_MODULE_9__, _components_ProgressTab_MentorProgresstab__WEBPACK_IMPORTED_MODULE_8__, _components_MyResourceTab_MentorMyResource__WEBPACK_IMPORTED_MODULE_7__, _components_CourseDetailTab_BatchManagement__WEBPACK_IMPORTED_MODULE_6__, _components_Dashboard_MentorDashboard__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















const INITIAL_TAB_INDEX = 6;
function Mentor() {
    const tabs = [
        {
            id: 1,
            tab: "Dashboard",
            icon: "dashboardIcon",
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_MentorDashboard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            })
        },
        {
            id: 2,
            tab: "Batch Details",
            icon: "courseDetail",
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CourseDetailTab_BatchManagement__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            })
        },
        {
            id: 3,
            tab: "My Resources",
            icon: "myResource",
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MyResourceTab_MentorMyResource__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            })
        },
        {
            id: 4,
            tab: "Progress",
            icon: "progress",
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProgressTab_MentorProgresstab__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            })
        },
        {
            id: 5,
            tab: "FAQ",
            icon: "faq",
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FaqTab_MentorFaq__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            })
        },
        {
            id: 6,
            tab: "Profile",
            icon: "setting",
            component: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProfileTab_MentorProfile__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            })
        }
    ];
    const { 0: selectedTabIndex , 1: setSelectedTabIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(INITIAL_TAB_INDEX);
    const { studentDashboardState , studentDashboardDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_13__/* .GlobalContext */ .k);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const clickOnTab = (data)=>{
        setSelectedTabIndex(data.id);
        router.push(`${_utils_routes__WEBPACK_IMPORTED_MODULE_15__/* .MENTOR_DASHBOARD_PATH */ .o7}?id=${data.id}`);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setTabIndex();
        getInitalData();
    }, []);
    const setTabIndex = ()=>{
        const tabID = router.query.id ? router.query.id : INITIAL_TAB_INDEX;
        setSelectedTabIndex(tabID);
    };
    const getInitalData = async ()=>{
        const batches = await (0,_Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_14__/* .getMentorBatches */ .G6)()(dispatch);
        const firstBatchId = batches.data.length > 0 && batches.data[0].batch_id;
        await (0,_Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_14__/* .getMentorStudentList */ .FK)(firstBatchId)(dispatch);
        await (0,_Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_14__/* .mentorUpcomingTasks */ .BR)()(dispatch);
    };
    const userDetails =  false && 0;
    if (userDetails && userDetails.access_type != _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .LOGIN_MENTOR_TAB */ .fr) {
        return false;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_student_module_css__WEBPACK_IMPORTED_MODULE_16___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Tremendo-Dashboard"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Dashboard page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                tabsData: tabs,
                selectTab: (data)=>clickOnTab(data)
                ,
                selectedTab: selectedTabIndex,
                studentDashboard: false,
                sendDataCallback: (id)=>setSelectedTabIndex(id)
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_withAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Mentor));

});

/***/ }),

/***/ 5650:
/***/ ((module) => {

"use strict";
module.exports = require("@researchgate/react-intersection-observer");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("chart.js/auto");

/***/ }),

/***/ 3860:
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),

/***/ 1668:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/storage");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8919:
/***/ ((module) => {

"use strict";
module.exports = require("phone");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

"use strict";
module.exports = require("react-chartjs-2");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [563,580,510,325,620,232,979], () => (__webpack_exec__(2375)));
module.exports = __webpack_exports__;

})();
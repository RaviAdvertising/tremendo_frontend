exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 274:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "Tab_base__7TpfJ",
	"mobileBase": "Tab_mobileBase__3yTNa",
	"leftSection": "Tab_leftSection__1ChIU",
	"centerSection": "Tab_centerSection__1VSKT",
	"rightSection": "Tab_rightSection__1I-Ca",
	"searchHeader": "Tab_searchHeader__2Z71V",
	"search": "Tab_search__1kcut",
	"dateSection": "Tab_dateSection__1mB1Z",
	"flagSection": "Tab_flagSection__1Ybgn",
	"mentorBatchDetails": "Tab_mentorBatchDetails__225Ie",
	"batchesDropDown": "Tab_batchesDropDown__3zXub",
	"tabs": "Tab_tabs__1wfyi",
	"tabName": "Tab_tabName__3FHOe",
	"tabIcon": "Tab_tabIcon__26s0C",
	"tabWrapper": "Tab_tabWrapper__2qZjp",
	"footerBanner": "Tab_footerBanner__1vfYs",
	"footerText": "Tab_footerText__Fg9hN",
	"footerImg": "Tab_footerImg__1MDqQ",
	"profileWrapper": "Tab_profileWrapper__gJ4oA",
	"topHeader": "Tab_topHeader__aMax-",
	"lens": "Tab_lens__1SzS5",
	"profileName": "Tab_profileName__2VE6t",
	"upcomingTaskHeading": "Tab_upcomingTaskHeading__hqQKH",
	"upcomingTaskBox": "Tab_upcomingTaskBox__1oMz_",
	"upcomingTaskSection": "Tab_upcomingTaskSection__2nAkR",
	"taskWrapper": "Tab_taskWrapper__3iylS",
	"taskImage": "Tab_taskImage__1w-cd",
	"taskDetail": "Tab_taskDetail__25ysj",
	"taskName": "Tab_taskName__1G1OT",
	"taskTime": "Tab_taskTime__1rfkN",
	"letsTalkSection": "Tab_letsTalkSection__2qac6",
	"chatNameAndImgWrapper": "Tab_chatNameAndImgWrapper__1Oo42",
	"userName": "Tab_userName__1swch",
	"messageTime": "Tab_messageTime__3SoXd",
	"chatMessageBox": "Tab_chatMessageBox__KS_xo",
	"chatBoxWrapper": "Tab_chatBoxWrapper__2DTyo",
	"chatInputWrapper": "Tab_chatInputWrapper__1M5BB",
	"chatIcons": "Tab_chatIcons__3Vv0j",
	"navbarMobile": "Tab_navbarMobile__3JmP6",
	"pusherSection": "Tab_pusherSection__3Xfz_",
	"segmentBasic": "Tab_segmentBasic__1a_9G",
	"sidebarSection": "Tab_sidebarSection__VPyVE",
	"optionWrapper": "Tab_optionWrapper__1A-Ax",
	"searchOptions": "Tab_searchOptions__d3GJ9",
	"overlay": "Tab_overlay__2xfHE"
};


/***/ }),

/***/ 8979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9819);
/* harmony import */ var _Tab_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(274);
/* harmony import */ var _Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Tab_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7661);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6076);
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5325);
/* harmony import */ var _DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7534);
/* harmony import */ var _DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6873);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1554);
/* harmony import */ var _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3897);
/* harmony import */ var _Context_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9213);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_8__, _DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__, _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_12__, _Context_Provider__WEBPACK_IMPORTED_MODULE_11__]);
([_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_8__, _DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__, _Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_12__, _Context_Provider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















function Tab({ tabsData , selectTab , selectedTab , studentDashboard , sendDataCallback  }) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: startSearch , 1: setStartSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: inputVal , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    const { 0: selectedBatch1 , 1: setSelectedBatches  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)("");
    const { studentDashboardState , authState , languageState , languageDispatch: langDispatch , studentDashboardDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_11__/* .GlobalContext */ .k);
    const SELECTED_TAB_COLOR = "#ff9000";
    const name1 =  false ? 0 : "User";
    const onChangeSearch = (text)=>{
        setInputValue(text);
    };
    const onFocusHandle = ()=>{
        setStartSearch(true);
    };
    const optionSelected = (data)=>{
        setInputValue(data.tab);
        sendDataCallback(data.id);
        setStartSearch(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (studentDashboardState.mentorBatches && studentDashboardState.mentorBatches.length > 0) {
            const id = studentDashboardState.mentorBatches[0].batch_id;
            onHandleChangeBatch(id);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (studentDashboard) {
            (0,_Context_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_13__/* .setStudentSelectedLanguage */ .yt)(authState.profileData.current_language)(langDispatch);
        } else {
            (0,_Context_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_13__/* .storeMentorBatch */ .lA)(authState.profileData.current_language)(langDispatch);
        }
    }, [
        authState.profileData
    ]);
    let searchOptions = tabsData;
    if (inputVal.length > 1) {
        searchOptions = tabsData.filter((list)=>list.tab.toLowerCase().includes(inputVal.trim().toLowerCase())
        );
    }
    const mentorBatches = studentDashboardState.mentorBatches.map((i)=>{
        return {
            text: `${i.batch_language}-${i.batch_id}`,
            value: i.batch_id
        };
    });
    const onHandleChangeBatch = async (id)=>{
        const curr = new Date(); // get current date
        const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        const last = first + 6; // last day is the first day + 6
        const firstday = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(curr.setDate(first))).format("x");
        const lastday = moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(curr.setDate(last))).format("x");
        const selectedBatch = authState.profileData.all_languages.find((i)=>i.batch_id == id
        );
        (0,_Context_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_13__/* .storeMentorBatch */ .lA)(selectedBatch)(langDispatch);
        await (0,_Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_12__/* .getMentorStudentList */ .FK)(id)(dispatch);
        (0,_Context_Actions_Dashboard_DashboardAction__WEBPACK_IMPORTED_MODULE_12__/* .getMentorDashboardData */ .Rj)(id, firstday, lastday)(dispatch);
    };
    const onChangeStudentBatch = (value)=>{
        const selectedBatch = authState.profileData.all_languages.find((i)=>i.batch_id == value
        );
        (0,_Context_Actions_Language_LanguageAction__WEBPACK_IMPORTED_MODULE_13__/* .setStudentSelectedLanguage */ .yt)(selectedBatch)(langDispatch);
    };
    const countryOptions = (ref = authState.profileData) === null || ref === void 0 ? void 0 : (ref1 = ref.all_languages) === null || ref1 === void 0 ? void 0 : ref1.map((i)=>{
        return {
            key: i.code,
            value: i.batch_id,
            flag: i.flag,
            text: i.name
        };
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().base),
                    style: {
                        backgroundColor: studentDashboard ? "#ecf8f8" : "#ffecd6"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().leftSection),
                            children: [
                                studentDashboard ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().flagSection),
                                    children: (countryOptions === null || countryOptions === void 0 ? void 0 : countryOptions.length) != 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
                                        fluid: true,
                                        selection: true,
                                        value: (ref2 = languageState.setStudentSelectedLanguage) === null || ref2 === void 0 ? void 0 : ref2.batch_id,
                                        options: countryOptions,
                                        onChange: (e, data)=>onChangeStudentBatch(data.value)
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().mentorBatchDetails),
                                    children: (mentorBatches === null || mentorBatches === void 0 ? void 0 : mentorBatches.length) != 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().batchesDropDown),
                                        fluid: true,
                                        selection: true,
                                        value: (ref3 = languageState.storedMentorBatch) === null || ref3 === void 0 ? void 0 : ref3.batch_id,
                                        options: mentorBatches,
                                        onChange: (e, data)=>onHandleChangeBatch(data.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().tabWrapper),
                                    children: tabsData.map((i, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().tabs),
                                            onClick: ()=>selectTab(i)
                                            ,
                                            style: {
                                                backgroundColor: selectedTab == i.id && "#fbeedf"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().tabIcon),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        name: i.icon,
                                                        color: selectedTab == i.id ? SELECTED_TAB_COLOR : "#2a2a2a",
                                                        fill: selectedTab == i.id
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().tabName),
                                                    children: i.tab
                                                })
                                            ]
                                        }, index)
                                    )
                                }),
                                studentDashboard && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().footerBanner),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().footerText),
                                            children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().footerImg),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FtabFooterImage.png?alt=media&token=3f94b3bf-78a1-4788-a301-4c74d2777f1b",
                                                alt: "tremendo footer image dashboard",
                                                width: "165px",
                                                height: "128px"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().centerSection),
                            style: {
                                backgroundColor: studentDashboard ? "#fff6eb" : "#f8f7f6"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().searchHeader),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().lens),
                                            style: {
                                                backgroundColor: studentDashboard ? "#ecf8f8" : "#f8f8f8"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                name: "lens",
                                                color: studentDashboard ? "#25908d" : "#3f4242"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().search),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                placeholder: "What Are you looking for?",
                                                inputStyling: {
                                                    width: "100%",
                                                    fontSize: "13px",
                                                    backgroundColor: studentDashboard ? "#ecf8f8" : "#f8f8f8",
                                                    color: "#1b1c1c",
                                                    padding: "8px 15px"
                                                },
                                                value: inputVal,
                                                handleChange: (text)=>onChangeSearch(text)
                                                ,
                                                onHandleFocus: ()=>onFocusHandle()
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().dateSection),
                                            children: `${moment__WEBPACK_IMPORTED_MODULE_2___default()().format("dddd")}, ${moment__WEBPACK_IMPORTED_MODULE_2___default()().format("LL")}`
                                        })
                                    ]
                                }),
                                startSearch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().optionWrapper),
                                    children: searchOptions.length > 0 ? searchOptions.map((name, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().searchOptions),
                                            onClick: ()=>optionSelected(name)
                                            ,
                                            children: name.tab
                                        }, index)
                                    ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().searchOptions),
                                        children: "No Result"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().childrenSection),
                                    children: tabsData[selectedTab - 1].component
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().rightSection),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().topHeader),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().profileWrapper),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().profileName),
                                                children: `Hi, ${name1.split(" ")[0]}`
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().notification),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                name: "notification",
                                                color: "#ff9000"
                                            })
                                        })
                                    ]
                                }),
                                studentDashboard ? ((ref4 = studentDashboardState.studentUpcomingTasks) === null || ref4 === void 0 ? void 0 : ref4.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskSection),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskHeading),
                                            children: "Upcoming Task"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskBox),
                                            children: (ref5 = studentDashboardState.studentUpcomingTasks) === null || ref5 === void 0 ? void 0 : ref5.map((i, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskWrapper),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskImage)
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskDetail),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskName),
                                                                    children: i.title
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskTime),
                                                                    children: moment__WEBPACK_IMPORTED_MODULE_2___default()(i.start_date).format("LL")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index)
                                            )
                                        })
                                    ]
                                }) : ((ref6 = studentDashboardState.mentorUpcomingTask) === null || ref6 === void 0 ? void 0 : ref6.length) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskSection),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskHeading),
                                            children: "Upcoming Task"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskBox),
                                            children: (ref7 = studentDashboardState.mentorUpcomingTask) === null || ref7 === void 0 ? void 0 : ref7.map((i, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskWrapper),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskImage)
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskDetail),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskName),
                                                                    children: i.title
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskTime),
                                                                    children: moment__WEBPACK_IMPORTED_MODULE_2___default()(i.start_date).format("LL")
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index)
                                            )
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().letsTalkSection),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskHeading),
                                            children: "Let’s Talk"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                src: "https://discord.com/widget?id=960554347324907540&theme=dark",
                                                width: "100%",
                                                height: "500",
                                                allowtransparency: "true",
                                                frameBorder: "0",
                                                sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().letsTalkSection),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskHeading),
                                            children: studentDashboard ? "Batch Mates" : "Students"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginTop: "10px"
                                            },
                                            children: studentDashboard ? (ref8 = studentDashboardState.studentBatchMates) === null || ref8 === void 0 ? void 0 : ref8.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Label, {
                                                    as: "a",
                                                    children: i.name
                                                }, i.name)
                                            ) : studentDashboardState.mentorStudentList.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Label, {
                                                    as: "a",
                                                    children: i.user_name
                                                }, i.student_batch_id)
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().mobileBase),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().navbarMobile),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {
                                        name: "list",
                                        size: "large",
                                        onClick: ()=>setVisible(!visible)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().search),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        placeholder: "What Are you looking for?",
                                        inputStyling: {
                                            width: "100%",
                                            fontSize: "13px",
                                            backgroundColor: studentDashboard ? "#ecf8f8" : "#f8f8f8",
                                            color: "#1b1c1c",
                                            padding: "8px 15px"
                                        },
                                        value: inputVal,
                                        handleChange: (text)=>onChangeSearch(text)
                                        ,
                                        onHandleFocus: ()=>onFocusHandle()
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().profileName),
                                    children: `Hi, ${name1.split(" ")[0]}`
                                })
                            ]
                        }),
                        startSearch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().optionWrapper),
                            children: searchOptions.length > 0 ? searchOptions.map((name, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().searchOptions),
                                    onClick: ()=>optionSelected(name)
                                    ,
                                    children: name.tab
                                }, index)
                            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().searchOptions),
                                children: "No Result"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Sidebar.Pushable, {
                                as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Segment,
                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().pusherSection),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Sidebar, {
                                        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Menu,
                                        animation: "overlay",
                                        icon: "labeled",
                                        onHide: ()=>setVisible(false)
                                        ,
                                        vertical: true,
                                        visible: visible,
                                        width: "thin",
                                        style: {
                                            backgroundColor: studentDashboard ? "rgb(236, 248, 248)" : "#ffecd6"
                                        },
                                        children: tabsData.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>selectTab(i)
                                                ,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {
                                                    as: "a",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            name: i.icon,
                                                            color: selectedTab == i.id ? SELECTED_TAB_COLOR : "#2a2a2a",
                                                            fill: selectedTab == i.id
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: i.tab
                                                        })
                                                    ]
                                                })
                                            }, index)
                                        )
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Sidebar.Pusher, {
                                        dimmed: visible,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Segment, {
                                            basic: true,
                                            className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().segmentBasic),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    backgroundColor: studentDashboard ? "#fff6eb" : "#f8f7f6"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().childrenSection),
                                                        children: tabsData[selectedTab - 1].component
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskSection),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskHeading),
                                                                children: "Upcoming Task"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().upcomingTaskBox),
                                                                children: [
                                                                    1,
                                                                    1,
                                                                    1,
                                                                    1
                                                                ].map((i, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskWrapper),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskImage)
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskDetail),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskName),
                                                                                        children: "Lorem Ipsum Lorem"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().taskTime),
                                                                                        children: "Time & Date"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }, index)
                                                                )
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            startSearch && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Tab_module_css__WEBPACK_IMPORTED_MODULE_14___default().overlay),
                onClick: ()=>setStartSearch(!startSearch)
            })
        ]
    }));
};

});

/***/ })

};
;
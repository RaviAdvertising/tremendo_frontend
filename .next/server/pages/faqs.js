(() => {
var exports = {};
exports.id = 188;
exports.ids = [188,888];
exports.modules = {

/***/ 9133:
/***/ ((module) => {

// Exports
module.exports = {
	"headerWrapper": "FaqsStrip_headerWrapper__gR5hX",
	"header": "FaqsStrip_header__2rCqM",
	"content": "FaqsStrip_content__3u3Kk",
	"closeIcon": "FaqsStrip_closeIcon__2ROYR"
};


/***/ }),

/***/ 6106:
/***/ ((module) => {

// Exports
module.exports = {
	"inputStyling": "Input_inputStyling__3i3TK"
};


/***/ }),

/***/ 4767:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "PageLoader_base__2cfh8",
	"loaderWrapper": "PageLoader_loaderWrapper__2aI9l",
	"loader": "PageLoader_loader__HJu-I",
	"load7": "PageLoader_load7__3UGE7"
};


/***/ }),

/***/ 4505:
/***/ ((module) => {

// Exports
module.exports = {
	"sections": "Faqs_sections__2sMcP",
	"headerWrapper": "Faqs_headerWrapper__ZDhoS",
	"headerHeading": "Faqs_headerHeading__vckV2",
	"borderLineStyling": "Faqs_borderLineStyling__2GmSU",
	"header": "Faqs_header__cnmTh",
	"faqStripWrapper": "Faqs_faqStripWrapper__1aa2b",
	"blogs": "Faqs_blogs__1xcdj",
	"contentWrapper": "Faqs_contentWrapper__1t2Hk",
	"faqStrip": "Faqs_faqStrip__7kQX5",
	"strips": "Faqs_strips__26hKa",
	"askButtonWrapper": "Faqs_askButtonWrapper__1ZiIK",
	"askBtn": "Faqs_askBtn__1Ig1J",
	"imageInputWrapper": "Faqs_imageInputWrapper__1rCvt",
	"inputSection": "Faqs_inputSection__1Nx2S",
	"cancelAskWrapper": "Faqs_cancelAskWrapper__3tZ7e",
	"cancelBtn": "Faqs_cancelBtn__2kfSZ",
	"smallAskBtn": "Faqs_smallAskBtn__2rskS",
	"answerBox": "Faqs_answerBox__3Nf0L"
};


/***/ }),

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FaqsStrip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9133);
/* harmony import */ var _FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2__);



function FaqsStrip(props) {
    const toggleBar = ()=>{
        props.clickOnBar();
    };
    const data = props.data;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2___default().headerWrapper),
                style: {
                    backgroundColor: props.isOpen == props.id ? "#f78f1e" : "#fff"
                },
                onClick: ()=>toggleBar()
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),
                        style: {
                            color: props.isOpen == props.id ? "#fff" : "#1f1f1f"
                        },
                        children: data.faq
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeIcon)}`,
                        style: {
                            color: props.isOpen == props.id ? "#fff" : "#f78f1e",
                            transform: props.isOpen == props.id && "rotate(45deg)"
                        },
                        children: "+"
                    })
                ]
            }),
            props.isOpen == props.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_FaqsStrip_module_css__WEBPACK_IMPORTED_MODULE_2___default().content)}`,
                children: data.answer
            })
        ]
    }));
};


/***/ }),

/***/ 9819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6106);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Input(props) {
    const handleChange = (event)=>{
        if (props.handleChange) props.handleChange(event.target.value);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: props.type,
            placeholder: props.placeholder,
            className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputStyling),
            style: props.inputStyling,
            onChange: (event)=>handleChange(event)
            ,
            autoComplete: "off",
            value: props.value,
            disabled: props.disabled,
            onFocus: (event)=>{
                if (props.onHandleFocus) props.onHandleFocus(event);
            }
        })
    }));
};


/***/ }),

/***/ 1412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4767);
/* harmony import */ var _PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3__);




class PageLoader extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        return this.props.show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().base),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().loaderWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().loader)
                })
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        });
    }
};
PageLoader.defaultProps = {
    show: true
};
PageLoader.propsTypes = {
    show: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};


/***/ }),

/***/ 2107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Faqs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3664);
/* harmony import */ var _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7534);
/* harmony import */ var _components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6873);
/* harmony import */ var _components_FaqsStrip_FaqsStrip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6840);
/* harmony import */ var _components_Image_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5325);
/* harmony import */ var _styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4505);
/* harmony import */ var _styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6076);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9819);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1554);
/* harmony import */ var _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2132);
/* harmony import */ var _components_Skelton_LanguageDetailSkelton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2569);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9915);
/* harmony import */ var _components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1412);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7727);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__, js_cookie__WEBPACK_IMPORTED_MODULE_14__, _Context_Provider__WEBPACK_IMPORTED_MODULE_11__]);
([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__, js_cookie__WEBPACK_IMPORTED_MODULE_14__, _Context_Provider__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



















function Faqs() {
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: question1 , 1: setQuestion  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const { homeState , homeDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_11__/* .GlobalContext */ .k);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__/* .getFaqs */ .nm)()(dispatch);
    }, []);
    const toggleBar = (id)=>{
        if (isOpen == id) {
            setIsOpen(null);
        } else {
            setIsOpen(id);
        }
    };
    const header = (headerName)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().headerWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().borderLineStyling)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().headerHeading),
                    children: headerName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().borderLineStyling)
                })
            ]
        }));
    };
    const onHandleChange = (question)=>{
        setQuestion(question);
    };
    const imageUrl =  false ? 0 : "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41";
    const askAQuestion = async ()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_14__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)) {
            setOpenModal(true);
            await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__/* .getUserFaqs */ .c8)()(dispatch);
        } else {
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .ASK_A_QUESTION */ ._S, true);
            router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* .LOGIN_PATH */ .wm);
        }
    };
    const askUserQuestion = async ()=>{
        if (question1 != "") {
            const payload = {
                faq: question1,
                access_token: js_cookie__WEBPACK_IMPORTED_MODULE_14__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)
            };
            await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__/* .addUserFaqs */ .SH)(payload)(dispatch);
            await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_12__/* .getUserFaqs */ .c8)()(dispatch);
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Tremendo-Faqs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Faqs page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            (homeState.addUserFaqLoading || homeState.getUserFaqLoading) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().banner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FfaqsBanner.png?alt=media&token=0ffff088-5418-42d9-a4d9-ff56e8da0460",
                            paddingBottom: "21%",
                            alt: "banner logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785",
                            paddingBottom: "65%",
                            alt: "banner logo"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().sections),
                children: [
                    homeState.getFaqsLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skelton_LanguageDetailSkelton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().contentWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().header),
                                children: header("FREQUENTLY ASKED QUESTIONS")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().faqStripWrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().strips),
                                        children: homeState.getFaqs.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().faqStrip),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FaqsStrip_FaqsStrip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    clickOnBar: ()=>toggleBar(index)
                                                    ,
                                                    isOpen: isOpen,
                                                    id: index,
                                                    data: i
                                                })
                                            }, index)
                                        )
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().askButtonWrapper),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().askBtn),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    label: "Ask a question",
                                                    height: 55,
                                                    borderRadius: 10,
                                                    backgroundColor: "#f78f1f",
                                                    textStyle: {
                                                        color: "#fff",
                                                        fontWeight: "bold",
                                                        fontFamily: " Open Sans",
                                                        fontSize: "24px"
                                                    },
                                                    border: "none",
                                                    onClick: ()=>askAQuestion()
                                                })
                                            }),
                                            openModal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().imageInputWrapper),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().imageSection),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, {
                                                                    src: imageUrl,
                                                                    circular: true,
                                                                    alt: "user-image",
                                                                    height: "40px",
                                                                    width: "40px"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().inputSection),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                    placeholder: "Write your question here.",
                                                                    inputStyling: {
                                                                        backgroundColor: "#e9e8e6",
                                                                        padding: "14px"
                                                                    },
                                                                    handleChange: (text)=>onHandleChange(text)
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().cancelAskWrapper),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().cancelBtn),
                                                                onClick: ()=>setOpenModal(false)
                                                                ,
                                                                children: "Cancel"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().smallAskBtn),
                                                                onClick: ()=>askUserQuestion()
                                                                ,
                                                                children: "Ask"
                                                            })
                                                        ]
                                                    }),
                                                    homeState.getUserFaq.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().answerBox),
                                                        children: homeState.getUserFaq.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_Faqs_module_css__WEBPACK_IMPORTED_MODULE_17___default().faqStrip),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FaqsStrip_FaqsStrip__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    clickOnBar: ()=>toggleBar(i.updated_at)
                                                                    ,
                                                                    isOpen: isOpen,
                                                                    id: i.updated_at,
                                                                    data: i
                                                                })
                                                            }, index)
                                                        )
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Flearn_grow_lead.png?alt=media&token=28f934e6-52ec-4783-a68b-aca27f4d2d3e",
                            paddingBottom: "15%",
                            alt: "banner logo"
                        })
                    })
                ]
            })
        ]
    }));
};

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [563,649,510,325,569], () => (__webpack_exec__(2107)));
module.exports = __webpack_exports__;

})();
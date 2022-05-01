"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459,888];
exports.modules = {

/***/ 8686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6676);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9819);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7727);
/* harmony import */ var _utils_firebaseMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(474);
/* harmony import */ var _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7534);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4938);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3664);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9915);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1554);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8510);
/* harmony import */ var _components_FacebookLogin_FacebookLogin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3332);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_9__, _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_13__, _app__WEBPACK_IMPORTED_MODULE_15__, _Context_Provider__WEBPACK_IMPORTED_MODULE_14__]);
([_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_9__, _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_13__, _app__WEBPACK_IMPORTED_MODULE_15__, _Context_Provider__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



















const STUDENT_BACKGROUND_COLOR = "#ecf8f8";
const MENTOR_BACKGROUND_COLOR = "#fbeedf";
function Login(props) {
    const { 0: selectedTab , 1: setSelectedTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb);
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const { authState , authDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_14__/* .GlobalContext */ .k);
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app__WEBPACK_IMPORTED_MODULE_15__.DeviceContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    if (js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_TOKEN */ .t5)) {
        router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .HOME_PAGE */ .s6);
        return false;
    }
    const selectedTabStyling = {
        color: "#212121",
        borderBottom: "3px solid #212121"
    };
    const unSelectedTabStyling = {
        color: "rgba(56, 56, 56, 0.3)",
        borderBottom: "3px solid rgba(56, 56, 56, 0.3)"
    };
    const socialLogin = async (provider, type, fbResponse)=>{
        let payload = {
        }, profileImage = "";
        if (type == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_TYPE_GOOGLE */ .z) {
            const res = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(provider);
            payload = {
                email: res.email,
                type: type,
                gg_token: type == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_TYPE_GOOGLE */ .z && res.uid,
                fb_token: "",
                access_type: selectedTab
            };
            profileImage = res.photoURL;
        } else {
            var ref, ref1;
            payload = {
                email: fbResponse.email,
                type: type,
                gg_token: "",
                fb_token: fbResponse.accessToken,
                access_type: selectedTab
            };
            profileImage = (ref = fbResponse.picture) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.url;
        }
        const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .loginAuth */ .i8)(payload)(dispatch);
        const localstorageValue = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .USER_DETAILS */ .DX) && JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .USER_DETAILS */ .DX));
        const updatedLocalstorage = {
            ...localstorageValue,
            profileUrl: profileImage
        };
        localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .USER_DETAILS */ .DX, JSON.stringify(updatedLocalstorage));
        if (response.type == _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .LOGIN_ERROR */ .iP) {
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(response.error.msg, {
                theme: "colored"
            });
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(response.data.msg, {
                theme: "colored"
            });
            actionAfterLogin(response.data);
        }
    };
    const handleChange = (type, value)=>{
        setFields({
            ...fields,
            [type]: value
        });
        setErrors({
        });
    };
    const goToLogin = async ()=>{
        let errors = {
            ...errors
        };
        if (!fields.email) {
            errors["email"] = "Please Enter Email Id";
            setErrors(errors);
            return false;
        } else if (fields.email && !_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .EMAIL_REGULAR_EXPRESSION.test */ .tp.test(fields.email)) {
            errors["email"] = "Please Enter Correct Email Id";
            setErrors(errors);
            return false;
        } else if (!fields.password) {
            errors["password"] = "Please Enter Password";
            setErrors(errors);
            return false;
        } else {
            const payload = {
                ...fields,
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_TYPE_EMAIL */ .tI,
                gg_token: "",
                fb_token: "",
                access_type: selectedTab
            };
            const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .loginAuth */ .i8)(payload)(dispatch);
            if (response.type == _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .LOGIN_ERROR */ .iP) {
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(response.error.msg, {
                    theme: "colored"
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.success(response.data.msg, {
                    theme: "colored"
                });
                actionAfterLogin(response.data);
            }
        }
    };
    const actionAfterLogin = (response)=>{
        const order_id = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_DETAIL */ .RC);
        const askAQuestion = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .ASK_A_QUESTION */ ._S);
        if (order_id) {
            router.replace(`${_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .PAYMENT_PATH */ .UK}?id=${order_id}`);
            localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .ORDER_DETAIL */ .RC);
        } else if (askAQuestion) {
            router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .FAQS_PATH */ .lC);
            localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .ASK_A_QUESTION */ ._S);
        } else {
            if (response.data.access_type == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_MENTOR_TAB */ .fr) {
                router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .MENTOR_DASHBOARD_PATH */ .o7);
            } else {
                router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .STUDENT_DASHBOARD_PATH */ .M4);
            }
        }
    };
    const loginFormWithImage = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().imageAndLoginWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().loginImage),
                        style: {
                            justifyContent: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb && "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            src: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb ? "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fstudent_login.png?alt=media&token=b5f43022-0fde-4ce5-8c6a-9aa5d4dd2240" : "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fmentor_login.png?alt=media&token=c838e554-ef41-4f34-ab98-01ac7e75fdd6",
                            alt: "login page",
                            width: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb ? "550px" : "567px",
                            height: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb ? "350px" : "515px"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: !isMobileView ? "50%" : "100%"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().loginSection),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().heading),
                                children: "Hello!"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().inputs),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "text",
                                        placeholder: "Email or Username",
                                        inputStyling: {
                                            height: "50px",
                                            borderRadius: "43px",
                                            fontSize: "16px",
                                            border: "1px solid grey",
                                            padding: "0 20px 0 30px",
                                            width: "100%"
                                        },
                                        handleChange: (e)=>handleChange("email", e)
                                    }),
                                    errors1["email"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                                        children: errors1["email"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().inputs),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        type: "password",
                                        placeholder: "Password",
                                        inputStyling: {
                                            height: "50px",
                                            borderRadius: "43px",
                                            border: "1px solid grey",
                                            fontSize: "16px",
                                            padding: "0 20px 0 30px",
                                            width: "100%"
                                        },
                                        handleChange: (e)=>handleChange("password", e)
                                    }),
                                    errors1["password"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                                        children: errors1["password"]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().remeberMeAndForgotPwd),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().rememberMe),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
                                        label: "Remember me"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                label: "LOG IN",
                                height: 55,
                                borderRadius: 43,
                                backgroundColor: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb ? "#25908d" : "#f78f1e",
                                textStyle: {
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontFamily: "Open Sans",
                                    fontSize: "16px"
                                },
                                border: "none",
                                loading: authState === null || authState === void 0 ? void 0 : authState.loginLoading,
                                onClick: ()=>goToLogin()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
                                horizontal: true,
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().dividerStyle),
                                children: "or login with"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().socialLoginBtn),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().socialBtn),
                                        onClick: ()=>socialLogin(_utils_firebaseMethods__WEBPACK_IMPORTED_MODULE_8__/* .googleProvider */ .V, _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_TYPE_GOOGLE */ .z)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fgoogle_loginbtn.png?alt=media&token=6d6162cd-0e6f-413d-b53a-10203f0be385",
                                            alt: "google login btn",
                                            height: "60px",
                                            width: "200px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FacebookLogin_FacebookLogin__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        height: "60px",
                                        width: "200px",
                                        responseFacebook: (response)=>socialLogin(false, _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_TYPE_FB */ .$u, response)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().bottomTexts),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().text1),
                                        children: "New user? "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().text2),
                                        onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .SIGN_UP_PATH */ .WE)
                                        ,
                                        children: "Sign Up Here"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        }));
    };
    const onChangeTabs = (type)=>{
        setSelectedTab(type);
        setErrors({
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Log in"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Login page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().loginBox),
                style: {
                    backgroundColor: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb ? STUDENT_BACKGROUND_COLOR : MENTOR_BACKGROUND_COLOR
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().tabWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().tab),
                                style: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb ? selectedTabStyling : unSelectedTabStyling,
                                onClick: ()=>onChangeTabs(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_STUDENT_TAB */ .mb)
                                ,
                                children: "For Student"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().tab),
                                style: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_MENTOR_TAB */ .fr ? selectedTabStyling : unSelectedTabStyling,
                                onClick: ()=>onChangeTabs(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_MENTOR_TAB */ .fr)
                                ,
                                children: "For Mentor"
                            })
                        ]
                    }),
                    loginFormWithImage()
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_18___default().termAndCondition),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftnc.pdf?alt=media&token=ae0e7ac3-62fc-45cf-b9db-8c2291429176",
                        download: "Term&Condition",
                        target: "_blank",
                        rel: "noreferrer",
                        style: {
                            cursor: "pointer",
                            color: "#2048bb"
                        },
                        children: "Terms and Conditions"
                    }),
                    " ",
                    "and",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fprivacy_policy.pdf?alt=media&token=162279da-2bec-4e1a-a47a-c330bd24b919",
                        download: "Privacy_and_policy",
                        target: "_blank",
                        rel: "noreferrer",
                        style: {
                            cursor: "pointer",
                            color: "#2048bb"
                        },
                        children: "Privacy Policy."
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3860:
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("firebase/storage");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6804:
/***/ ((module) => {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [563,580,510,683,198], () => (__webpack_exec__(8686)));
module.exports = __webpack_exports__;

})();
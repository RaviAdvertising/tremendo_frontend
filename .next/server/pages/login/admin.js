"use strict";
(() => {
var exports = {};
exports.id = 139;
exports.ids = [139,888];
exports.modules = {

/***/ 8471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminLogin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6676);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9819);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7727);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4938);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3664);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9915);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1554);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_9__, _app__WEBPACK_IMPORTED_MODULE_11__, _Context_Provider__WEBPACK_IMPORTED_MODULE_10__]);
([_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_7__, js_cookie__WEBPACK_IMPORTED_MODULE_9__, _app__WEBPACK_IMPORTED_MODULE_11__, _Context_Provider__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














function AdminLogin(props) {
    const { 0: selectedTab , 1: setSelectedTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .SUPER_ADMIN_ACCESS_TYPE */ .V6);
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    const { authState , authDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_10__/* .GlobalContext */ .k);
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app__WEBPACK_IMPORTED_MODULE_11__.DeviceContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    if (js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_TOKEN */ .t5)) {
        router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_12__/* .HOME_PAGE */ .s6);
        return false;
    }
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
            const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_7__/* .loginAuth */ .i8)(payload)(dispatch);
            if (response.type == _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_7__/* .LOGIN_ERROR */ .iP) {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(response.error.msg, {
                    theme: "colored"
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(response.data.msg, {
                    theme: "colored"
                });
                actionAfterLogin();
            }
        }
    };
    const actionAfterLogin = ()=>{
        router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_12__/* .ADMIN_DASHBOARD_PATH */ .uu);
    };
    const loginFormWithImage = ()=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().imageAndLoginWrapper),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: !isMobileView ? "50%" : "100%",
                    margin: "auto"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().loginSection),
                    style: {
                        paddingBottom: "60px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().heading),
                            children: "Hello"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().inputs),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                                    children: errors1["email"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().inputs),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                                    className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                                    children: errors1["password"]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            label: "LOG IN",
                            height: 55,
                            borderRadius: 43,
                            backgroundColor: "#25908d",
                            textStyle: {
                                color: "#fff",
                                fontWeight: "bold",
                                fontFamily: "Open Sans",
                                fontSize: "16px"
                            },
                            border: "none",
                            loading: authState === null || authState === void 0 ? void 0 : authState.loginLoading,
                            onClick: ()=>goToLogin()
                        })
                    ]
                })
            })
        }));
    };
    const selectedTabStyling = {
        color: "#212121",
        borderBottom: "3px solid #212121"
    };
    const unSelectedTabStyling = {
        color: "rgba(56, 56, 56, 0.3)",
        borderBottom: "3px solid rgba(56, 56, 56, 0.3)"
    };
    const onChangeTabs = (type)=>{
        setSelectedTab(type);
        setErrors({
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Admin Log in"
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
                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().loginBox),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().tabWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().tab),
                                style: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .SUPER_ADMIN_ACCESS_TYPE */ .V6 ? selectedTabStyling : unSelectedTabStyling,
                                onClick: ()=>onChangeTabs(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .SUPER_ADMIN_ACCESS_TYPE */ .V6)
                                ,
                                children: "For Super Admin"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_13___default().tab),
                                style: selectedTab == _utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .ADMIN_ACCESS_TYPE */ .xY ? selectedTabStyling : unSelectedTabStyling,
                                onClick: ()=>onChangeTabs(_utils_constants__WEBPACK_IMPORTED_MODULE_2__/* .ADMIN_ACCESS_TYPE */ .xY)
                                ,
                                children: "For Admin"
                            })
                        ]
                    }),
                    loginFormWithImage()
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [563,649,510,683], () => (__webpack_exec__(8471)));
module.exports = __webpack_exports__;

})();
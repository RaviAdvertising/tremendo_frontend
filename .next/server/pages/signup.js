(() => {
var exports = {};
exports.id = 616;
exports.ids = [616,888];
exports.modules = {

/***/ 7454:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "Signup_base__1HjkB",
	"header": "Signup_header__dhfhV",
	"loginImage": "Signup_loginImage__1LOub",
	"loginSection": "Signup_loginSection__1Sj-W",
	"heading": "Signup_heading__3flBO",
	"inputs": "Signup_inputs__1QIdu",
	"loginBtn": "Signup_loginBtn___jbk7",
	"dividerStyle": "Signup_dividerStyle__3D0nx",
	"socialLoginBtn": "Signup_socialLoginBtn__1Qw-9",
	"socialBtn": "Signup_socialBtn__2-SRU",
	"bottomTexts": "Signup_bottomTexts__1f2Uo",
	"text1": "Signup_text1__1mcqq",
	"text2": "Signup_text2__33IAv",
	"wrapper": "Signup_wrapper__3_WSe",
	"tandC": "Signup_tandC__1SGGr",
	"tandC1": "Signup_tandC1__1o5LY",
	"tandC2": "Signup_tandC2__7sVYn",
	"errorMsg": "Signup_errorMsg__1yWwD",
	"dateInput": "Signup_dateInput__3cyea"
};


/***/ }),

/***/ 8111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7454);
/* harmony import */ var _styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9819);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7727);
/* harmony import */ var _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7534);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3664);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6076);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1554);
/* harmony import */ var _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4938);
/* harmony import */ var _utils_firebaseMethods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(474);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9915);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8743);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_FacebookLogin_FacebookLogin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3332);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__, _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_13__, _Context_Provider__WEBPACK_IMPORTED_MODULE_10__]);
([_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__, _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_13__, _Context_Provider__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




















function Signup(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    });
    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    });
    const { authState , authDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_10__/* .GlobalContext */ .k);
    if (js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)) {
        router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* .HOME_PAGE */ .s6);
        return false;
    }
    const handleChange = (type, value)=>{
        if (type == "phone_number" && value.length > 14) {
            setFields({
                ...fields,
                [type]: value
            });
            setErrors({
                phone_number: "Please Enter Valid Number"
            });
        } else {
            setFields({
                ...fields,
                [type]: value
            });
            setErrors({
            });
        }
    };
    const socialLogin = async (provider, type, fbResponse)=>{
        let payload = {
        }, profileImage = "";
        if (type == _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_TYPE_GOOGLE */ .z) {
            const res = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)(provider);
            payload = {
                email: res.email,
                name: res.displayName,
                type: type,
                gg_token: type == _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_TYPE_GOOGLE */ .z && res.uid,
                fb_token: "",
                access_type: _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_STUDENT_TAB */ .mb
            };
            profileImage = res.photoURL;
        } else {
            var ref, ref1;
            payload = {
                email: fbResponse.email,
                name: fbResponse.name,
                type: type,
                gg_token: "",
                fb_token: fbResponse.accessToken,
                access_type: _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_STUDENT_TAB */ .mb
            };
            profileImage = (ref = fbResponse.picture) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.url;
        }
        const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .signupAuth */ .q9)(payload)(dispatch);
        const localstorageValue = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .USER_DETAILS */ .DX) && JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .USER_DETAILS */ .DX));
        const updatedLocalstorage = {
            ...localstorageValue,
            profileUrl: profileImage
        };
        localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .USER_DETAILS */ .DX, JSON.stringify(updatedLocalstorage));
        if (response.type == _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .SIGNUP_ERROR */ .vK) {
            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(response.error.msg, {
                theme: "colored"
            });
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(response.data.msg, {
                theme: "colored"
            });
            actionAfterLogin();
        }
    // }
    };
    const hasNumber = (myString)=>{
        return /\d/.test(myString);
    };
    const goToSignUp = async ()=>{
        let errors = {
            ...errors
        };
        if (!fields.name) {
            errors["name"] = "Please Enter Name";
            setErrors(errors);
            return false;
        } else if (fields.name && hasNumber(fields.name)) {
            errors["name"] = "Please Enter Correct Name Format";
            setErrors(errors);
            return false;
        } else if (!fields.dob) {
            errors["dob"] = "Please Enter Date of Birth";
            setErrors(errors);
            return false;
        } else if (!fields.phone_number) {
            errors["phone_number"] = "Please Enter Phone number";
            setErrors(errors);
            return false;
        } else if (!fields.email) {
            errors["email"] = "Please Enter Email Id";
            setErrors(errors);
            return false;
        } else if (fields.email && !_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .EMAIL_REGULAR_EXPRESSION.test */ .tp.test(fields.email)) {
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
                type: _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_TYPE_EMAIL */ .tI,
                gg_token: "",
                fb_token: "",
                access_type: _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_STUDENT_TAB */ .mb
            };
            const response = await (0,_Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .signupAuth */ .q9)(payload)(dispatch);
            if (response.type == _Context_Actions_Auth_AuthAction__WEBPACK_IMPORTED_MODULE_11__/* .SIGNUP_ERROR */ .vK) {
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.error(response.error.msg, {
                    theme: "colored"
                });
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast.success(response.data.msg, {
                    theme: "colored"
                });
                actionAfterLogin();
            }
        }
    };
    const actionAfterLogin = ()=>{
        const order_id = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .ORDER_DETAIL */ .RC);
        const askAQuestion = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .ASK_A_QUESTION */ ._S);
        if (order_id) {
            router.replace(`${_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* .PAYMENT_PATH */ .UK}?id=${order_id}`);
            localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .ORDER_DETAIL */ .RC);
        } else if (askAQuestion) {
            router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* .FAQS_PATH */ .lC);
            localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .ASK_A_QUESTION */ ._S);
        } else {
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* .HOME_PAGE */ .s6);
        }
    };
    const DateInput = ({ value , onClick  })=>{
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().dateInput),
            style: {
                color: !value && "gray"
            },
            onClick: onClick,
            children: value ? value : "DOB"
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Sign Up"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Sign up page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().base),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().header),
                        children: "START YOUR JOURNEY TODAY"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().loginImage),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        src: `https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fstudent_signup2.png?alt=media&token=c1c9b0d6-eb0e-4b6d-a016-206c55ac23bc`,
                                        alt: "sign up page",
                                        width: "1138px",
                                        height: "897px"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().loginSection),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().heading),
                                        children: "Welcome!"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().inputs),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                type: "text",
                                                placeholder: "Name",
                                                inputStyling: {
                                                    height: "50px",
                                                    borderRadius: "43px",
                                                    fontSize: "16px",
                                                    border: "1px solid grey",
                                                    padding: "0 20px 0 30px",
                                                    width: "100%"
                                                },
                                                handleChange: (e)=>handleChange("name", e)
                                            }),
                                            errors1["name"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().errorMsg),
                                                children: errors1["name"]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().inputs),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                selected: fields.dob,
                                                onChange: (date)=>handleChange("dob", date)
                                                ,
                                                customInput: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DateInput, {
                                                }),
                                                dateFormat: "MMMM d, yyyy",
                                                maxDate: moment__WEBPACK_IMPORTED_MODULE_17___default()().subtract(14, "years")._d,
                                                peekNextMonth: true,
                                                showMonthDropdown: true,
                                                showYearDropdown: true,
                                                dropdownMode: "select"
                                            }),
                                            errors1["dob"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().errorMsg),
                                                children: errors1["dob"]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().inputs),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                type: "number",
                                                placeholder: "Phone number",
                                                inputStyling: {
                                                    height: "50px",
                                                    borderRadius: "43px",
                                                    border: "1px solid grey",
                                                    fontSize: "16px",
                                                    padding: "0 20px 0 30px",
                                                    width: "100%"
                                                },
                                                handleChange: (e)=>handleChange("phone_number", e)
                                            }),
                                            errors1["phone_number"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().errorMsg),
                                                children: errors1["phone_number"]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().inputs),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                type: "text",
                                                placeholder: "Email",
                                                inputStyling: {
                                                    height: "50px",
                                                    borderRadius: "43px",
                                                    border: "1px solid grey",
                                                    fontSize: "16px",
                                                    padding: "0 20px 0 30px",
                                                    width: "100%"
                                                },
                                                handleChange: (e)=>handleChange("email", e)
                                            }),
                                            errors1["email"] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().errorMsg),
                                                children: errors1["email"]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().inputs),
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
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().errorMsg),
                                                children: errors1["password"]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        label: "Create Account",
                                        height: 55,
                                        borderRadius: 43,
                                        backgroundColor: "#25908d",
                                        textStyle: {
                                            color: "#fff",
                                            fontWeight: "bold",
                                            fontFamily: "Open Sans",
                                            fontSize: "16px"
                                        },
                                        loading: authState === null || authState === void 0 ? void 0 : authState.signupLoading,
                                        border: "none",
                                        onClick: ()=>goToSignUp()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
                                        horizontal: true,
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().dividerStyle),
                                        children: "or signup with"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().socialLoginBtn),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().socialBtn),
                                                onClick: ()=>socialLogin(_utils_firebaseMethods__WEBPACK_IMPORTED_MODULE_12__/* .googleProvider */ .V, _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_TYPE_GOOGLE */ .z)
                                                ,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fgoogle_loginbtn.png?alt=media&token=6d6162cd-0e6f-413d-b53a-10203f0be385",
                                                    alt: "google login btn",
                                                    height: "55px",
                                                    width: "180px"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FacebookLogin_FacebookLogin__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                height: "55px",
                                                width: "180px",
                                                responseFacebook: (response)=>socialLogin(false, _utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .LOGIN_TYPE_FB */ .$u, response)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().bottomTexts),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().text1),
                                                children: "Already have an account? "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().text2),
                                                onClick: ()=>router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_18__/* .LOGIN_PATH */ .wm)
                                                ,
                                                children: "Login Here"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().tandC),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().tandC1),
                                children: [
                                    "By signing in to Tremendo, I accept the",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_styles_Signup_module_css__WEBPACK_IMPORTED_MODULE_19___default().tandC2),
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

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ 6804:
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-login/dist/facebook-login-render-props");

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
var __webpack_exports__ = __webpack_require__.X(0, [563,580,510,683,198], () => (__webpack_exec__(8111)));
module.exports = __webpack_exports__;

})();
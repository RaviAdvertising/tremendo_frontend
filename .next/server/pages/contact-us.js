(() => {
var exports = {};
exports.id = 455;
exports.ids = [455,888];
exports.modules = {

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

/***/ 4708:
/***/ ((module) => {

// Exports
module.exports = {
	"sections": "ContactUs_sections__mY01G",
	"wrapper": "ContactUs_wrapper__3uUjG",
	"formWrapper": "ContactUs_formWrapper__3EhX9",
	"mapWrapper": "ContactUs_mapWrapper__ZVm3n",
	"heading": "ContactUs_heading__2uGBW",
	"inputStyling": "ContactUs_inputStyling__1bA0a",
	"inputsWrapper": "ContactUs_inputsWrapper__1rlDR",
	"selectStyling": "ContactUs_selectStyling__8pnAE",
	"submitBtn": "ContactUs_submitBtn__1GpY2",
	"infoBox": "ContactUs_infoBox__lZjaf",
	"infoSec": "ContactUs_infoSec__1HD2x",
	"textInfo": "ContactUs_textInfo__1ZQcF",
	"phoneIcon": "ContactUs_phoneIcon__WyBLK"
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

/***/ 8983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3664);
/* harmony import */ var _components_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5325);
/* harmony import */ var _styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4708);
/* harmony import */ var _styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7534);
/* harmony import */ var _components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6873);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1554);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6076);
/* harmony import */ var _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2132);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1412);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8510);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_10__, _app__WEBPACK_IMPORTED_MODULE_13__, _Context_Provider__WEBPACK_IMPORTED_MODULE_8__]);
([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_10__, _app__WEBPACK_IMPORTED_MODULE_13__, _Context_Provider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);















function ContactUs() {
    const whyLearnData = [
        "Improve your career prospects",
        "Meet new and interesting people",
        ,
        "Building your confidence and personality",
        "Building your communication skills",
        "Making international travel easier",
        "Enhance your opportunity in government, business, medicine, law, etc. ",
        "Improve your skills and grades in math, English in your SAT and GRE exams"
    ];
    const { homeState , homeDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_8__/* .GlobalContext */ .k);
    const { isMobileView  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_app__WEBPACK_IMPORTED_MODULE_13__.DeviceContext);
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    });
    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    });
    const handleChange = (type, value)=>{
        if (type == "phone_num" && value.length > 14) {
            setFields({
                ...fields,
                [type]: value
            });
            setErrors({
                phone_num: true
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
    const onSubmit = async ()=>{
        let errors = {
            ...errors
        };
        if (!fields.user_name) {
            errors["user_name"] = true;
            setErrors(errors);
            return false;
        } else if (!fields.email_address) {
            errors["email_address"] = true;
            setErrors(errors);
            return false;
        } else if (!fields.phone_num) {
            errors["phone_num"] = true;
            setErrors(errors);
            return false;
        } else if (fields.phone_num && fields.phone_num.length > 14) {
            errors["phone_num"] = true;
            setErrors(errors);
            return false;
        } else if (!fields.language) {
            errors["language"] = true;
            setErrors(errors);
            return false;
        } else if (fields.email_address && !_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .EMAIL_REGULAR_EXPRESSION.test */ .tp.test(fields.email_address)) {
            errors["email_address"] = true;
            setErrors(errors);
            return false;
        } else if (!fields.purpose) {
            errors["purpose"] = true;
            setErrors(errors);
            return false;
        } else if (!fields.message) {
            errors["message"] = true;
            setErrors(errors);
            return false;
        } else {
            const response = await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_10__/* .contactUs */ .hz)(fields)(dispatch);
            react_toastify__WEBPACK_IMPORTED_MODULE_11__.toast.success(response.data.msg, {
                theme: "colored"
            });
            setFields({
            });
            setErrors({
            });
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Tremendo-Contact-Us"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Contact-Us page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().banner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FcontactUsBanner.png?alt=media&token=e02bacbf-a09d-4f63-b757-91e4a32ddf0d",
                            paddingBottom: "21%",
                            alt: "banner logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785",
                            paddingBottom: "65%",
                            alt: "banner logo"
                        })
                    })
                ]
            }),
            homeState.contactUsLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().sections),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().formWrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().heading),
                                        children: "GET IN TOUCH WITH US"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputsWrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Your Name*",
                                            type: "text",
                                            className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputStyling),
                                            style: {
                                                border: errors1["user_name"] ? "2px solid red" : "2px solid rgb(221, 223, 225)"
                                            },
                                            value: fields.user_name,
                                            onChange: (e)=>handleChange("user_name", e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputsWrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Email Address*",
                                            type: "text",
                                            className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputStyling),
                                            style: {
                                                border: errors1["email_address"] ? "2px solid red" : "2px solid rgb(221, 223, 225)"
                                            },
                                            value: fields.email_address,
                                            onChange: (e)=>handleChange("email_address", e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputsWrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Phone Number*",
                                            type: "number",
                                            className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputStyling),
                                            style: {
                                                border: errors1["phone_num"] ? "2px solid red" : "2px solid rgb(221, 223, 225)"
                                            },
                                            value: fields.phone_num,
                                            onChange: (e)=>handleChange("phone_num", e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputsWrapper),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            name: "Language",
                                            id: "Language",
                                            className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().selectStyling),
                                            style: {
                                                border: errors1["language"] ? "2px solid red" : "2px solid rgb(221, 223, 225)"
                                            },
                                            value: fields.language,
                                            onChange: (e)=>handleChange("language", e.target.value)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: 0,
                                                    children: "Language "
                                                }),
                                                homeState.getLanguage.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: i.title,
                                                        children: i.title
                                                    }, index)
                                                )
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputsWrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                            name: "reason",
                                            id: "reason",
                                            className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().selectStyling),
                                            style: {
                                                border: errors1["purpose"] ? "2px solid red" : "2px solid rgb(221, 223, 225)"
                                            },
                                            value: fields.purpose,
                                            onChange: (e)=>handleChange("purpose", e.target.value)
                                            ,
                                            children: whyLearnData.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: i,
                                                    children: i
                                                }, index)
                                            )
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputsWrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            placeholder: "Message",
                                            className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().inputStyling),
                                            style: {
                                                border: errors1["message"] ? "2px solid red" : "2px solid rgb(221, 223, 225)"
                                            },
                                            rows: "7",
                                            cols: "50",
                                            value: fields.message,
                                            onChange: (e)=>handleChange("message", e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().submitBtn),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            label: "Submit",
                                            height: 50,
                                            borderRadius: 27,
                                            backgroundColor: "#f78f1f",
                                            textStyle: {
                                                color: "#fff",
                                                fontWeight: "bold",
                                                fontFamily: " Open Sans",
                                                fontSize: "20px"
                                            },
                                            border: "none",
                                            onClick: ()=>onSubmit()
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().mapWrapper),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9313083713682!2d77.06765591555062!3d28.63182078241813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05eceb01c121%3A0x19748ca208251438!2sAdvertising%20Salt!5e0!3m2!1sen!2sin!4v1641389764508!5m2!1sen!2sin",
                                            width: isMobileView ? "300" : "600",
                                            height: "450",
                                            style: {
                                                border: "none"
                                            },
                                            allowFullScreen: "",
                                            loading: "lazy"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().infoBox),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().infoSec),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Flocation.png?alt=media&token=3a220c3d-2f47-49a8-852e-abbe53a6dfae",
                                                            alt: "location",
                                                            width: "32px",
                                                            height: "37px"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().textInfo),
                                                        children: "Tremendo, Address-Bihar,India, 805131"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().infoSec),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().phoneIcon),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fphone.png?alt=media&token=e61b4f20-1c09-4366-bde7-94fc764f8bab",
                                                            alt: "location",
                                                            width: "30px",
                                                            height: "37px"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().textInfo),
                                                        children: "+91 78568 92827"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().infoSec),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fmail.png?alt=media&token=ce6a995a-1ec2-4ea7-8f21-80f706fb75af",
                                                            alt: "location",
                                                            width: "37px",
                                                            height: "37px"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_ContactUs_module_css__WEBPACK_IMPORTED_MODULE_14___default().textInfo),
                                                        children: "info@tremendo.in"
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
var __webpack_exports__ = __webpack_require__.X(0, [563,649,510,325], () => (__webpack_exec__(8983)));
module.exports = __webpack_exports__;

})();
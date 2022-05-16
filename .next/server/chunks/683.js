exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 6106:
/***/ ((module) => {

// Exports
module.exports = {
	"inputStyling": "Input_inputStyling__3i3TK"
};


/***/ }),

/***/ 6676:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "Login_base__2J-pf",
	"loginBox": "Login_loginBox__MG9Iq",
	"tabWrapper": "Login_tabWrapper__2h_oY",
	"tab": "Login_tab__1Z9hF",
	"imageAndLoginWrapper": "Login_imageAndLoginWrapper__3PWrS",
	"loginSection": "Login_loginSection__3v--w",
	"heading": "Login_heading__3D8x_",
	"inputs": "Login_inputs__1JkET",
	"remeberMeAndForgotPwd": "Login_remeberMeAndForgotPwd__3IWwg",
	"forgotPwd": "Login_forgotPwd__35dbx",
	"loginBtn": "Login_loginBtn__PJnaI",
	"dividerStyle": "Login_dividerStyle__1yiIZ",
	"socialLoginBtn": "Login_socialLoginBtn__1reFZ",
	"socialBtn": "Login_socialBtn__1iHlt",
	"bottomTexts": "Login_bottomTexts__2Fmqw",
	"text1": "Login_text1__v2wkT",
	"text2": "Login_text2__JkdZJ",
	"loginImage": "Login_loginImage__2lvEk",
	"termAndCondition": "Login_termAndCondition__1w-U_",
	"errorMsg": "Login_errorMsg__3sIqo"
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


/***/ })

};
;
"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 3332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FacebookLoginComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6804);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6676);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);





function FacebookLoginComponent(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_2___default()), {
        appId: "884656299090135",
        callback: (response)=>props.responseFacebook(response)
        ,
        fields: "name,email,picture",
        render: (renderProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default().socialBtn),
                onClick: ()=>renderProps.onClick()
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ffacebook_loginbtn.png?alt=media&token=f1710620-8316-4a3c-890c-da9fc1c81be1",
                    alt: "facebook login btn",
                    height: props.height,
                    width: props.width
                })
            })
    }));
};


/***/ }),

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ googleProvider)
/* harmony export */ });
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6345);

// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new _firebase_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].auth.GoogleAuthProvider */ .Z.auth.GoogleAuthProvider();


/***/ })

};
;
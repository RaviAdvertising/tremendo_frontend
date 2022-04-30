(() => {
var exports = {};
exports.id = 55;
exports.ids = [55,888];
exports.modules = {

/***/ 4551:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "BlogBox_base__63tRU",
	"heading": "BlogBox_heading___N_L3",
	"description": "BlogBox_description__1k5ba",
	"btnImageWrapper": "BlogBox_btnImageWrapper__3Yguk",
	"btnText": "BlogBox_btnText__252oD"
};


/***/ }),

/***/ 8402:
/***/ ((module) => {

// Exports
module.exports = {
	"sections": "Blogs_sections__2NmWk",
	"headerWrapper": "Blogs_headerWrapper__201-I",
	"headerHeading": "Blogs_headerHeading__1WrnU",
	"borderLineStyling": "Blogs_borderLineStyling__1__dc",
	"header": "Blogs_header__1J2Wm",
	"blogWrapper": "Blogs_blogWrapper__iOu2B",
	"blogs": "Blogs_blogs__3Jrvg",
	"contentWrapper": "Blogs_contentWrapper__1OuWc"
};


/***/ }),

/***/ 3701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4551);
/* harmony import */ var _BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);



function BlogBox({ data  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().base),
        style: {
            backgroundColor: data.bg_color
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),
                style: {
                    color: data.title_color
                },
                children: data.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
                style: {
                    color: data.desc_color
                },
                children: data.short_desc
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnImageWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_BlogBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnText),
                        style: {
                            color: data.cta_title_color,
                            backgroundColor: data.cta_bg
                        },
                        children: [
                            data.cta_title,
                            " ",
                            ">",
                            ">"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            alt: "blogs",
                            src: data.image_url,
                            height: "80px",
                            width: "100px"
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blogs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BlogBox_BlogBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3701);
/* harmony import */ var _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7534);
/* harmony import */ var _components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6873);
/* harmony import */ var _components_Image_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5325);
/* harmony import */ var _components_Skelton_LanguageDetailSkelton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2569);
/* harmony import */ var _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2132);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1554);
/* harmony import */ var _styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8402);
/* harmony import */ var _styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_8__, _Context_Provider__WEBPACK_IMPORTED_MODULE_9__]);
([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_8__, _Context_Provider__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











function Blogs() {
    const { homeState , homeDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_9__/* .GlobalContext */ .k);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_8__/* .getBlogs */ ._Z)()(dispatch);
    }, []);
    const header = (headerName)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().borderLineStyling)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().headerHeading),
                    children: headerName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().borderLineStyling)
                })
            ]
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Tremendo-Blogs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Blogs page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().banner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FBlogsBanner.png?alt=media&token=b7c1e412-c53d-4eb7-86ce-e65a4a03586a",
                            paddingBottom: "21%",
                            alt: "banner logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785",
                            paddingBottom: "65%",
                            alt: "banner logo"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().sections),
                children: [
                    homeState.getBlogsLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skelton_LanguageDetailSkelton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().contentWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),
                                children: header("OUR BLOG")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().blogWrapper),
                                children: homeState.getBlogs.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Blogs_module_css__WEBPACK_IMPORTED_MODULE_10___default().blogs),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogBox_BlogBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            data: i
                                        })
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
var __webpack_exports__ = __webpack_require__.X(0, [563,580,510,325,569], () => (__webpack_exec__(8773)));
module.exports = __webpack_exports__;

})();
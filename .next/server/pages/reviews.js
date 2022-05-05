(() => {
var exports = {};
exports.id = 929;
exports.ids = [929,888];
exports.modules = {

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

/***/ 1828:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "ReviewBox_base__eqaZ9",
	"profileImgAndDateWrapper": "ReviewBox_profileImgAndDateWrapper__35UbO",
	"profileImg": "ReviewBox_profileImg__2BWM5",
	"nameAndData": "ReviewBox_nameAndData__3O5ay",
	"name": "ReviewBox_name__2BhPN",
	"ownName": "ReviewBox_ownName__1fVgC",
	"date": "ReviewBox_date__3ScaS",
	"owndescription": "ReviewBox_owndescription__2P0X3",
	"ratingAndNameWrapper": "ReviewBox_ratingAndNameWrapper__DxSub",
	"reviewDescription": "ReviewBox_reviewDescription__4mHKa",
	"readMoreAndThumbWrapper": "ReviewBox_readMoreAndThumbWrapper__2CkWF",
	"thumb": "ReviewBox_thumb__1RC8Q",
	"readMore": "ReviewBox_readMore__VKTCU",
	"thumbAndButtonWrapper": "ReviewBox_thumbAndButtonWrapper__SjBje",
	"replyBox": "ReviewBox_replyBox__12B09",
	"ownImageAndNameWrapper": "ReviewBox_ownImageAndNameWrapper__1X1tt",
	"border": "ReviewBox_border__1FoX_",
	"inputPostWrapper": "ReviewBox_inputPostWrapper__pccKC",
	"input": "ReviewBox_input__2AG5W",
	"postCta": "ReviewBox_postCta__1OzAj"
};


/***/ }),

/***/ 8991:
/***/ ((module) => {

// Exports
module.exports = {
	"writeReviewForm": "WriteFormBox_writeReviewForm__16kDc",
	"profileImgAndDateWrapper": "WriteFormBox_profileImgAndDateWrapper__3Pmo6",
	"nameAndData": "WriteFormBox_nameAndData__1agxQ",
	"name": "WriteFormBox_name__2mZh2",
	"date": "WriteFormBox_date__Tq3WL",
	"rateStar": "WriteFormBox_rateStar__2aBbS",
	"sectionWrapper": "WriteFormBox_sectionWrapper__3CGQZ",
	"border": "WriteFormBox_border__7qAFv",
	"ctaButtons": "WriteFormBox_ctaButtons__399sX",
	"cancelCta": "WriteFormBox_cancelCta__3XBgn",
	"postCta": "WriteFormBox_postCta__1S_N5",
	"inputBox": "WriteFormBox_inputBox__tXMRo"
};


/***/ }),

/***/ 8049:
/***/ ((module) => {

// Exports
module.exports = {
	"sections": "Review_sections__2UYSq",
	"headerWrapper": "Review_headerWrapper__3zWsi",
	"headerHeading": "Review_headerHeading__1R7BA",
	"borderLineStyling": "Review_borderLineStyling__12hOG",
	"header": "Review_header__U2Eml",
	"faqStripWrapper": "Review_faqStripWrapper__mIRUV",
	"blogs": "Review_blogs__3btZd",
	"contentWrapper": "Review_contentWrapper__3jfsR",
	"faqStrip": "Review_faqStrip__2OCT_",
	"askBtn": "Review_askBtn__RRvyt"
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

/***/ 1979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReviewBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1828);
/* harmony import */ var _ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3664);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);







function ReviewBox(props) {
    const imageUrl =  false ? 0 : "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41";
    const data = props.data;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().ratingAndNameWrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().profileImgAndDateWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().profileImg),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/user.png?alt=media&token=91b2da16-b278-4eb6-a1cc-90ecfe2c1b55",
                                    circular: true,
                                    alt: "user-image",
                                    height: "70px",
                                    width: "70px"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().nameAndData),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),
                                        children: data.user_name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),
                                        children: moment__WEBPACK_IMPORTED_MODULE_5___default()(data.created_at).format("DD MMM YYYY")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Rating, {
                            icon: "star",
                            defaultRating: data.rating,
                            maxRating: 5,
                            size: "huge",
                            disabled: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().reviewDescription),
                children: data.review_desc
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().readMoreAndThumbWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().readMore),
                        onClick: ()=>props.clickOnReadMore()
                        ,
                        children: "Read More \xbb"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().thumbAndButtonWrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>props.clickOnLike()
                            ,
                            className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().thumb),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                name: props.thumbLike ? "thumbs up" : "thumbs up outline",
                                size: "big",
                                color: props.thumbLike && "blue"
                            })
                        })
                    })
                ]
            }),
            props.comments && props.comments.course_review_id == props.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().ownImageAndNameWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().profileImg),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/user.png?alt=media&token=91b2da16-b278-4eb6-a1cc-90ecfe2c1b55",
                            circular: true,
                            alt: "user-image",
                            height: "30px",
                            width: "30px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().ownName),
                        children: props.comments.user_name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().owndescription),
                        children: props.comments.comment
                    })
                ]
            }),
            props.isOpen == props.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().replyBox),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().ownImageAndNameWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().profileImg),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    src: imageUrl,
                                    circular: true,
                                    alt: "user-image",
                                    height: "50px",
                                    width: "50px"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().ownName),
                                children: JSON.parse(localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .USER_DETAILS */ .DX)).name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().owndescription),
                                children: "Lorem ipsum dolor sit amet"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().border)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputPostWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    placeholder: "Comments...",
                                    handleChange: (text)=>props.addComments(text)
                                    ,
                                    inputStyling: {
                                        width: "100%",
                                        fontSize: "18px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ReviewBox_module_css__WEBPACK_IMPORTED_MODULE_6___default().postCta),
                                onClick: ()=>props.postComment()
                                ,
                                children: "Post"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 5546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WriteFormBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8991);
/* harmony import */ var _WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6076);
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9819);





function WriteFormBox(props) {
    const name =  false && 0;
    const profile_imageurl =  false ? 0 : "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fblank_profile.png?alt=media&token=53afec48-03b2-4843-9b9c-8dc9c252ea41";
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().writeReviewForm),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().profileImgAndDateWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().profileImg),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            src: profile_imageurl,
                            circular: true,
                            alt: "user-image",
                            height: "70px",
                            width: "70px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameAndData),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),
                            children: name
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().sectionWrapper),
                children: [
                    !props.faqPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().rateStar),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Rating, {
                            icon: "star",
                            defaultRating: 0,
                            maxRating: 5,
                            size: "massive",
                            onRate: (e, rate)=>props.onRating(rate)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().border)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input_Input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            placeholder: "Describe your experience",
                            handleChange: (text)=>props.onChangeValue(text)
                            ,
                            inputStyling: {
                                width: "80%",
                                height: "30px"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().ctaButtons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().cancelCta),
                        onClick: ()=>props.openBox()
                        ,
                        children: "CANCEL"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_WriteFormBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().postCta),
                        onClick: ()=>props.submitReview()
                        ,
                        children: "POST"
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 4421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3664);
/* harmony import */ var _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7534);
/* harmony import */ var _components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6873);
/* harmony import */ var _components_Image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5325);
/* harmony import */ var _components_ReviewBox_ReviewBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1979);
/* harmony import */ var _styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8049);
/* harmony import */ var _styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_WriteFormBox_WriteFormBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5546);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6076);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7727);
/* harmony import */ var _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2132);
/* harmony import */ var _Context_Provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1554);
/* harmony import */ var _components_Skelton_LanguageDetailSkelton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2569);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9915);
/* harmony import */ var _components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1412);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_4__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_3__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_14__, _Context_Provider__WEBPACK_IMPORTED_MODULE_12__]);
([_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_4__, _components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_3__, _Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_14__, _Context_Provider__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



















function Reviews() {
    const { 0: writeReview , 1: setWriteReview  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const { 0: fields , 1: setFields  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { homeState , homeDispatch: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(_Context_Provider__WEBPACK_IMPORTED_MODULE_12__/* .GlobalContext */ .k);
    const toggleBar = (id)=>{
        if (localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .USER_DETAILS */ .DX)) {
            if (isOpen == id) {
                setIsOpen(null);
            } else {
                setIsOpen(id);
            }
        } else {
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .PREVIOUS_PATH */ .iu, router.pathname);
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .LOGIN_PATH */ .wm);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .getReviewData */ .YG)()(dispatch);
    }, []);
    const header = (headerName)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().headerWrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().borderLineStyling)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().headerHeading),
                    children: headerName
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().borderLineStyling)
                })
            ]
        }));
    };
    const openWriteReviewBox = ()=>{
        if (localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .USER_DETAILS */ .DX)) {
            setWriteReview(true);
        } else {
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .PREVIOUS_PATH */ .iu, router.pathname);
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .LOGIN_PATH */ .wm);
        }
    };
    const onHandleChange = (type, text)=>{
        setFields({
            ...fields,
            [type]: text
        });
    };
    const clickOnThumb = async (id)=>{
        if (localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .USER_DETAILS */ .DX)) {
            const payload = {
                course_review_id: id,
                like_status: true,
                access_token: js_cookie__WEBPACK_IMPORTED_MODULE_14__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)
            };
            await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .setReviewLikeStatus */ .$N)(payload)(dispatch);
            (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .getReviewData */ .YG)()(dispatch);
        } else {
            localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .PREVIOUS_PATH */ .iu, router.pathname);
            router.push(_utils_routes__WEBPACK_IMPORTED_MODULE_17__/* .LOGIN_PATH */ .wm);
        }
    };
    const onSubmitReview = async ()=>{
        if (!fields.rating || !fields.review_desc) {
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error("Please fill all details", {
                theme: "colored"
            });
        } else {
            const payload = {
                rating: fields.rating ? fields.rating : 3,
                review_desc: fields.review_desc,
                access_token: js_cookie__WEBPACK_IMPORTED_MODULE_14__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)
            };
            const response = await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .setReviewData */ .D8)(payload)(dispatch);
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.success(response.data.msg, {
                theme: "colored"
            });
            setIsOpen(null);
            (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .getReviewData */ .YG)()(dispatch);
        }
    };
    const onSubmitComment = async (reviewId)=>{
        if (!fields.comment) {
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.error("Please fill all details", {
                theme: "colored"
            });
        } else {
            const payload = {
                course_review_id: reviewId,
                comment: fields.comment,
                access_token: js_cookie__WEBPACK_IMPORTED_MODULE_14__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .COOKIE_TOKEN */ .t5)
            };
            const response = await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .addReviewComments */ .oN)(payload)(dispatch);
            react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast.success(response.data.msg, {
                theme: "colored"
            });
            setWriteReview(false);
        }
    };
    const readMoreReplies = async (id)=>{
        await (0,_Context_Actions_Home_HomeAction__WEBPACK_IMPORTED_MODULE_11__/* .getReviewDetails */ .e$)(id)(dispatch);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().base),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Tremendo-Faqs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Tremendo Reviews page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            (homeState.setReviewLoading || homeState.reviewCommentLoading || homeState.reviewDetailsLoading || homeState.setReviewLikeLoading) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_PageLoader__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().banner),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_DesktopOnly__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2FReviewBanner.png?alt=media&token=271e5425-fe8f-42a3-99b3-70f783ab3b12",
                            paddingBottom: "21%",
                            alt: "banner logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DeviceCheck_MobileOnly__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fabout_banner_mobile.png?alt=media&token=be8f7644-800d-41fd-bb84-44e199f49785",
                            paddingBottom: "65%",
                            alt: "banner logo"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().sections),
                children: [
                    homeState.reviewDataLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skelton_LanguageDetailSkelton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().contentWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().header),
                                children: header("REVIEW AND RATING")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().faqStripWrapper),
                                children: [
                                    homeState.reviewData.map((i, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().faqStrip),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ReviewBox_ReviewBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                clickOnReply: ()=>toggleBar(i.course_review_id)
                                                ,
                                                isOpen: isOpen,
                                                id: i.course_review_id,
                                                clickOnLike: ()=>clickOnThumb(i.course_review_id)
                                                ,
                                                addComments: (text)=>onHandleChange("comment", text)
                                                ,
                                                postComment: ()=>onSubmitComment(i.course_review_id)
                                                ,
                                                clickOnReadMore: ()=>readMoreReplies(i.course_review_id)
                                                ,
                                                thumbLike: i.like_status,
                                                data: i,
                                                comments: homeState.reviewDetails.comment
                                            })
                                        }, index)
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Review_module_css__WEBPACK_IMPORTED_MODULE_18___default().askBtn),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            label: "Write your review",
                                            height: 55,
                                            borderRadius: 10,
                                            backgroundColor: "#f78f1f",
                                            textStyle: {
                                                color: "#fff",
                                                fontWeight: "bold",
                                                fontFamily: " Open Sans",
                                                fontSize: "16px"
                                            },
                                            border: "none",
                                            onClick: ()=>openWriteReviewBox()
                                        })
                                    }),
                                    writeReview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_WriteFormBox_WriteFormBox__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        openBox: ()=>setWriteReview(false)
                                        ,
                                        onChangeValue: (value)=>onHandleChange("review_desc", value)
                                        ,
                                        submitReview: ()=>onSubmitReview()
                                        ,
                                        onRating: (rate)=>setFields({
                                                ...fields,
                                                rating: rate.rating
                                            })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image_Image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
var __webpack_exports__ = __webpack_require__.X(0, [563,580,510,325,569], () => (__webpack_exec__(4421)));
module.exports = __webpack_exports__;

})();
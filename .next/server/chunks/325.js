exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 2616:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "Image_base__3AORW",
	"verticallyCenter": "Image_verticallyCenter__17YoO",
	"verticallyCenterBase": "Image_verticallyCenterBase__TXs2I Image_base__3AORW",
	"fullWidth": "Image_fullWidth__1ngeW",
	"imgContainer": "Image_imgContainer__1TvqF"
};


/***/ }),

/***/ 5325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2616);
/* harmony import */ var _Image_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Image_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VisibilityChild_VisibilityChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5673);





const LOADING = "loading";
const LOADED = "loaded";
const ERROR = "error";
const colors = [
    "#f4fff9",
    "#ffedf3",
    "#fff2df",
    "#e5f1ff",
    "#f0f7f1"
];
class Image extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    state = {
        status: LOADING,
        colorIndex: Math.floor(Math.random() * 5),
        showFallbackImage: false
    };
    componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src) {
            this.setState({
                status: LOADING
            });
        }
    }
    onLoad = ()=>{
        this.setState({
            status: LOADED
        });
    };
    onError = ()=>{
        if (this.props.fallbackUrl && !this.state.showFallbackImage) {
            this.setState({
                status: LOADING,
                showFallbackImage: true
            });
        } else {
            this.setState({
                status: ERROR
            });
        }
    };
    style = (loading)=>{
        return {
            transition: "opacity .5s linear",
            opacity: `${loading === LOADING ? 0 : 1}`
        };
    };
    render() {
        let { className , loadedClassName , loadingClassName , ...props } = this.props;
        className = `${className} ${this.state.status === LOADED ? loadedClassName : loadingClassName}`;
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VisibilityChild_VisibilityChild__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            minHeight: this.props.paddingBottom,
            backgroundColor: colors[this.state.colorIndex],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Image_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgContainer),
                style: {
                    paddingBottom: this.props.paddingBottom,
                    background: this.props.showBackgroundColor && this.state.status !== LOADED ? colors[this.state.colorIndex] : "none"
                },
                children: this.state.status === ERROR ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: this.props.src,
                    style: this.style(this.state.status),
                    onClick: this.props.onClick,
                    className: className,
                    onLoad: this.onLoad,
                    onError: this.onError,
                    alt: this.props.alt ? this.props.alt : "Images"
                })
            })
        }));
    }
};
Image.propTypes = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    verticallyCenter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    paddingBottom: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    showBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
Image.defaultProps = {
    height: "auto",
    verticallyCenter: false,
    style: {
    },
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded",
    paddingBottom: "100%",
    showBackgroundColor: true
};


/***/ }),

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VisibilityChild)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5650);
/* harmony import */ var _researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);



class VisibilityChild extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
    }
    handleIntersection = (event)=>{
        this.setState({
            visible: event.isIntersecting
        });
    };
    render() {
        const options = {
            onChange: this.handleIntersection,
            rootMargin: "0% 0% -5%"
        };
        return !this.state.visible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default()), {
            ...options,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    paddingBottom: this.props.minHeight,
                    backgroundColor: this.props.backgroundColor
                }
            })
        }) : this.props.children;
    }
};


/***/ })

};
;
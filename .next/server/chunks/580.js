exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 1488:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "Button_base__3KtlE",
	"pulse": "Button_pulse__2a6VU",
	"hovered": "Button_hovered__RsaI2 Button_base__3KtlE",
	"disabled": "Button_disabled__2ycHi Button_base__3KtlE",
	"loading": "Button_loading__2qsB0 Button_base__3KtlE",
	"iconWrapper": "Button_iconWrapper__TvLT-",
	"iconHolder": "Button_iconHolder__2KVi0",
	"icon": "Button_icon__3VMwN Button_iconHolder__2KVi0",
	"iconHovered": "Button_iconHovered__2yMtg Button_iconHolder__2KVi0"
};


/***/ }),

/***/ 3664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1488);
/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);




class Button extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: this.props.backgroundColor,
            hovered: false
        };
        this.styles = props.styles ? props.styles : (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default());
    }
    hoverIn() {
        if (this.props.hoverBackgroundColor || this.props.hoverBorderColor) {
            this.setState({
                backgroundColor: this.props.hoverBackgroundColor ? this.props.hoverBackgroundColor : this.props.backgroundColor,
                borderColor: this.props.hoverBorderColor,
                hovered: true
            });
        }
    }
    hoverOut() {
        this.setState({
            backgroundColor: this.props.backgroundColor,
            borderColor: this.props.borderColor,
            hovered: false
        });
    }
    handleClick(e1) {
        if (this.props.onClick) {
            this.props.onClick(e1);
        }
    }
    render() {
        let className = this.styles.base;
        if (this.props.disabled) {
            className = this.styles.disabled;
        }
        if (this.props.loading) {
            className = this.styles.loading;
        }
        let iconClass = (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon);
        let secondaryIconClass = (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconHovered);
        if (this.state.hovered) {
            if (this.props.icon.hoveredElement) {
                iconClass = this.styles.iconHovered;
            }
            secondaryIconClass = (_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon);
        }
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: className,
            style: {
                height: this.props.height,
                width: this.props.width,
                borderRadius: this.props.borderRadius,
                backgroundColor: this.props.backgroundColor,
                border: this.props.border,
                boxSizing: this.props.boxSizing
            },
            onMouseEnter: ()=>this.hoverIn()
            ,
            onMouseLeave: ()=>this.hoverOut()
            ,
            onClick: (e)=>this.handleClick(e)
            ,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        ...this.props.textStyle
                    },
                    children: this.props.label
                }),
                this.props.icon && this.props.icon.element && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: this.styles.iconWrapper,
                    style: {
                        height: this.props.icon.size,
                        width: this.props.icon.size,
                        marginRight: this.props.icon.offset
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: iconClass,
                            children: this.props.icon.element
                        }),
                        this.props.icon.hoveredElement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: secondaryIconClass,
                            children: this.props.icon.hoveredElement
                        })
                    ]
                })
            ]
        }));
    }
};
Button.propTypes = {
    height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    width: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    hoverBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    loading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    border: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    borderRadius: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    boxSizing: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        fontSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        fontFamily: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    }),
    icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        element: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
        hoveredElement: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
        size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
    })
};
Button.defaultProps = {
    height: 40,
    backgroundColor: "#268f8c",
    border: "1px solid #000",
    disabled: false,
    loading: false,
    iconHeight: 40,
    iconWidth: 40,
    textStyle: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Proxima Nova"
    },
    icon: {
        size: 30,
        offset: 10
    }
};


/***/ }),

/***/ 9016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://tremendo.in:5555/api",
    headers: {
        "Content-Type": "application/json"
    }
});
axiosInstance.interceptors.request.use((request)=>{
    return request;
}, (error)=>{
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ trustFactor),
/* harmony export */   "Lc": () => (/* binding */ whyTremendo1),
/* harmony export */   "DF": () => (/* binding */ whyTremendo2),
/* harmony export */   "AU": () => (/* binding */ promotionsContent),
/* harmony export */   "Rd": () => (/* binding */ DASHBOARD_PAGE_TYPE),
/* harmony export */   "mb": () => (/* binding */ LOGIN_STUDENT_TAB),
/* harmony export */   "fr": () => (/* binding */ LOGIN_MENTOR_TAB),
/* harmony export */   "xY": () => (/* binding */ ADMIN_ACCESS_TYPE),
/* harmony export */   "tp": () => (/* binding */ EMAIL_REGULAR_EXPRESSION),
/* harmony export */   "t5": () => (/* binding */ COOKIE_TOKEN),
/* harmony export */   "tI": () => (/* binding */ LOGIN_TYPE_EMAIL),
/* harmony export */   "$u": () => (/* binding */ LOGIN_TYPE_FB),
/* harmony export */   "z": () => (/* binding */ LOGIN_TYPE_GOOGLE),
/* harmony export */   "DX": () => (/* binding */ USER_DETAILS),
/* harmony export */   "iu": () => (/* binding */ PREVIOUS_PATH),
/* harmony export */   "RC": () => (/* binding */ ORDER_DETAIL),
/* harmony export */   "_S": () => (/* binding */ ASK_A_QUESTION)
/* harmony export */ });
const trustFactor = [
    {
        heading: "Work & Experience ",
        subheading: "Command over a foreign language can set you ahead in your career. It can land you better job opportunities and help you in achieving your educational goals.    ",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fwork_experience.png?alt=media&token=e906f9f6-7721-4759-ab01-63929f232fbd",
        backgroundColor: "#f78f1e"
    },
    {
        heading: "Learn new culture",
        subheading: "Learning a foreign language is an investment as it helps you to understand other cultures and ideologies. Knowing a new language opens up a new world for you.",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Flearning.png?alt=media&token=6fc541a5-13cb-4fab-bd26-cd3e9b158db5",
        backgroundColor: "#39cdc9"
    },
    {
        heading: "Travel",
        subheading: "Learning a foreign language will help you navigate new places and make travel so much easier. It helps you to understand signs and ask for directions. ",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fplane.png?alt=media&token=f35bfbab-e52b-4e77-b5c5-c32ec385e672",
        backgroundColor: "#f78f1e"
    }
];
const whyTremendo1 = [
    {
        heading: "Affordable price",
        subheading: "Tremendo aims to provide the best quality teaching at the minimum and pocket-friendly costs. As all the study material is provided digitally, you do not have to buy any books.",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fself-growth.png?alt=media&token=c90bf2a3-9475-4146-8ea9-15fb6d630f7c"
    },
    {
        heading: "Quick growth",
        subheading: "Having command over foreign languages can provide better career opportunities and set you on the fastest route to success.",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fonline-class.png?alt=media&token=991507ab-d9dd-4164-9d1a-3e9fde957bf6"
    }
];
const whyTremendo2 = [
    {
        heading: "Experienced mentors",
        subheading: "Tremendo appoints highly skilled mentors that provide both professional and personal support.",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fconsulting.png?alt=media&token=56a77273-5ba8-483f-baa0-75b13670e4aa"
    },
    {
        heading: "Real-Time feedback",
        subheading: "We provide real-time feedback to ensure all students are on the right track throughout their learning journey. ",
        image: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ffeedback.png?alt=media&token=99c4e409-7f8f-486e-a66a-5d80a9dbefa5"
    }
];
const promotionsContent = [
    {
        heading: "Who we are?",
        description: "We are a team of highly skilled people fluent in different languages and with great teaching experience. We help people take over the professional world with an extra language skill that results in extremely beneficial career opportunities. With Tremendo you can learn new languages from anywhere in the world, under the guidance of the best mentors.With an increase in Multinational companies in India, companies look forward to hiring people who know more than one language. So, with us you develop a skill which creates the best jobs for you and keep your resume on demand in the market."
    },
    {
        heading: "What we do?",
        description: "We offer different language courses starting from the Beginner level so that one could learn from scratch for better understanding. We provide Digital Learning, Quick Growth, Experienced Mentors, Real-Time Feedback, making it easier for our students to get comfortable and improve their understanding.We provide virtual classes that are easier to attend from anywhere, following the batch time provided. The live classes ensure seriousness and help students to ask their queries and get instant solutions from the experts. We also provide digital study material making it convenient for you to study in your free time and grow enthusiastically in the competitive world. When you enroll in a class with us, you are also contributing towards saving the environment. As our program is completely digital, no paper is utilized, and you save on natural energy on the commute."
    },
    {
        heading: "Our mission",
        description: "Everyone has got their reasons to learn languages. Some acquire knowledge because of their interest, and others want to master them to get better in the professional world.We at Tremendo come up with various ways to make learning new languages easy and fun so that you can follow your ambition and develop a new skill. Learning a language could also be beneficial for you to explore new cultures and traditions across the world. It also helps you re-imagine something which you were not able to understand in the first place. Knowing a second language not only enhances your profile professionally, but also  introduces you to a variety of beliefs and traditions."
    }
];
const DASHBOARD_PAGE_TYPE = "dashboard";
const LOGIN_STUDENT_TAB = "std";
const LOGIN_MENTOR_TAB = "mnt";
const ADMIN_ACCESS_TYPE = "adm";
const EMAIL_REGULAR_EXPRESSION = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}/;
const COOKIE_TOKEN = "tremendo_token";
const LOGIN_TYPE_EMAIL = "email";
const LOGIN_TYPE_FB = "facebook";
const LOGIN_TYPE_GOOGLE = "google";
const USER_DETAILS = "user_details";
const PREVIOUS_PATH = "previous_path";
const ORDER_DETAIL = "order_id";
const ASK_A_QUESTION = "askAQuestion";


/***/ }),

/***/ 7727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s6": () => (/* binding */ HOME_PAGE),
/* harmony export */   "WE": () => (/* binding */ SIGN_UP_PATH),
/* harmony export */   "wm": () => (/* binding */ LOGIN_PATH),
/* harmony export */   "qD": () => (/* binding */ ABOUTUS_PATH),
/* harmony export */   "k1": () => (/* binding */ LANGUAGE_DETAIL),
/* harmony export */   "qi": () => (/* binding */ BLOGS_PATH),
/* harmony export */   "O0": () => (/* binding */ REVIEW_PATH),
/* harmony export */   "lC": () => (/* binding */ FAQS_PATH),
/* harmony export */   "JW": () => (/* binding */ CONTACTUS_PATH),
/* harmony export */   "M4": () => (/* binding */ STUDENT_DASHBOARD_PATH),
/* harmony export */   "o7": () => (/* binding */ MENTOR_DASHBOARD_PATH),
/* harmony export */   "uu": () => (/* binding */ ADMIN_DASHBOARD_PATH),
/* harmony export */   "UK": () => (/* binding */ PAYMENT_PATH)
/* harmony export */ });
const HOME_PAGE = "/";
const SIGN_UP_PATH = "/signup";
const LOGIN_PATH = "/login";
const ABOUTUS_PATH = "/about-us";
const LANGUAGE_DETAIL = "/language/";
const BLOGS_PATH = "/blogs";
const REVIEW_PATH = "/reviews";
const FAQS_PATH = "/faqs";
const CONTACTUS_PATH = "/contact-us";
const STUDENT_DASHBOARD_PATH = "/dashboard/student";
const MENTOR_DASHBOARD_PATH = "/dashboard/mentor";
const ADMIN_DASHBOARD_PATH = "/dashboard/admin";
const PAYMENT_PATH = "/order";


/***/ })

};
;
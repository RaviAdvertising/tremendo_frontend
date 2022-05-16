(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 6908:
/***/ ((module) => {

// Exports
module.exports = {
	"base": "Order_base__1h6My",
	"heading": "Order_heading__1X9fy",
	"flagImage": "Order_flagImage__Pngqo",
	"imageDetailWrapper": "Order_imageDetailWrapper__3qgW6",
	"details": "Order_details__2Js-L",
	"description": "Order_description__uiRpA",
	"priceWrapper": "Order_priceWrapper__1zqzS",
	"orignalPriceHeading": "Order_orignalPriceHeading__3lK73",
	"price": "Order_price__CdsFs",
	"totalPriceWrapper": "Order_totalPriceWrapper__3X8zG",
	"continueBtn": "Order_continueBtn__1GLMs",
	"termAndCondition": "Order_termAndCondition__3n8XL"
};


/***/ }),

/***/ 2806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Order)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3664);
/* harmony import */ var _styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6908);
/* harmony import */ var _styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6076);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7727);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9016);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_8__, _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_8__, _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











function loadScript(src) {
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = src;
        script.onload = ()=>{
            resolve(true);
        };
        script.onerror = ()=>{
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
function Order({}) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: openModal , 1: setOpenModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: orderDetails , 1: setOrderDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getPaymentDetails();
    }, []);
    const getPaymentDetails = async ()=>{
        setLoading(true);
        const batchId = router.query.id;
        try {
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/getCoursePurchaseDetail?batch_id=${batchId}`);
            setOrderDetails(response.data.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    const setFinalPayment = async (transacation_id)=>{
        setLoading(true);
        const payload = {
            access_token: js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .COOKIE_TOKEN */ .t5),
            attampt_id: "",
            transacation_id: transacation_id,
            amount: orderDetails.batch_purchase_price,
            pay_amount: orderDetails.batch_purchase_price,
            lang: orderDetails.language_code,
            batch_id: orderDetails.batch_id
        };
        try {
            const response = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__/* ["default"].post */ .Z.post(`/makeCoursePayment`, payload);
            setLoading(false);
            setOpenModal(true);
        } catch (err) {
            setLoading(false);
        }
    };
    async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Razorpay SDK failed to load. Are you online?", {
                theme: "colored"
            });
            return;
        }
        const response1 = await _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_7__/* ["default"].post */ .Z.post(`/initRazorpay`, {
            access_token: js_cookie__WEBPACK_IMPORTED_MODULE_8__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .COOKIE_TOKEN */ .t5),
            amount: orderDetails.batch_purchase_price
        });
        const userDetails =  false && 0;
        const options = {
            key: "rzp_test_gyvo1RLOGSiqAB",
            currency: response1.data.currency,
            amount: response1.data.amount.toString(),
            order_id: response1.data.id,
            name: "Tremendo",
            description: `Purchase ${orderDetails.batch_language} language`,
            image: `https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Ftremendo_logo.png?alt=media&token=2180fdbc-cab2-4f3e-9721-cd61da3348ba`,
            handler: function(response) {
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                setFinalPayment(response.razorpay_payment_id);
            },
            prefill: {
                name: userDetails.name,
                email: userDetails.email
            }
        };
        try {
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (err) {
            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error("Razorpay SDK failed to load. Are you online?", {
                theme: "colored"
            });
        }
    }
    const onCloseModal = ()=>{
        setOpenModal(false);
        router.replace(_utils_routes__WEBPACK_IMPORTED_MODULE_9__/* .STUDENT_DASHBOARD_PATH */ .M4);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Dimmer, {
                active: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Loader, {
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().base),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().heading),
                        children: "Summary"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().imageDetailWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().flagImage),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    src: orderDetails.flag_url,
                                    alt: "flag",
                                    height: "58px"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().details),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().courseName),
                                        children: `${orderDetails.batch_language} Course - Batch-${orderDetails.batch_id}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().description),
                                        children: `You are purchasing for ${orderDetails.batch_language} language which is starting from ${orderDetails.batch_starting_date}. Are you want to purchase?`
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().priceWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().orignalPriceHeading),
                                children: "Orignal Price:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().price),
                                children: [
                                    " ",
                                    "₹ ",
                                    orderDetails.batch_purchase_price
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().totalPriceWrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().orignalPriceHeading),
                                children: "Total:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().price),
                                children: [
                                    " ",
                                    "₹ ",
                                    orderDetails.batch_purchase_price
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().continueBtn),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            label: "Continue Payment",
                            height: 50,
                            backgroundColor: "#25908d",
                            textStyle: {
                                color: "#fff",
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                fontWeight: "700"
                            },
                            border: "none",
                            onClick: ()=>displayRazorpay()
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().termAndCondition),
                children: [
                    "By completing your purchase you agree to these",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        onClick: ()=>console.log("go to tc")
                        ,
                        style: {
                            color: "#0656cf",
                            cursor: "pointer"
                        },
                        children: "Terms of Service."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                onClose: ()=>onCloseModal()
                ,
                open: openModal,
                closeIcon: true,
                className: (_styles_Order_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalStyles),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
                    image: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                        src: "https://firebasestorage.googleapis.com/v0/b/tremendodev.appspot.com/o/static_images%2Fsuccess_image.png?alt=media&token=a22dbbd8-88a7-46b1-b725-60f117beafc0",
                        wrapped: true,
                        alt: "success image"
                    })
                })
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
var __webpack_exports__ = __webpack_require__.X(0, [649], () => (__webpack_exec__(2806)));
module.exports = __webpack_exports__;

})();
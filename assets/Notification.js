import React from "react";

const Notification = ({ color = "#DA021E" }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.32 19.833h15.36c.806 0 1.37-.798 1.1-1.557l-1.003-2.82a8.954 8.954 0 0 1-.518-3v-1.697a7.26 7.26 0 1 0-14.518 0v1.696a8.955 8.955 0 0 1-.518 3l-1.003 2.82c-.27.76.293 1.558 1.1 1.558z"
        stroke="#0A2227"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.667 19.833a4.667 4.667 0 1 1-9.334 0"
        stroke="#0A2227"
        strokeWidth="1.75"
      />
      <circle cx="20" cy="6" r="4" fill={color} />
    </svg>
  );
};

export default Notification;

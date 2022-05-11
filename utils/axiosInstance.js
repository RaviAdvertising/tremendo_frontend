import axios from "axios";
import { COOKIE_TOKEN, USER_DETAILS } from "./constants";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // if (error.response.status === 300) {
    //   localStorage.removeItem(USER_DETAILS);
    //   Cookies.remove(COOKIE_TOKEN);
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;

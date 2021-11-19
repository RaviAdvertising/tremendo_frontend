import axios from "axios";
import { useContext } from "react";
import { DeviceContext } from "../pages/_app";

const axiosInstance = axios.create({
  baseURL: process.env.baseUrl,
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
    return Promise.reject(error);
  }
);

export default axiosInstance;

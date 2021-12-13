import axios from "axios";
import { AuthClient } from "./micargo-api";

export const API_URL = process.env.REACT_APP_BACKEND_URL;

const authHeader = () => {
  const user = window.localStorage.getItem("accessToken");

  if (user) {
    return { Authorization: `Bearer` + user };
  } else {
    return {};
  }
};

const getRefreshToken = () => {
  return window.localStorage.getItem("refreshToken");
};

console.log("baseURL", API_URL);

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.status === 403 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      const client = new AuthClient(API_URL, instance);
      try {
        const response = await client.refreshAccessToken(getRefreshToken()!);
        localStorage.setItem("accessToken", response.accessToken!);
        return instance.request(originalRequest) as any;
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;

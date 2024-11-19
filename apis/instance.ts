/** @format */

import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://video-protection-api-dev.dguhub.tech/8000",
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);
export default instance;

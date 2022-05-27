import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    console.log(config);
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;

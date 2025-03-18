import HYRequest from './request';
import { BASE_URL, TIME_OUT } from './config';
import { InternalAxiosRequestConfig } from 'axios';

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFN: (config) => {
      return config as InternalAxiosRequestConfig;
    },
  },
});

export default hyRequest;

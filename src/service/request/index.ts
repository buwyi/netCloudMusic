import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { HYRequestConfig } from './type';

class HYRequest {
  instance: AxiosInstance;

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);

    //每个instance实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (!config.params) {
          config.params = {};
        }
        const cookie = localStorage.getItem('MUSIC_U');
        if (cookie) {
          config.params.cookie = `${cookie}`;
        }
        config.params.timestamp = Date.now();
        return config;
      },
      (err) => {
        return err;
      },
    );

    this.instance.interceptors.response.use(
      (config) => {
        return config.data;
      },
      (err) => {
        return err;
      },
    );

    //针对特定HYRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFN,
      config.interceptors?.requestFailureFN,
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFN,
      config.interceptors?.responseFailureFN,
    );
  }

  request<T = any>(config: HYRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFN) {
      config = config.interceptors.requestSuccessFN(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFN) {
            res = config.interceptors?.responseSuccessFN(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, headers: config.headers || {}, method: 'GET' });
  }
  post<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' });
  }
  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' });
  }
  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' });
  }
}

export default HYRequest;

import type { AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

export interface HYInterceptros<T = AxiosResponse> {
  requestSuccessFN?: (config: AxiosRequestConfig) => InternalAxiosRequestConfig;
  requestFailureFN?: (err: any) => any;
  responseSuccessFN?: (res: T) => T;
  responseFailureFN?: (err: any) => any;
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInterceptros<T>;
}

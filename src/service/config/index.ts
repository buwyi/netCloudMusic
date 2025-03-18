//vite提供的环境变量
//import.meta.env.MODE
//import.meta.env.DEV 开发环境
//import.meta.env.PROD 生产环境
//import.meta.env.SSR 是否为服务器端渲染 server side render

let BASE_URL = '';
if (import.meta.env.DEV) {
  BASE_URL = 'http://localhost:3000';
}

export const TIME_OUT = 10000;
export { BASE_URL };

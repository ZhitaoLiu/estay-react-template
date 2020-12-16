import axios from 'axios';

const request = axios.create({
  baseURL: 'http://123.207.32.32:9001/',
  timeout: 10000,
});

// request interceptor
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.error(err);
    return err;
  },
);

// response interceptor
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    console.warn('来到了response拦截fail中');
    console.error(err);
    return err;
  },
);

export default request;

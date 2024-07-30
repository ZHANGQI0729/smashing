import axios from 'axios';
// import { useUserStore } from '../store/index';
// import { storeToRefs } from 'pinia'
// const store:any = useUserStore();
// import { store } from "../store/store";
const timeout = 60000; // 请求超时时间和延迟请求超时时间统一设置
const config = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout,
  headers: {
    'Content-Type': 'application/json'
  }
};

const instance = axios.create(config);
instance.interceptors.request.use(async (config) => {
  if (!config.extraConfig?.tokenRetryCount) {
    config.extraConfig = {
      tokenRetryCount: 0
    };
  }
  // const { token } = store.getState();
  // console.log(token);

  config.headers.Authorization = `Bearer ${localStorage.getItem('serviceToken')}`;
  return config;
});

instance.interceptors.response.use(
  (response) =>
    // return response.data;
    response,
  async (err) => {
    if (axios.isCancel(err)) {
      // 取消的请求，不报错
      return;
    }

    if (err.message === 'Network Error') {
      console.log('Network Error');

      return;
    }
    if (err.message.includes('timeout')) {
      return;
    }
    if (err.response?.status >= 500) {
      return;
    }

    const { data: responseData } = err.response || {};
    const { status } = responseData || {};
    if (status) {
      switch (status) {
        case 4001:
          break;
        default:
          break;
      }
    }
    // return err.response;
  }
);

const get = (url, params) => {
  console.log('get', url, params);
  return instance.get(url, { params });
};
const post = (url, data, config) => instance.post(url, data, config);
const del = (url, params) => instance.delete(url, { params });
const put = (url, data) => instance.put(url, data);
// const upload = (url: string, data?: any): Promise<AxiosResponse<any>> => {
//     return instance.post(url, data,{headers: {
//         'Content-Type': 'multipart/form-data'
//       }});
// }
export { get, post, del, put };

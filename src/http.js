/**
 * Vue Http 请求组件
 *
 * @author hucw
 * @date   2017-01-06
 */
import axios from 'axios';
import store from './store'
import storeActions from './store/actions'
import router from './routers';

// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['x-requested-from'] = 'apiHttpRequest';
axios.defaults.headers.common['x-auth-token'] = '';

// 打印请求参数
/*axios.defaults.transformRequest = [function (data) {
  if (data) {
    console.log('请求参数：' + JSON.stringify(data));
  }
  return data;
}];*/

// http request 拦截器
/*axios.interceptors.request.use(
  (config) => {
    if (store.state.token && store.state.token !== "") {
      config.headers.Authorization = store.state.token;
      config.headers['x-auth-token'] = store.state.token;
    }
    return config;
  },
  (err) => Promise.reject(err));*/

// 请求返回拦截器
axios.interceptors.response.use(
  (response) => {
    if(response.returnCode === 0) {
      return response;
    } else {
      return response;
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
    /*if (error.response) {
      const status = error.response.status;
      if(status === 401) {
        // 401 清除token信息并跳转到登录页面
        store.commit(storeActions.oauth.logout);
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        });
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    if(process.env.development === "development") {
      console.log(JSON.stringify(error));
    }
    return Promise.reject(error.response.data)*/
  }
);

// 常量配置
const baseUrl = process.env.API_HOST_BASE;
const requestTimeOut = process.env.REQUEST_TIME_OUT;

export default {
  
  /**
   * POST 请求
   *
   * @param url
   * @param params
   * @returns {AxiosPromise}
   */
  post: function (url, params = {}) {
    return axios({
      method: 'POST',
      url: url,
      params: params,
      timeout: requestTimeOut
    });
  },
  
  /**
   * GET 请求
   *
   * @param url
   * @param params
   * @returns {AxiosPromise}
   */
  get: function (url, params = {}) {
    return axios({
      method: 'GET',
      url: url,
      params: params,
      timeout: requestTimeOut
    });
  },
  
  /**
   * DELETE请求
   *
   * @param url
   * @param params
   */
  del: function (url, params = {}) {
    return axios({
      method: 'DELETE',
      url: url,
      params: params,
      timeout: requestTimeOut
    });
  },
  
  /**
   * PUT 请求
   *
   * @param url
   * @param parmas
   */
  put: function (url, params = {}) {
    return axios({
      method: 'PUT',
      url: url,
      params: params,
      timeout: requestTimeOut
    });
  },
  
  /**
   * AJAX请求，自行组装参数
   *
   * @param options
   */
  ajax: function (options = {}) {
    return axios(options);
  }
};

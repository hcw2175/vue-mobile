/**
 * Vue Http 请求组件
 *
 * @author hucw
 * @date   2017-01-06
 */
import axios from 'axios';
import Vue from 'vue';
import store from './store';
import types from './store/mutation-types';

// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 打印请求参数
/*axios.defaults.transformRequest = [function (data) {
  if (data) {
    console.log('请求参数：' + JSON.stringify(data));
  }
  return data;
}];*/

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    const token = store.getters[types.oauth.getAuthToken];
    if (token !== null && token !== "") {
      config.headers['x-requested-from'] = "apiHttpRequest";
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (err) => Promise.reject(err));


// http response 拦截器
let emitError = function (errorMsg) {
  let msg = "抱歉，系统出现未知异常。";
  if(errorMsg && errorMsg !== null && errorMsg !== "") {
    msg = "系统异常：" + errorMsg;
  }
  Vue.bus.emit("toast-error", msg);
};

axios.interceptors.response.use(
  (response) => {
    const respData = response.data;
    // 状态码为0表示请求成功，否则失败
    if(respData.code === 0 || respData.returnCode === 0) {
      if(respData.data !== null){
        return respData.data;
      }
      return respData;
    } else {
      // 未授权登录
      if(respData.httpStatusCode === 401 || respData.code === 1200) {
        Vue.bus.emit("oauth");
      } else {
        emitError(respData.errMsg + "(" + respData.code + ")");
      }
      return Promise.reject(respData);
    }
  },
  (error) => {
    const response = error.response;
    let errMsg = "";
    if(response && response.data){
      // 未授权登录
      if(response.data.httpStatusCode === 401 || response.data.returnCode === 1200 || response.data.code === 1200) {
        Vue.bus.emit("oauth");
      } else {
        // 其它错误信息处理
        if(response.data.returnMsg) {
          errMsg = response.data.returnMsg + "(" + response.data.returnCode + ")"
        } else if(response.data.errMsg) {
          errMsg = response.data.errMsg + "(" + response.data.code + ")";
        }
      }
    }
    emitError(errMsg);
    return Promise.reject(error.response.data)
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

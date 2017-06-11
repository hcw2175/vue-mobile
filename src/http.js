/**
 * Vue Http 请求组件
 *
 * @author hucw
 * @date   2017-01-06
 */
import axios from 'axios';

// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 设置token
axios.defaults.headers.common['x-auth-token'] = 'x-auth-token';
/*axios.defaults.headers.common['x-requested-from'] = 'apiHttpRequest';*/

// 打印请求参数
axios.defaults.transformRequest = [function (data) {
  if (data) {
    console.log('请求参数：' + JSON.stringify(data));
  }
  return data;
}];

// 请求返回拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // TODO 统一错误处理
    return error;
  });

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

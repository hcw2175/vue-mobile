/**
 * APP通用辅助函数
 *
 * @author  hucw
 * @created 2017-06-05
 */
export default {
  cache: {
    put: function (key, val) {
      window.localStorage.setItem(key, JSON.stringify(val));
    },

    get: function (key) {
      return JSON.parse(window.localStorage.getItem(key));
    },

    hasKey: function (key) {
      var item = window.localStorage.getItem(key);
      return item !== null && typeof item !== undefined;
    }
  }
};

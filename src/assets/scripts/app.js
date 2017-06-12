/**
 * APP通用辅助函数
 *
 * @author  hucw
 * @created 2017-06-05
 */
export default {
  // 是否测试环境
  isDev: process.env.development === "development",
  
  
  // localStorage封装
  storage: (function() {
    const namespace = "iotph5";
    const localStorage = window.localStorage;
    
    let getStorage = function () {
      if(localStorage.getItem(namespace) === null) {
        localStorage.setItem(namespace,'{}');
      }
      return JSON.parse(localStorage.getItem(namespace));
    };
    
    return {
      put: function (key, val) {
        const storage = getStorage();
        storage[key] = val;
        localStorage.setItem(namespace, JSON.stringify(storage));
      },
  
      get: function (key) {
        const storage = getStorage();
        return storage[key] !== undefined ? storage[key] : null;
      },
  
      remove: function (key) {
        const storage = getStorage();
        delete storage[key];
        localStorage.setItem(namespace, JSON.stringify(storage));
      },
      
      hasKey: function (key) {
        const item = this.get(key);
        return item !== null && typeof item !== undefined;
      }
    }
  }())
};

/**
 * store的动作处理
 *
 * @author  hucw
 * @created 2017-06-12
 */

export default {
  // 授权相关操作
  oauth: {
    getAuthToken: "getAuthToken",
    updateAuthToken: "updateAuthToken",

    getCurUser: "getCurUser",
    updateCurUser: "updateCurUser",

    getCurShop: "getCurShop",
    updateCurShop: "updateCurShop",

    getRole: "getRole",
    updateRole: "updateRole"
  }
}

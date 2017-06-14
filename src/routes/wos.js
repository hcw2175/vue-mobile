/**
 * 工单系统路由配置
 *
 * @author  hucw
 * @created 2017-06-14
 */
export default [
  {
    path: '/wos',
    name: 'wos',
    component: function (resolve) {
      require(['@/pages/wos/index'], resolve);
    }
  }
]

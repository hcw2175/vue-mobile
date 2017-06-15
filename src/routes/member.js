/**
 * 用户个人中心路由配置
 *
 * @author  hucw
 * @created 2017-06-14
 */

export default [
  {
    path: '/shop_:shopId',
    name: 'shop-index',
    component: function (resolve) {
      require(['@/pages/member/index'], resolve);
    }
  },


  {
    path: '/bind/mobile',
    name: 'bind-mobile',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/pages/member/bind-mobile'], resolve);
    }
  },

  // ==========================================================
  // 底部4大导航
  {
    path: '/home',
    name: 'home',
    component: function (resolve) {
      require(['@/pages/member/nav-home'], resolve);
    }
  },
  {
    path: '/devices',
    name: 'devices',
    component: function (resolve) {
      require(['@/pages/member/nav-devices.vue'], resolve);
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: function (resolve) {
      require(['@/pages/member/nav-orders.vue'], resolve);
    }
  },
  {
    path: '/my',
    name: 'my',
    component: function (resolve) {
      require(['@/pages/member/nav-my.vue'], resolve);
    }
  },

  // 设备管理
  {
    path: '/devices/view',
    name: 'devices-view',
    component: function (resolve) {
      require(['@/pages/member/devices/view.vue'], resolve);
    }
  },
  {
    path: '/devices/iwater',
    name: 'devices-iwater',
    component: function (resolve) {
      require(['@/pages/member/devices-iwater/iwater.vue'], resolve);
    }
  },
]

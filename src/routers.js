import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
  
    // 登录处理
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['./components/login.vue'], resolve);
      },
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: function (resolve) {
        require(['./components/logout.vue'], resolve);
      }
    },
    
    // 四大导航
    {
      path: '/home',
      name: 'home',
      component: function (resolve) {
        require(['./pages/member/nav-home'], resolve);
      }
    },
    {
      path: '/devices',
      name: 'devices',
      component: function (resolve) {
        require(['./pages/member/nav-devices.vue'], resolve);
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: function (resolve) {
        require(['./pages/member/nav-orders.vue'], resolve);
      }
    },
    {
      path: '/my',
      name: 'my',
      component: function (resolve) {
        require(['./pages/member/nav-my.vue'], resolve);
      }
    },
    
    // 设备管理
    {
      path: '/devices/view',
      name: 'devices-view',
      component: function (resolve) {
        require(['./pages/member/devices/view.vue'], resolve);
      }
    },
    {
      path: '/devices/iwater',
      name: 'devices-iwater',
      component: function (resolve) {
        require(['./pages/member/devices-iwater/iwater.vue'], resolve);
      }
    }
  ]
})

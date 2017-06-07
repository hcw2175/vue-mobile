import Vue from 'vue';
import Router from 'vue-router';

import MemberHome from './pages/member/nav-home';
import Devices from './pages/member/nav-devices.vue';
import Orders from './pages/member/nav-orders.vue';
import My from './pages/member/nav-my.vue';

// 登录验证
import Login from './components/login.vue';

// 设备信息
import DevicesView from './pages/member/devices/view.vue';
import DevicesIWater from './pages/member/devices-iwater/iwater.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
  
    // 登录页面
    {
      path: '/',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    // 四大导航
    {
      path: '/home',
      name: 'home',
      component: MemberHome
    },
    {
      path: '/devices',
      name: 'devices',
      component: Devices
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    
    // 设备管理
    {
      path: '/devices/view',
      name: 'devices-view',
      component: DevicesView
    },
    {
      path: '/devices/iwater',
      name: 'devices-iwater',
      component: DevicesIWater
    }
  ]
})

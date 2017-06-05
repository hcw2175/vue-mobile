import Vue from 'vue';
import Router from 'vue-router';

import MemberHome from './pages/member/nav-home';
import Devices from './pages/member/nav-devices.vue';
import Orders from './pages/member/nav-orders.vue';
import My from './pages/member/nav-my.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'member',
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
    }
  ]
})

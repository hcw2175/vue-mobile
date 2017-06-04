import Vue from 'vue';
import Router from 'vue-router';

import member from './pages/member/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'member',
      component: member
    }
  ]
})

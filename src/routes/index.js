import Vue from 'vue';
import Router from 'vue-router';

import memberRoutes from "./member";
import wosRoutes from "./wos";
import uidemoRoutes from "./uidemos";


Vue.use(Router);

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some((m) => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0;
      position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
};

let routes = [
  // 登录处理
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/components/auth/login.vue'], resolve);
    }
  },
  {
    path: '/access/token',
    name: 'accesstoken',
    meta: {
      requireAuth: false
    },
    component: function (resolve) {
      require(['@/components/auth/accesstoken.vue'], resolve);
    },
  },
  {
    path: '/logout',
    name: 'logout',
    component: function (resolve) {
      require(['@/components/auth/logout.vue'], resolve);
    }
  },

  // ===========================
  // 错误页面处理
  {
    path: '*',
    name: '404',
    component: function (resolve) {
      require(['@/components/error/404.vue'], resolve);
    }
  }
];
routes = routes.concat(memberRoutes);
routes = routes.concat(wosRoutes);
routes = routes.concat(uidemoRoutes);

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes
})

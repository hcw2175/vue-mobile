/**
 * Vue主入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routers';
import store from './store';
import http from './http';

// 第三方组件库
require('es6-promise').polyfill();

import './assets/fonts/font-awesome/css/font-awesome.min.css';
import './assets/fonts/iconfont/iconfont.css';

// 引入vux通用的组件
import {ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin} from 'vux'
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);

// 引入vux通用页面组件
import {Group, Cell, XButton, Flexbox} from 'vux';
Vue.component('group', Group);
Vue.component('cell', Cell);
Vue.component('x-button', XButton);
Vue.component('flexbox', Flexbox);

// 注册组件
import './assets/scss/app.scss';
import AppView from '@/components/app-view.vue';

Vue.component("app-view", AppView);

// 其它配置
Vue.prototype.$http = http;
Vue.prototype.$basehost = process.env.HOST_BASE;
Vue.prototype.$apihost = process.env.API_HOST_BASE;
Vue.prototype.$uahost = process.env.API_HOST_UA;
Vue.prototype.$woshost = process.env.API_HOST_WOS;
Vue.config.productionTip = false;

// 路由登录拦截
/*router.beforeEach((to, from, next) => {
  // 默认所有路由都需要授权
  // 例外请在路由中配置： { meta: { requireAuth: true } }
  const requireAuth = to.meta.requireAuth || true;
  if(requireAuth) {
    // 通过vuex state获取当前的token是否存在
    if (store.state.token && store.state.token !== "") {
      next();
    } else {
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});*/

// 实例化
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

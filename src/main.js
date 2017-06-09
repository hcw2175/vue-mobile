/**
 * Vue主入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routers';
import store from './store';
import http from './assets/scripts/http';

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
import AppView from '@/components/layouts/app-view.vue';

Vue.component("app-view", AppView);

// 其它配置
Vue.prototype.$http = http;
Vue.config.productionTip = false;

// 实例化
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

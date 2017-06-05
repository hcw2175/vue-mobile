/**
 * Vue主入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routers';
import store from './store';

// 第三方组件库
import 'mint-ui/lib/style.css';
import './assets/fonts/font-awesome/css/font-awesome.min.css';

import Mint from 'mint-ui';
Vue.use(Mint);

// 注册组件
import './assets/scss/app.scss';

import AppNav from './components/layouts/app-nav.vue';
import AppView from './components/layouts/app-view.vue';
Vue.component("app-nav", AppNav);
Vue.component("app-view", AppView);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

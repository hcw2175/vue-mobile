/**
 * Vue主入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routers';
import store from './store';
import http from './assets/scripts/http';

// 第三方组件库
import 'mint-ui/lib/style.css';
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import './assets/fonts/iconfont/iconfont.css';

Vue.config.productionTip = false;
Vue.prototype.$http = http;

// 注册组件
import './assets/scss/app.scss';
import AppView from '@/components/layouts/app-view.vue';

Vue.component("app-view", AppView);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

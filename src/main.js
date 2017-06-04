/**
 * Vue主入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routers';
import Mint from 'mint-ui';

//import './assets/fonts/font-awesome/css/font-awesome.min.css';
import './assets/fonts/test';
import './assets/scss/app.scss';

Vue.config.productionTip = false;

Vue.use(Mint);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

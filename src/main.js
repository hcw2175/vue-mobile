/**
 * Vue主入口文件
 */
import Vue from 'vue';
import App from './app.vue';
import router from './routes';
import store from './store';
import MutationTypes from "@/store/mutation-types";

// 第三方组件库
// -----------------------------------------------
require('es6-promise').polyfill();

import './assets/fonts/font-awesome/css/font-awesome.min.css';
import './assets/fonts/iconfont/iconfont.css';

// 引入mint-ui组件：https://mint-ui.github.io/docs/#/zh-cn2
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
Vue.use(MintUI);

// 全局toast: https://github.com/chengxulvtu/cxlt-vue2-toastr
// 使用方法：this.$toast.succes(),this.$toast.error()
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import CxltToastr from 'cxlt-vue2-toastr';
Vue.use(CxltToastr, {
  position: 'top full width',
  timeOut: 3000,
  closeButton: true
});

// Vue事件总线封装：https://github.com/yangmingshan/vue-bus
import VueBus from 'vue-bus';
Vue.use(VueBus);

// Vue表单校验：
import VeeValidate, { Validator } from 'vee-validate';
// 中文
import CN from 'vee-validate/dist/locale/zh_CN';
Validator.addLocale(CN);
// 自定义校验扩展
import rules from "@/assets/scripts/vee-validate/rules";
if(rules.length > 0) {
  for(let i=0; i < rules.length; i++) {
    const exrule = rules[i];
    Validator.extend(exrule.name, exrule.rule);
  }
}
Vue.use(VeeValidate, {
  locale: 'zh_CN'
});


// 注册自定义组件
// -----------------------------------------------
import './assets/scss/app.scss';
import AppView from '@/components/layouts/app-view.vue';
import FormFeild from '@/components/ui/form-field';
import BtnSmsCode from '@/components/ui/btn-smscode';
Vue.component("app-view", AppView);
Vue.component("form-field", FormFeild);
Vue.component("btn-smscode", BtnSmsCode);


// 其它通用配置
// -----------------------------------------------
Vue.config.productionTip = false;

// api地址配置
import http from './http';
Vue.prototype.$http = http;
Vue.prototype.$basehost = process.env.HOST_BASE;
Vue.prototype.$apihost = process.env.API_HOST_BASE;
Vue.prototype.$uahost = process.env.API_HOST_UA;
Vue.prototype.$woshost = process.env.API_HOST_WOS;

// 通用工具
import Loading from "scripts/loading";
Vue.prototype.$loading = Loading;


// 路由登录拦截
// -----------------------------------------------
router.beforeEach((to, from, next) => {
  // 默认所有路由都需要授权
  // 例外请在路由中配置： { meta: { requireAuth: true } }
  let requireAuth = to.meta.requireAuth;
  if (typeof (requireAuth) === "undefined") {
    requireAuth = true;
  }

  if (requireAuth === true) {
    // 通过vuex state获取当前的token是否存在
    const token = store.getters[MutationTypes.oauth.getAuthToken];
    if (token !== null && token !== "") {
      next();
    } else {
      // 将跳转的路由path作为参数，登录成功后跳转到该路由
      console.log("授权信息失效，重新登录...");
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});

// 实例化
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  mounted: function () {
    // 监听错误输出
    this.$bus.on('toast-error', (msg) => {
      this.$loading.hide();
      this.$toast.error({
        message: msg
      });
    });

    // 监听登录处理
    this.$bus.on("oauth", () => {
      this.$toast.error({
        message: "请重新登录"
      });
      //store.commit(MutationTypes.oauth.updateAuthToken, "");
      router.replace({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    });
  },
  beforeDestroy() {
    // 取消事件监听
    this.$bus.off('event-error');
  },
});

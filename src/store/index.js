/**
 * Vuex状态管理入口
 *
 * @author  hucw
 * @created 2017-06-05
 */

import Vue from "vue";
import Vuex from "vuex";
import App from "@/assets/scripts/app";

Vue.use(Vuex);

export default new Vuex.Store({
  stage: {
    navId: ""
  },
  mutations: {
    getNavId: function (state) {
      if(state.navId !== "") {
        return state.navId;
      }

      if(App.cache.hasKey("navId")) {
        state.navId = App.cache.getItem("navItem")
      }  else {
        state.navId = "home";
      }
      return state.navId;
    },

    setNavId: function (state, navId) {
      console.log("set nav id：" + navId);
      state.navId = navId;
      App.cache.put("navId", navId);
    }
  }
});

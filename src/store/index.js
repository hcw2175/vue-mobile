/**
 * Vuex状态管理入口
 *
 * @author  hucw
 * @created 2017-06-05
 */

import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLoading: false,
    showEmptyView: false
  },
  mutations: {
    showLoading: function (state) {
      state.showLoading = true;
    },
    hideLoading: function (state) {
      state.showLoading = false;
    },
    showEmptyView: function (state) {
      state.showEmptyView = true
    },
    hideEmptyView: function (state) {
      state.showEmptyView = false
    }
  },

  modules: {
    auth
  }
});

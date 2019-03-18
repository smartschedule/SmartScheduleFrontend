import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { getToken } from '$c/token';
import { getUserDetails } from '$c/api';
export default new Vuex.Store({
  state: {
    userInfo: null,
    token: getToken(),
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload.userInfo;
    },
    dropUserInfo(state, payload) {
      state.userInfo = null;
      localStorage.removeItem('token');
    },
  },
  actions: {
    dropToken({ commit }) {
      commit({ type: 'dropUserInfo' });
    },
    async setToken({ state: { token }, commit }) {
      const userInfo = await getUserDetails();
      commit({ type: 'setUserInfo', userInfo });
    },
  },
});

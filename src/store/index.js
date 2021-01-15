import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
  },
  mutations: {
    /**
     * 更新state中的token
     * @param state
     * @param token
     */
    updateToken(state, token) {
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  },
});

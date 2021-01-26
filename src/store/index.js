import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    userID: '',
  },
  mutations: {
    /**
     * 更新state中的token
     * @param state
     * @param token
     */
    updateToken(state, token) {
      console.log(`store更新token:${token}`);
      state.token = token;
    },
    updateUserID(state, userID) {
      console.log(`store更新userID:${userID}`);
      state.userID = userID;
    },
  },
  getters: {
    token: (state) => state.token,
    userID: (state) => state.userID,
  },
  actions: {
  },
  modules: {
  },
});

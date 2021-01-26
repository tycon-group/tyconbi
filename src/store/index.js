import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    empID: '',
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
    updateEmpID(state, empID) {
      state.empID = empID;
    },
  },
  getters: {
    token: (state) => state.token,
    empID: (state) => state.empID,
  },
  actions: {
  },
  modules: {
  },
});

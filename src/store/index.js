import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    empID: '',
    peopleName: '',
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
    updatePeopleName(state, peopleName) {
      state.peopleName = peopleName;
    },
  },
  getters: {
    token: (state) => state.token,
    empID: (state) => state.empID,
    peopleName: (state) => state.peopleName,
  },
  actions: {
  },
  modules: {
  },
});

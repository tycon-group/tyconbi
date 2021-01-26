import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    empID: '',
    pickOrgDataID: '',
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
    updatePickOrgDataID(state, pickOrgDataID) {
      state.pickOrgDataID = pickOrgDataID;
    },
  },
  getters: {
    token: (state) => state.token,
    empID: (state) => state.empID,
    pickOrgDataID: (state) => state.pickOrgDataID,
  },
  actions: {
  },
  modules: {
  },
});

import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    empID: '',
    peopleName: '',
    type: '',
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
    updatePeopleName(state, peopleName) {
      state.peopleName = peopleName;
    },
    updateType(state, type) {
      state.type = type;
    },
    updatePickOrgDataID(state, pickOrgDataID) {
      state.pickOrgDataID = pickOrgDataID;
    },
  },
  getters: {
    token: (state) => state.token,
    empID: (state) => state.empID,
    peopleName: (state) => state.peopleName,
    type: (state) => state.type,
    pickOrgDataID: (state) => state.pickOrgDataID,
  },
  actions: {
  },
  modules: {
  },
});

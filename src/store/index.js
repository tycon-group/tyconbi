import { createStore } from 'vuex';

export default createStore({
  state: {
    token: window.sessionStorage.getItem('token'),
    empID: window.sessionStorage.getItem('empID'),
    name: window.sessionStorage.getItem('name'),
    peopleName: window.sessionStorage.getItem('peopleName'),
    type: window.sessionStorage.getItem('type'),
    pickOrgDataID: window.sessionStorage.getItem('pickOrgDataID'),
    personEmpID: window.sessionStorage.getItem('personEmpID'),
  },
  mutations: {
    /**
     * 更新state中的token
     * @param state
     * @param token
     */
    updateToken(state, token) {
      state.token = token;
      window.sessionStorage.setItem('token', token);
    },
    updateEmpID(state, empID) {
      state.empID = empID;
      window.sessionStorage.setItem('empID', empID);
    },
    updateEmpName(state, empName) {
      state.name = empName;
      window.sessionStorage.setItem('name', empName);
    },
    updatePeopleName(state, peopleName) {
      state.peopleName = peopleName;
      window.sessionStorage.setItem('peopleName', peopleName);
    },
    updateType(state, type) {
      state.type = type;
      window.sessionStorage.setItem('type', type);
    },
    updatePickOrgDataID(state, pickOrgDataID) {
      state.pickOrgDataID = pickOrgDataID;
      window.sessionStorage.setItem('pickOrgDataID', pickOrgDataID);
    },
    updatePersonEmpID(state, personEmpID) {
      state.personEmpID = personEmpID;
      window.sessionStorage.setItem('personEmpID', personEmpID);
    },
    logout(state) {
      state.token = null;
      state.name = null;
      state.empID = null;
      state.peopleName = null;
      state.type = 'direct';
      state.pickOrgDataID = null;
      state.personEmpID = null;
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('name');
      window.sessionStorage.removeItem('empID');
      window.sessionStorage.removeItem('peopleName');
      window.sessionStorage.removeItem('type');
      window.sessionStorage.removeItem('pickOrgDataID');
      window.sessionStorage.removeItem('personEmpID');
    },
  },
  getters: {
    token: (state) => state.token,
    empID: (state) => state.empID,
    name: (state) => state.name,
    peopleName: (state) => state.peopleName,
    type: (state) => state.type,
    pickOrgDataID: (state) => state.pickOrgDataID,
    personEmpID: (state) => state.personEmpID,
  },
  actions: {
  },
  modules: {
  },
});

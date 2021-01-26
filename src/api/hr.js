// hr模块接口
// import qs from 'qs'; // 导入request中创建的axios实例
import base from './base'; // 导入接口域名列表
import axios from '../request/index';

const hr = {
  /**
   * 获取所有员工
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAllEmployees() {
    return axios.get(`${base.bi}hr/employees/`);
  },
  /**
   * 获取员工
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getTheEmployee(id) {
    return axios.get(`${base.bi}hr/employees/${id}/`);
  },
  /**
   * 获取下属
   * @returns {Promise<AxiosResponse<any>>}
   */
  getUnderlings(id) {
    return axios.get(`${base.bi}hr/underlings/${id}`);
  },
  /**
   * 获取所有职位
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAllJobs() {
    return axios.get(`${base.bi}hr/jobs/`);
  },
  /**
   * 获取职位
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getTheJob(id) {
    return axios.get(`${base.bi}hr/jobs/${id}/`);
  },
  /**
   * 获取所有组织
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAllOrganizations() {
    return axios.get(`${base.bi}hr/organizations/`);
  },
  /**
   * 获取组织
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getTheOrganization(id) {
    return axios.get(`${base.bi}hr/organizations/${id}/`);
  },
  /**
   * 获取所有的组织和成员
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAllOrgAndEmp() {
    return axios.get(`${base.bi}hr/listOrgAndEmp/`);
  },
  /**
   * 获取组织架构树
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getOrgTree(id) {
    return axios.get(`${base.bi}hr/orgTree/${id}/`);
  },
  /**
   * 获取所有的任职
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAllRoles() {
    return axios.get(`${base.bi}hr/roles/`);
  },
  /**
   * 获取任职
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getTheRole(id) {
    return axios.get(`${base.bi}hr/roles/${id}`);
  },
};

export default hr;

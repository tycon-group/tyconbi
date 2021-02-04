// 日志模块接口
import qs from 'qs'; // 导入request中创建的axios实例
import base from './base'; // 导入接口域名列表
import axios from '../request/index';

const worklog = {
  /**
   * 获取所有日志
   * @returns {Promise<AxiosResponse<any>>}
   */
  getAllWorklogs(params) {
    return axios.get(`${base.bi}wl/worklogs/`, { params });
  },
  /**
   * 获取日志
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getTheWorklog(id) {
    return axios.get(`${base.bi}wl/worklogs/${id}/`);
  },
  /**
   * 获取单个日志评分
   * @returns {Promise<AxiosResponse<any>>}
   */
  getMyScore(id) {
    return axios.get(`${base.bi}wl/getMyScore/${id}/`);
  },
  /**
   * 提交评分
   * @returns {Promise<AxiosResponse<any>>}
   */
  postTheScores(param) {
    return axios.post(`${base.bi}wl/scores/`, qs.stringify(param));
  },
  /**
   * 删除日志的分数
   * @param id
   * @returns {Promise<AxiosResponse<any>>}
   */
  deleteTheScore(id) {
    return axios.delete(`${base.bi}wl/scores/${id}/`);
  },
  /**
   * 上传文件
   * @param param 文件
   * @returns {Promise<AxiosResponse<any>>}
   */
  doUpload(param) {
    return axios.post(`${base.bi}wl/doUpload/`, qs.stringify(param));
  },
  /**
   * 分析上传的日志压缩包
   * @param id 文件ID
   * @param params 参数
   * @returns {Promise<AxiosResponse<any>>}
   */
  doAnalyse(id, params) {
    return axios.post(`${base.bi}wl/doAnalyse/${id}/`, qs.stringify(params));
  },
  /**
   * 获取我的下属人员日志详情
   * @param id , 这是使用者的ID，可以加上/?type=xxx，year,month得到个人的当前日志情况
   *
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getMyEmpWorklogsInfo(id, params) {
    return axios.get(`${base.bi}wl/myEmpWorklogsInfo/${id}/`, { params });
  },
};

export default worklog;

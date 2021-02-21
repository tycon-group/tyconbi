// 日志模块接口
import base from './base'; // 导入接口域名列表
import axios from '../request/index';

const kpi = {
  /**
   * 获取单月日志情况
   * @param id , 这是使用者的ID，可以加上year,month得到个人的当前日志情况
   *
   * @param params
   * @returns {Promise<AxiosResponse<any>>} 暂时不介入时间
   */
  getWorklogMonthReportList(id) {
    return axios.get(`${base.bi}kpi/worklog/reports/month/${id}/`);
  },
  /**
   * 获取季度日志情况
   * @param id , 这是使用者的ID，可以加上year,month得到个人的当前日志情况
   *
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getWorklogQuarterReport(id, params) {
    return axios.get(`${base.bi}kpi/worklog/reports/quarter/${id}/`, { params });
  },
  /**
   * 获取年度/半年度日志情况
   * @param id , 这是使用者的ID，可以加上year,month得到个人的当前日志情况
   *
   * @param params
   * @returns {Promise<AxiosResponse<any>>}
   */
  getWorklogSemiannualReportList(id, params) {
    return axios.get(`${base.bi}kpi/worklog/reports/semiannual/${id}/`, { params });
  },
};

export default kpi;

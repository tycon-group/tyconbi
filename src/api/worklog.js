// 日志模块接口
import base from './base'; // 导入接口域名列表
import axios from '../request/index'; // 导入request中创建的axios实例

const worklog = {
  // 新闻列表
  articleList() {
    return axios.get(`${base.sq}/topics`);
  },
  // 新闻详情,演示
  articleDetail(id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params,
    });
  },
  // 其他接口…………
};

export default worklog;

// SSO模块接口
import qs from 'qs';
import base from './base'; // 导入接口域名列表
import axios from '../request/index'; // 导入request中创建的axios实例

// https://github.com/axios/axios

const sso = {
  // 申请Token
  /**
   * 获取Token
   * @param 结构形式的参数
   * @returns {Promise<AxiosResponse<any>>}
   */
  getToken(params) {
    return axios.post(`${base.sso}auth-token/`, qs.stringify(params));
  },
  // 刷新Token
  refreshToken(params) {
    return axios.post(`${base.sso}token-refresh/`, qs.stringify(params));
  },
  // 验证Token
  verifyToken(params) {
    return axios.post(`${base.sso}token-verify/`, qs.stringify(params));
  },
};

export default sso;

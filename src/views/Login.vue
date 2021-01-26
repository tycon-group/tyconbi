<template>
  <div class="page">
    <div class="left">
      <div style="height: 30px; width: 100%; text-align: start; margin-bottom: 50px">
        <router-link to='/' ondragstart="return false">
          <a-button >
            <span style="color: #1890ff">返回首页</span>
          </a-button>
        </router-link>
      </div>
      <div style="height: 30px; width: 100%; font-size: 26px; text-align: start;
      margin-bottom: 16px">
        <span>{{ title }}</span>
      </div>
      <div style="height: 210px;width: 100%">
        <a-form layout="vertical" :model="form" v-bind="formItemLayout" >
          <a-form-item style="font-size: 16px; text-align: start">
            <span>Username</span>
            <a-input
              required
              class="inputs"
              v-model:value="form.username"
              maxlength="14"/>
          </a-form-item>
          <a-form-item style="font-size: 16px; text-align: start">
            <span>Password</span>
            <a-input
              required
              has-feedback
              class="inputs"
              type="password"
              autocomplete="off"
              v-model:value="form.password"
              maxlength="18"/>
          </a-form-item>
          <div style="font-size: 14px; display: flex;
            align-items: center;
            justify-content: space-between">
            <a-button
              type="primary"
              html-type="submit"
              style="width: 160px; height: 40px" @click="handleSubmit(user)">
              <span>登录</span>
            </a-button>
            <a
              href="https://www.baidu.com"
              style="font-size: 14px; color: #8F9399">
              忘记密码</a>
          </div>
        </a-form>
      </div>
      <div style="display: flex;
      flex-direction: row;
      height: 50px;
      margin-top: 75px;
      width: 100%">
        <base-app-icon :path="require('@/assets/logo.png')"/>
        <base-app-icon />
        <base-app-icon />
      </div>
    </div>
    <div class="right">
        <img src="../assets/bd_right.png"
             style="height: 100%;" alt="背景图"/>
    </div>
  </div>
</template>
<script>
import BaseAppIcon from '../components/BaseAppIcon.vue';
// eslint-disable-next-line import/no-cycle
import api from '../api/index';

export default {
  components: { BaseAppIcon },
  data() {
    return {
      title: 'Welcome tyconBI',
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      api.sso.getToken({
        username: this.form.username,
        password: this.form.password,
      }).then((res) => {
        console.log(res);
        this.$message.success('登录成功');
        const mytoken = `JWT ${res.data.token}`;
        console.log(`token=${mytoken}`);
        this.$store.commit('updateToken', mytoken);
        this.$router.push('/');
      }).then(() => {
        const params = {
          username: this.form.username,
        };
        api.hr.getAllEmployees(params).then((value) => {
          const tempEMP = value.data.results[0].empID;
          this.$store.commit('updateUserID', tempEMP);
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
        this.$message.error('账号或密码错误');
      });
    },
  },
};
</script>

<style scoped>
.page{
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  background-color: #fff;
}
.left {
  width: 500px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 80px;
  padding-top: 100px;
}
.right{
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.inputs {
  border-color: #EEEEEE;
  border-style: solid;
  border-width: 0 0 1px;
}
</style>

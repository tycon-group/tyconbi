<template>
  <a-layout-header
    style="background: #1890ff; position: fixed; padding: 0; display: flex;
      z-index: 1; width: 100vw" >
    <div class="logo">
      <img style="width: 32px; height: 32px; margin: 0 auto" src="../assets/logo.png" alt="logo">
    </div>
    <div
      class="name">
      <span>太江数据分析系统</span>
    </div>
    <div class="deadline" style="display: flex">
      <div class="text" style="width: 200px">
        本期评分倒计时：
      </div>
      <div style=" width: 200px; height: 100px">
        <a-progress :percent="50" size="small" status="active" />
      </div>
    </div>
    <router-link to="/login" ondragstart="return false">
      <a-button type="primary">
        登陆
      </a-button>
    </router-link>
  </a-layout-header>
</template>

<script>
export default {
  name: 'the-header',
  data() {
    return {
      value: 30,
    };
  },
  methods: {},
};
</script>

<style scoped>
.logo{
  height: 64px;
  width: 64px;
  background-color: aqua;
}

.name{
  width: 200px;
  height: 64px;
  background-color: red;
  text-align: center;
  font-size: 20px;
  color: #fff;
}

.deadline {
  width: 500px;
  height: 64px;
  margin:0 auto;
  background-color: aquamarine;
}
</style>

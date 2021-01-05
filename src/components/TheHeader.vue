<template>
  <a-layout-header
    style="background: #1890ff; padding: 0; display: flex;">
    <div class="logo">
      <img style="width: 32px; height: 32px; margin: 0 auto" src="../assets/logo.png" alt="logo">
    </div>
    <div
      class="name">
      <span>太江数据分析系统</span>
    </div>
    <div class="deadline">
      倒计时
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'the-header',
  data() {
    return {
      constants: {},
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
  width: 300px;
  height: 64px;
  margin:0 auto;
  background-color: aquamarine;
}
</style>

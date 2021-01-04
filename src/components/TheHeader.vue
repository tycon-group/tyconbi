<template>
  <a-layout-header
    style="background: #1890ff; padding: 0; display: flex;">
    <img class="logo" src="#" alt="logo">
    <div
      class="name">
      太江数据分析系统
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
  width: 150px;
  height: 64px;
  margin-left: 50px;
  background-color: red;
  text-align: center;
}

.deadline {
  width: 300px;
  height: 64px;
  margin:0 auto;
  background-color: aquamarine;
}
</style>

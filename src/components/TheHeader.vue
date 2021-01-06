<template>
  <a-layout-header class="box">
    <div class="header">
      <img class="logo" src="../assets/logo_anti_white.png"
           alt="logo">
      <span class="title">太江数据分析系统</span>
      <div class="deadline">
        <span class="text">本轮进度：</span>
        <div style="width: 200px; height: 100px">
          <a-progress :percent="50" size="small" status="active" />
        </div>
      </div>
    </div>
    <div class="footer">
      <img class="header-icon" src="../assets/search.png">
      <img class="avatar" src="../assets/avatar.png">
    </div>
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
.box {
  background: #0080CC;
  position: fixed;
  padding: 0;
  display: flex;
  z-index: 1;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
}

.header{
  height: 64px;
  width: 760px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.title{
  height: 64px;
  font-family: SourceHanSansSC-Medium, serif;
  font-size: 20px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}

.deadline {
  display: flex;
  width: 400px;
  height: 64px;
  margin-left: 20px;
  /*background-color: aquamarine;*/
}

.text {
  font-family: SourceHanSansSC-Regular, serif;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}

.logo {
  width: 36px;
  height: 36px;
  margin-left: 20px;
  margin-right: 20px;
}

.footer{
  height: 64px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-icon{
  width: 26px;
  height: 26px;
  margin: 10px;
}

.avatar{
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-left: 10px;
}
</style>

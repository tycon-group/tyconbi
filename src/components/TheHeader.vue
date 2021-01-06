<template>
  <a-layout-header class="header">
    <div class="logo-box">
      <img class="logo" src="../assets/logo_anti_white.png"
           alt="logo">
    </div>
    <div class="title">
      <span>太江数据分析系统</span>
    </div>
    <div class="deadline">
      <div class="text">
        距离本期打分最终期限还有:
      </div>
      <div style="width: 200px; height: 100px">
        <a-progress :percent="50" size="small" status="active" />
      </div>
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
.header {
  background: #0080CC;
  position: fixed;
  padding: 0;
  display: flex;
  z-index: 1;
  width: 100vw
}

.logo-box{
  height: 64px;
  width: 32px;
  margin-left: 20px;
}

.title{
}

.title span{
  font-family: SourceHanSansSC-Medium, serif;
  font-size: 20px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  margin-left: 20px;
}

.deadline {
  display: flex;
  width: 500px;
  height: 64px;
  margin:0 auto;
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
  margin: 0 auto
}
</style>

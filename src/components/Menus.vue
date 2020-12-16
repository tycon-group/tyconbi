<template>
  <div class="mod">
    <div class="box">
      <div class="hd">
        <img
          class="icon"
          src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ca704de03f6011ebb908b146aa291a9d.png"
        />
        <span class="txt">待办事项</span>
      </div>
      <div class="bd">
        <img
          class="news"
          src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/ca8fe3d03f6011eba568efb9df852266.png"
        />
        <span class="word">所有日志</span>
      </div>
      <div class="main">
        <img
          class="icon_1"
          src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/cab482d03f6011eb8600ef07d409486b.png"
        />
        <div class="wrap"><span class="kpi">KPI分析</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {},
};
</script>
<style>
  .mod {
    width: 34.13vw;
    height: 111.47vw;
  }

  .box {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    width: 34.13vw;
    height: 111.47vw;
  }

  .hd {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 2.67vw;
    margin-left: 3.47vw;
    height: 2.67vw;
  }

  .icon {
    margin-right: 2.4vw;
    width: 2.93vw;
    height: 2.4vw;
  }

  .txt {
    line-height: 2.4vw;
    white-space: nowrap;
    color: #0080cc;
    font-size: 1.87vw;
    font-weight: 400;
  }

  .bd {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 5.33vw;
    margin-left: 3.73vw;
    height: 2.8vw;
  }

  .news {
    margin-right: 2.67vw;
    width: 2.4vw;
    height: 2.8vw;
  }

  .word {
    font-weight: 400;
    font-size: 1.87vw;
    color: #303133;
    line-height: 2.4vw;
    white-space: nowrap;
  }

  .main {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-top: 5.07vw;
    margin-left: 3.47vw;
    height: 2.8vw;
  }

  .icon_1 {
    margin-right: 2.4vw;
    width: 2.93vw;
    height: 2.8vw;
  }

  .wrap {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 2.67vw;
  }

  .kpi {
    margin-right: 1.6vw;
    line-height: 2.4vw;
    white-space: nowrap;
    color: #303133;
    font-family: Helvetica;
    font-size: 1.87vw;
  }

</style>

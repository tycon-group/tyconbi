<template>
  <div class="mod">
    <div class="box">
      <span class="info">太江数据分析系统</span>
      <div class="primary">
        <span v-if="true" class="desc">距离本期打分最终期限还有：{{ countdown }} 天</span>
      </div>
      <img
        class="icon"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/793a34403f6011eba50bf56bb4522879.png"
       alt="icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    countdown: String,
  },
  methods: {},
};
</script>

<style>
  .mod {
    width: 1440px;
    height: 64px;
  }
  .mod .box {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #0080CC;
    width: 1440px;
    height: 64px;
  }
  .mod .info {
    margin-right: 105px;
    margin-left: 73px;
    max-width: 419px;
    height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 28px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
  }
  .mod .primary {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-right: 697px;
    width: 359px;
    height: 23px;
  }
  .mod .word {
    position: absolute;
    top: 0px;
    right: 92px;
    line-height: 20px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  .mod .desc {
    position: relative;
    margin-right: 11px;
    line-height: 20px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  .mod .icon {
    width: 30px;
    height: 30px;
  }
</style>

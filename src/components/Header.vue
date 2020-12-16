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
    width: 19.2rem;
    height: 0.85rem;
  }
  .box {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #0080cc;
    width: 19.2rem;
    height: 64px;
  }
  .info {
    margin-right: 1.4rem;
    margin-left: 0.97rem;
    max-width: 5.59rem;
    height: 0.37rem;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 0.37rem;
    white-space: nowrap;
    color: #ffffff;
    font-size: 0.27rem;
    font-weight: 400;
  }
  .primary {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    margin-right: 9.29rem;
    width: 4.79rem;
    height: 0.31rem;
  }
  .word {
    position: absolute;
    top: 0;
    right: 1.23rem;
    line-height: 0.27rem;
    white-space: nowrap;
    color: #ffffff;
    font-size: 0.21rem;
    font-weight: 400;
  }
  .desc {
    position: relative;
    margin-right: 0.15rem;
    line-height: 0.27rem;
    white-space: nowrap;
    color: #ffffff;
    font-size: 0.21rem;
    font-weight: 400;
  }
  .icon {
    width: 0.4rem;
    height: 0.4rem;
  }
</style>

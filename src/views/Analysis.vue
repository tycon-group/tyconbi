<template>
  <div class="contanier">
    <div class="navigation">
<!--      组织架构-->
    </div>
    <div class="content">
<!--      内容区域-->
      <div class="header">
<!--        分布图和成员信息-->
      </div>
      <div class="footer">
<!--        Toolbar和列表-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .contanier {
    display: flex;
    justify-content: flex-start;
    height: 100%;
  }
  .navigation {
    /*background: white;*/
    width: 274px;
    height: 100%;
    display: flex;
    overflow: auto;
    background: #a0d911;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0;
    flex: auto;
    align-items: flex-start;
    overflow: auto;
  }
  .header {
    height: 272px;
    background: #13c2c2;
    width: 100%;
  }
  .footer {
    flex: auto;
    background: #40a9ff;
    width: 100%;
  }
</style>

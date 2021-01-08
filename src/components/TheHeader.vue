<template>
  <a-layout-header class="box">
    <div class="header">
      <img class="logo" src="../assets/logo_anti_white.png"
           alt="logo">
      <span class="title">太江数据分析系统</span>
      <div class="deadline">
        <span>本月考评进度：</span>
        <div class="process-group">
          <span>16天</span>
          <div>
            <a-progress  :stroke-color="{'0%': '#24A4F0','100%': '#00CCBF'}"
                         :percent="50"
                         size="small"
                         :show-info="false"
                         status="active" />
          </div>
        </div>
        <div>
          <TrophyFilled />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="search_bar">
        <a-input v-model:value="value" placeholder="请输入查询内容">
        </a-input>
      </div>
      <div class="avatar">
        <a-avatar alt="Avatar"/>
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
import { TrophyFilled } from '@ant-design/icons-vue';

export default {
  components: {
    TrophyFilled,
  },
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
  width: 580px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.title{
  height: 64px;
  width: 200px;
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
}

.deadline span {
  font-family: SourceHanSansSC-Regular, serif;
  font-size: 14px;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search_bar {
  width: 140px;
}

.avatar{
  margin-left: 20px;
  margin-right: 20px;
}
.process-group {
  width: 200px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.process-group span {
  font-size: 12px;
  height: 17px;
}
</style>

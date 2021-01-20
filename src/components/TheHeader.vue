<!--TYCONCPS Header样式-->
<!--含LOGO、标题、Deadline、搜索、Avatar-->

<template>
  <base-layout-header>
    <template #header>
      <img class="logo" src="../assets/logo_anti_white.png"
           alt="logo">
      <span class="title">太江数据分析系统</span>
      <div class="deadline">
        <span>本月考评进度：</span>
        <div class="process-group">
          <span>
            <HourglassOutlined style="margin-right: 4px" spin="true"/>
            {{ deadline }}天</span>
          <div>
            <a-progress  :stroke-color="{'0%': '#24A4F0','100%': '#00CCBF'}"
                         :percent=percent
                         size="small"
                         :show-info="false"
                         status="active" />
          </div>
        </div>
        <div>
          <TrophyFilled />
        </div>
      </div>
    </template>
    <template #main>
    </template>
    <template #footer>
      <SearchOutlined style="color: white; font-size: 26px"
                      v-if="!ifShowSearchInput" v-on:click="showSearchInput"/>
      <div class="search_bar" v-else>
        <a-input v-model:value="searchValue" placeholder="请输入查询内容">
        </a-input>
      </div>
      <div class="avatar">
        <router-link to="/login" ondragstart="return false">
          <a-avatar alt="Avatar" size="30px"/>
        </router-link>
      </div>
    </template>
  </base-layout-header>
</template>

<script>
import {
  TrophyFilled,
  SearchOutlined,
  HourglassOutlined,
} from '@ant-design/icons-vue';
import BaseLayoutHeader from './BaseLayoutHeader.vue';

export default {
  components: {
    BaseLayoutHeader,
    HourglassOutlined,
    TrophyFilled,
    SearchOutlined,
  },
  name: 'the-header',
  data() {
    return {
      searchValue: '',
      ifShowSearchInput: false,
    };
  },
  methods: {
    showSearchInput() {
      this.ifShowSearchInput = true;
    },
  },
  computed: {
    deadline() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const d = new Date(year, month, 0);
      const days = d.getDate();
      const thisday = date.getDate();
      return days - thisday;
    },
    percent() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const d = new Date(year, month, 0);
      const days = d.getDate();
      const thisday = date.getDate();
      return (thisday / days) * 100;
    },
  },
};
</script>

<style scoped>
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

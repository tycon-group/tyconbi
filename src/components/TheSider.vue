<template>
  <a-layout-sider
    :style="{ backgroundColor: '#fff', marginTop: '64px' }"
    v-model:collapsed="collapsed"
    :trigger="null" collapsible
  >
<!--    这是菜单栏-->
    <a-menu mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="/AllWorklogs">
        <router-link to="/AllWorklogs" ondragstart="return false">
          <DatabaseOutlined />
          <span>所有日志</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="/Analysis">
        <router-link to="/Analysis" ondragstart="return false">
          <PieChartOutlined />
          <span>KPI分析</span>
        </router-link>
      </a-menu-item>
    </a-menu>
<!--    这是底部收缩按钮-->
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </a-layout-sider>
</template>

<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DatabaseOutlined,
  PieChartOutlined,
} from '@ant-design/icons-vue';

export default {
  name: 'the-sider',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DatabaseOutlined,
    PieChartOutlined,
  },
  data() {
    return {
      selectedKeys: ['/AllWorklogs'],
      collapsed: true,
    };
  },
};
</script>
<style scoped>

.trigger:hover {
  color: #1890ff;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #8F9399;
  position:fixed;
  z-index :100;
  bottom:10px;
  height:50px;
  display:flex;
}
</style>

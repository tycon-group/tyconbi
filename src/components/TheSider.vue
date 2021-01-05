<template>
  <a-layout-sider
    :style="{backgroundColor: '#fff' }"
    v-model:collapsed="collapsed"
    :trigger="null" collapsible
  >
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
} from '@ant-design/icons-vue';

export default {
  name: 'the-sider',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      collapsed: false,
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

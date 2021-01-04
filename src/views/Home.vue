<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!--    这是header-->
    <the-header />
    <a-layout>
<!--      这是侧边栏-->
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
      <a-layout>
<!--        这是内容-->
        <a-layout-content
          :style="{
           marginTop: '24px',
           marginRight: '16px',
           marginLeft: '16px',
           padding: '24px', background: '#fff', height: '75vh' }"
        >
          Content
        </a-layout-content>
<!--        这是页脚-->
        <the-footer :style="{ margin: '16px', background: '#fff'}" />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    TheFooter,
    TheHeader,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #8F9399;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.trigger {
  position:fixed;
  z-index :100;
  bottom:10px;
  height:50px;
  display:flex;
}
</style>

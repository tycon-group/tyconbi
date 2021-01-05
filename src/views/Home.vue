<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!--    这是header-->
    <the-header />
    <a-layout>
<!--      这是侧边栏-->
      <the-sider />
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
        <the-footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import TheSider from '../components/TheSider.vue';

export default {
  components: {
    TheFooter,
    TheHeader,
    TheSider,
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>

</style>

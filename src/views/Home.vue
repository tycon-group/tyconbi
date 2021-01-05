<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!--    这是header-->
    <the-header />
    <a-layout>
<!--      这是侧边栏-->
      <the-sider />
      <a-layout>
<!--        这是内容-->
        <the-content />
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
import TheContent from '../components/TheContent.vue';

export default {
  components: {
    TheContent,
    TheFooter,
    TheHeader,
    TheSider,
  },
};
</script>
<style scoped>

</style>

<template>
  <a-layout>
    <the-header hidden="true"/>
    <a-layout style="display: flex; padding-top: 64px">
      <the-sider />
      <a-layout style="display: flex; flex-direction: column;flex: auto;">
        <the-content style="flex: auto;"/>
        <the-footer style="height: 30px"/>
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

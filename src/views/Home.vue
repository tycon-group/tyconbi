<template>
  <a-layout style="height: 100vh">
    <the-header />
    <a-layout style="padding-top: 64px;">
      <the-sider />
      <the-content />
    </a-layout>
  </a-layout>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheSider from '../components/TheSider.vue';
import TheContent from '../components/TheContent.vue';

export default {
  components: {
    TheContent,
    TheHeader,
    TheSider,
  },
};
</script>
<style scoped>
</style>

<template>
  <a-layout style="display: flex; height: 100vh">
    <the-header/>
    <a-layout style="display: flex; flex-direction: row;
     padding-top: 64px;">
      <the-sider style="width: 120px;" />
      <the-content style="flex: auto;" />
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

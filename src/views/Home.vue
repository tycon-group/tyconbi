<template>
  <a-layout>
    <the-header/>
    <a-layout style="display: flex; flex-direction: row;
     padding-top: 64px; height: 100vh">
      <the-sider style="width: 120px;" />
      <a-layout style="flex:auto; display: flex; flex-direction: column;">
        <the-content style="flex: auto;" />
        <the-footer style="height: 30px;" />
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

<template>
  <a-layout>
    <the-header />
    <a-layout>
      <the-sider />
      <a-layout>
        <the-content />
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

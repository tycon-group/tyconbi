<template>
  <div id="home">
    <the-header/>
    <the-sider/>
    <the-content/>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheSider from '../components/TheSider.vue';
import TheContent from '../components/TheContent.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TheHeader,
    TheSider,
    TheContent,
    TheFooter,
  },
};
</script>

<style>
</style>

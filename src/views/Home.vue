<template>
    <base-layout>
      <template v-slot:header>
        <the-header/>
      </template>
      <template v-slot:sider>
        <the-sider/>
      </template>
      <template v-slot:content>
        <the-content/>
      </template>
    </base-layout>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheSider from '../components/TheSider.vue';
import TheContent from '../components/TheContent.vue';
import BaseLayout from '../components/BaseLayout.vue';

export default {
  components: {
    TheContent,
    TheHeader,
    TheSider,
    BaseLayout,
  },
};
</script>

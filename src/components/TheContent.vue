<template>
  <a-layout-content
    :style="{
           marginTop: '24px',
           marginRight: '16px',
           marginLeft: '16px',
           padding: '24px', background: '#fff', minHeight: '75vh' }"
  >
    <router-view></router-view>
  </a-layout-content>
</template>

<script>
export default {
  name: 'the-content',
};
</script>

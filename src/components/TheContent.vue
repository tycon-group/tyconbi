<template>
  <a-layout-content
    :style="{
           marginTop: '80px',
           marginRight: '16px',
           marginLeft: '16px',
           padding: '24px', background: '#fff', height: '75vh', overflow: 'scroll' }"
  >
    <router-view />
  </a-layout-content>
</template>

<script>
export default {
  name: 'the-content',
};
</script>

<template>
  <a-layout-content
    :style="{
           marginTop: '16px',
           marginRight: '16px',
           marginLeft: '16px',
           padding: '16px',
           background: '#fff',
           overflow: 'scroll' }"
  >
    <router-view />
  </a-layout-content>
</template>

<script>
export default {
  name: 'the-content',
};
</script>

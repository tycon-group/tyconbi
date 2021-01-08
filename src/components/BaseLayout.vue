<template>
  <a-layout style="height: 100vh">
    <slot name="header">header</slot>
    <a-layout style="padding-top: 64px;">
      <slot name="sider">sider</slot>
      <slot name="content">content</slot>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'base-layout',
};
</script>

<style scoped>

</style>

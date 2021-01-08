<!--基础页面布局-->
<!--Header固定-->
<!--Sider固定-->
<!--Content内容可以下滑-->

<template>
  <a-layout style="height: 100vh">
    <slot name="header">header</slot>
    <a-layout>
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

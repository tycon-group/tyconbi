<template>
  <a-layout>
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        marginTop: '64px',
        left: 0}"
        collapsible=true
        defaultCollapsed=true
        theme="light"
        width="160"
    >
      Sider
    </a-layout-sider>
  </a-layout>
</template>

<script>
export default {
  name: 'the-sider',
};
</script>

<!--基础Header布局-->
<!--header、main、footer-->

<template>
  <a-layout-header class="container">
    <div class="header">
      <slot name="header">header</slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="footer">
      <slot name="footer">footer</slot>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'base-layout-header',
};
</script>

<style scoped>
  .container {
    background: #0080CC;
    padding: 0;
    height: 64px;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
  }
  .header{
    width: 640px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .main{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

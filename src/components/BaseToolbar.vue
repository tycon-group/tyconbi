<template>
  <div class="toolbar" style="height: 40px; display: flex; justify-content: start">
    <!--          选择时间区间-->
    <a-range-picker v-model:value="value3" style="width: 240px;"/>
  </div>
</template>

<script>

export default {
  name: 'base-toolbar',
  components: {
  },
  data() {
    return {
      value3: [],
    };
  },
};
</script>

<style scoped>

</style>

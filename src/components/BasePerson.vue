<template>
  infos～
  <div class="footer">
    <!--        Toolbar和列表-->
    <div class="toolbar" style="height: 40px; display: flex; justify-content: start">
      <!--          选择时间区间-->
      <a-range-picker v-model:value="value3" style="width: 240px;"/>
      <!--          选择年度 -->
      <a-select
        v-model:value="value1"
        style="width: 120px; margin-left: 24px"
        @focus="focus"
        ref="select"
      >
        <a-select-option
          v-for="selectItem in dataResources"
          :key="selectItem.id"
          :value="selectItem.value">
          {{ selectItem.name }}
        </a-select-option>
      </a-select>
    </div>
    <div>
      图表～
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-person',
};
</script>

<style scoped>
.footer {
  flex: auto;
  width: 100%;
  padding-top: 16px;
  border-radius:4px;
  box-shadow: 0 0 10px #F3F3F3;
}
</style>

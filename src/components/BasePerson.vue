<template>
  <base-person-attr />
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
      <a-tabs size="small">
        <a-tab-pane key="1" tab="总览">
          总揽
        </a-tab-pane>
        <a-tab-pane key="2" tab="工作能力">
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="工作态度">
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="4" tab="发展潜力">
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="5" tab="突出贡献">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import BasePersonAttr from './BasePersonAttr.vue';

export default {
  name: 'base-person',
  components: {
    BasePersonAttr,
  },
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

<template>
  <base-person-attr />
  <div class="footer">
    <!--        Toolbar和列表-->
    <base-toolbar />
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
import BaseToolbar from './BaseToolbar.vue';

export default {
  name: 'base-person',
  components: {
    BaseToolbar,
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

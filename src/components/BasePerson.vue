<template>
  <base-person-attr />
  <div class="footer">
    <!--        Toolbar和列表-->
    <base-toolbar />
    <div>
      <a-tabs size="small"
              :tabBarStyle="{textAlign: 'left'}">
        <a-tab-pane key="1" tab="总览" style="padding-left: 16px;">
          <div style="margin-bottom: 20px; text-align: start;
           font-size: 16px; font-weight: bold;">综合分析</div>
          <base-total-plot />
        </a-tab-pane>
        <a-tab-pane key="2" tab="工作能力">
          <base-worklog-plot />
          <div style="background-color: #ff425d; height: 72px">dsada</div>
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
import BaseTotalPlot from './plot/BaseTotalPlot.vue';
import BaseWorklogPlot from './plot/BaseWorklogPlot.vue';

export default {
  name: 'base-person',
  components: {
    BaseWorklogPlot,
    BaseTotalPlot,
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
}
</style>

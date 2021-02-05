s<template>
  <base-person-attr />
  <div class="footer">
    <!--        Toolbar和列表-->
    <base-toolbar />
    <div style=" padding-left: 8px;">
      <a-tabs size="small"
              :tabBarStyle="{textAlign: 'left'}">
        <a-tab-pane key="0" tab="总览" style="padding-left: 16px;">
          <div style="margin-bottom: 20px; text-align: start;
           font-size: 16px; font-weight: bold;">综合分析</div>
          <base-total-plot />
        </a-tab-pane>
        <a-tab-pane key="1" tab="工作能力">
          <base-worklog-plot />
          <div style="display: flex; justify-content: space-around; height: 72px; margin-top: 4px;">
            <div style="width: 42px;">
              <div style="font-size: 14px; font-weight: bold;">日志数</div>
              <div style="margin-top: 16px; font-size: 24px; color: #0080CC">12</div>
            </div>
            <div style="width: 70px;">
              <div style="font-size: 14px; font-weight: bold;">日志补写数</div>
              <div style="margin-top: 16px; font-size: 24px; color: #0080CC">0</div>
            </div>
            <div style="width: 70px;">
              <div style="font-size: 14px; font-weight: bold;">日志评论数</div>
              <div style="margin-top: 16px; font-size: 24px; color: #0080CC">0</div>
            </div>
            <div style="width: 42px;">
              <div style="font-size: 14px; font-weight: bold;">高评数</div>
              <div style="margin-top: 16px; font-size: 24px; color: #0080CC">12</div>
            </div>
            <div style="width: 140px;">
              <div style="font-size: 14px; font-weight: bold;">日志评分数</div>
              <div style="margin-top: 16px; display: flex; justify-content: space-around;">
                <div style="display: flex; height: 33px;
                 text-align: center;">
                  <div style="padding-top: 10px; font-size: 12px;">直属：</div>
                  <div style="font-size: 24px; color: #0080CC;">8</div>
                </div>
                <div style="display:flex; height: 33px; text-align: center;">
                  <div style="padding-top: 10px; font-size: 12px;">人事：</div>
                  <div style="font-size: 24px; color: #0080CC;">4</div>
                </div>
              </div>
            </div>
            <div style="width: 42px;">
              <div style="font-size: 14px; font-weight: bold;">低评数</div>
              <div style="margin-top: 16px; font-size: 24px; color: #0080CC">12</div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="工作态度">
          <base-attitude-plot />
        </a-tab-pane>
        <a-tab-pane key="3" tab="发展潜力">
          <base-potential-plot />
        </a-tab-pane>
        <a-tab-pane key="4" tab="突出贡献">
          <base-contribution-plot />
        </a-tab-pane>
        <a-tab-pane key="5" tab="遵纪守法">
          <base-law-plot />
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
import BaseAttitudePlot from './plot/BaseAttitudePlot.vue';
import BaseContributionPlot from './plot/BaseContributionPlot.vue';
import BaseLawPlot from './plot/BaseLawPlot.vue';
import BasePotentialPlot from './plot/BasePotentialPlot.vue';

export default {
  name: 'base-person',
  components: {
    BasePotentialPlot,
    BaseLawPlot,
    BaseContributionPlot,
    BaseAttitudePlot,
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

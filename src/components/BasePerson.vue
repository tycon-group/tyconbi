<template>
  <base-person-attr />
  <div class="footer">
    <!--        Toolbar和列表-->
    <base-toolbar />
    <div style=" padding-left: 8px;">
      <a-tabs size="small"
              :tabBarStyle="{textAlign: 'left'}">
        <a-tab-pane key="0" tab="总览">
          <div style="margin-bottom: 20px; text-align: start;
           font-size: 16px; font-weight: bold;">综合分析</div>
          <base-total-plot />
        </a-tab-pane>
        <a-tab-pane key="1" tab="工作能力">
          <base-worklog-plot />
          <div style="display: flex; justify-content: flex-end">
            <div style="display: flex; flex: 1; justify-content: space-evenly; margin-top: 8px;
           padding-top: 8px; background-color: #F0F2F5;">
              <div style="width: 42px;">
                <div style="font-size: 14px; font-weight: bold;">日志数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">12</div>
              </div>
              <div style="width: 70px;">
                <div style="font-size: 14px; font-weight: bold;">日志补写数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">0</div>
              </div>
              <div style="width: 70px;">
                <div style="font-size: 14px; font-weight: bold;">日志评论数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">0</div>
              </div>
              <div style="width: 42px;">
                <div style="font-size: 14px; font-weight: bold;">高评数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">6</div>
              </div>
              <div style="width: 140px;">
                <div style="font-size: 14px; font-weight: bold;">日志评分数</div>
                <div style="margin-top: 8px; display: flex; justify-content: space-around;">
                  <div style="display: flex; height: 33px;
                   text-align: center;">
                    <div style="padding-top: 8px; font-size: 12px;">直属：</div>
                    <div style="font-size: 24px; color: #0080CC;">8</div>
                  </div>
                  <div style="display:flex; height: 33px; text-align: center;">
                    <div style="padding-top: 8px; font-size: 12px;">人事：</div>
                    <div style="font-size: 24px; color: #0080CC;">4</div>
                  </div>
                </div>
              </div>
              <div style="width: 42px;">
                <div style="font-size: 14px; font-weight: bold;">低评数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">6</div>
              </div>
            </div>
            <div style="width: 32px; background-color: #0080CC; margin-top: 8px;
             padding-left: 4px; padding-right: 4px;">
              <span style="color: #FFFFFF; font-size: 14px; float: right;">生成表格</span>
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
  watch: {
    personEmpId: {
      handler() {
        console.log(this.$store.state.personEmpID, '取到被选中人的empid');
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    personEmpId() {
      return this.$store.state.personEmpID;
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  flex: auto;
  overflow: auto;
  width: 100%;
  padding-top: 16px;
}
</style>

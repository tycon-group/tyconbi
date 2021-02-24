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
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">
                  {{ workLogList.count_of_worklogs }}</div>
              </div>
              <div style="width: 70px;">
                <div style="font-size: 14px; font-weight: bold;">日志补写数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">
                  {{ workLogList.count_of_rewrote }}</div>
              </div>
              <div style="width: 70px;">
                <div style="font-size: 14px; font-weight: bold;">日志评论数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">
                  {{ workLogList.count_of_commented }}</div>
              </div>
              <div style="width: 42px;">
                <div style="font-size: 14px; font-weight: bold;">高评数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">
                  {{ workLogList.count_of_high_score }}</div>
              </div>
              <div style="width: 140px;">
                <div style="font-size: 14px; font-weight: bold;">日志评分数</div>
                <div style="margin-top: 8px; display: flex; justify-content: space-around;">
                  <div style="display: flex; height: 33px;
                   text-align: center;">
                    <div style="padding-top: 8px; font-size: 12px;">直属：</div>
                    <div style="font-size: 24px; color: #0080CC;">
                      {{ workLogList.count_of_scored }}</div>
                  </div>
                  <div style="display:flex; height: 33px; text-align: center;">
                    <div style="padding-top: 8px; font-size: 12px;">人事：</div>
                    <div style="font-size: 24px; color: #0080CC;">
                      {{ workLogList.count_of_scored2 }}</div>
                  </div>
                </div>
              </div>
              <div style="width: 42px;">
                <div style="font-size: 14px; font-weight: bold;">低评数</div>
                <div style="margin-top: 8px; font-size: 24px; color: #0080CC">
                  {{ workLogList.count_of_low_score }}</div>
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
import api from '../api';

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
  data() {
    return {
      workLogList: {},
      tempYear: '',
      timeList1: ['all', 'temp1st', 'temp2nd'],
      timeList2: ['1st', '2nd', '3rd', '4th'],
    };
  },
  watch: {
    personEmpId: {
      handler() {
        if (this.$store.state.personEmpID !== null && this.$store.state.fiscalYear !== null) {
          if (this.timeList1.includes(this.$store.state.selectTime)) {
            api.kpi.getWorklogSemiannualReportList(this.$store.state.personEmpID, {
              semiannual: this.$store.state.selectTime,
              fiscal_year: this.$store.state.fiscalYear,
            }).then((val) => {
              this.workLogList = val.data;
            }).catch((error) => {
              this.workLogList = {};
              console.log(error);
            });
          } else if (this.timeList2.includes(this.$store.state.selectTime)) {
            api.kpi.getWorklogQuarterReport(this.$store.state.personEmpID, {
              quarter: this.$store.state.selectTime,
              fiscal_year: this.$store.state.fiscalYear,
            }).then((val) => {
              this.workLogList = val.data;
            }).catch((error) => {
              this.workLogList = {};
              console.log(error);
            });
          } else {
            console.log(typeof this.$store.state.selectTime);
            // 全程使用财年
            if (this.$store.state.selectTime >= 4 && this.$store.state.selectTime <= 12) {
              this.tempYear = this.$store.state.fiscalYear;
            } else {
              this.tempYear = Number(this.$store.state.fiscalYear) + 1; // 此处需要强调为数字相加
            }
            api.kpi.getWorklogMonthReportList(this.$store.state.personEmpID, {
              month: this.$store.state.selectTime,
              year: this.tempYear,
            }).then((val) => {
              this.workLogList = val.data;
            }).catch((error) => {
              this.workLogList = {};
              console.log(error);
            });
          }
        } else {
          this.workLogList = {};
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    personEmpId() {
      return (this.$store.state.personEmpID,
      this.$store.state.fiscalYear,
      this.$store.state.selectTime);
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

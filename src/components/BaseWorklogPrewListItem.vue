<template>
  <div class="listItem" style="display: flex;
              margin: 0 0 1px;
              box-shadow: 10px 0 0.1rem #c2c2c2;" @click="showDrawer">
      <div style="padding: 12px 16px; text-align: justify">
        <span>
          <img src="../assets/1分.png" style="height: 12px; width: 26px; margin-right: 10px">
        </span>
        <span style="font-size: 14px;">
          {{ worklogitem.date }}
        </span>
        <span style="font-size: 14px; margin-left: 10px;">
          {{ this.dayPlan }}
        </span>
      </div>
  </div>
  <a-drawer
    title="日志详情"
    width="640"
    placement="right"
    :closable="false"
    :visible="visible"
    :after-visible-change="afterVisibleChange"
    @close="onClose"
  >
    <base-worklog-drawer :worklogitem="this.worklogitem.data"/>
  </a-drawer>
</template>

<script>
import BaseWorklogDrawer from './BaseWorklogDrawer.vue';

export default {
  name: 'base-worklog-prew-list-item',
  components: {
    BaseWorklogDrawer,
  },
  props: ['worklogitem'],
  data() {
    return {
      visible: false,
      dayPlan: '',
    };
  },
  mounted() {
    const dayPlans = this.worklogitem.data.daily_plan.done
      .concat(this.worklogitem.data.daily_plan.undone);
    if (dayPlans[0] === '') {
      this.dayPlan = '当天未写计划～';
    } else {
      // eslint-disable-next-line prefer-destructuring
      this.dayPlan = dayPlans[0];
    }
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style>
.listItem :hover{
  color: #1890ff;
}
</style>

<template>
  <div class="listItem" style="display: flex;
              margin: 0 0 1px;
              box-shadow: 10px 0 0.1rem #c2c2c2;" @click="showDrawer">
      <div style="padding: 12px 16px; text-align: justify">
        <span style="font-size: 14px; font-weight:bold">
          {{ worklogitem.date }}
        </span>
          <span :class="color">
          {{ this.dayPlan.substr(0, 40) }}...
        </span>
        <span v-for="value in scores" :key="value.id">
          <a-popover :title=value.author>
            <template #content>
              <p>{{ value.score }}</p>
              <p>{{ value.remarks }}</p>
              <a-button type="danger" @click="deleteScore(value)" v-show="deleteable(value)">
                删除
              </a-button>
            </template>
            <img :src="getImgUrl(value.score)"
              style="height: 12px; width: 26px; margin: 0 12px">
          </a-popover>
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
    <base-worklog-drawer :worklogitems="this.worklogitem" @closeDrawer="closeTheDrawer"/>
  </a-drawer>
</template>

<script>
import BaseWorklogDrawer from './BaseWorklogDrawer.vue';
import api from '../api';

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
      scores: [],
    };
  },
  created() {
    api.worklog.getMyScore(this.worklogitem.id).then((res) => {
      this.scores = res.data.data;
    });
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
    closeTheDrawer(vals) {
      this.visible = vals;
    },
    afterVisibleChange() {
      api.worklog.getMyScore(this.worklogitem.id)
        .then((res) => {
          this.scores = res.data.data;
        });
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    getImgUrl(value) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`../assets/${value}分.png`);
    },
    deleteScore(score) {
      api.worklog.deleteTheScore(score.id)
        .then(() => {
          api.worklog.getMyScore(this.worklogitem.id)
            .then((res) => {
              this.scores = res.data.data;
            });
        });
    },
    deleteable(score) {
      const d1 = Date.parse(score.comment_time);
      const d2 = Date.now();
      // eslint-disable-next-line radix
      const hour = parseInt(d2 - d1) / 1000 / 60;
      if (hour <= 24 && score.author === this.$store.state.name) {
        return true;
      }
      return false;
    },
  },
  computed: {
    color() {
      if (this.worklogitem.is_commented) {
        return 'color';
      }
      return 'normal';
    },
  },
};
</script>

<style>
.listItem :hover{
  color: #0080CC;
}
.color {
  font-size: 14px;
  margin-left: 10px;
  font-weight:bold;
}
.normal {
  font-size: 14px;
  margin-left: 10px;
}
</style>

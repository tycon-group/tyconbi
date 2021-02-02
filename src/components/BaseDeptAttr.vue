<template>
  <div style="width: 100%; padding-left: 8px; padding-bottom: 8px;
   border-radius:4px; box-shadow: 0 0 10px #F3F3F3;">
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px', width: '100%',}"
      :tabBarStyle="{textAlign: 'left'}"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane key="1" tab="年龄分布">
        <a>{{ this.data }}</a>
        <base-age-plot />
      </a-tab-pane>
      <a-tab-pane key="2" tab="学历分布">
        <base-diploma-plot />
      </a-tab-pane>
      <a-tab-pane key="3" tab="性别分布">
        <base-gender-plot />
      </a-tab-pane>
      <a-tab-pane key="4" tab="在职分布">
        <base-work-year-plot/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import BaseAgePlot from './BaseAgePlot.vue';
import BaseDiplomaPlot from './BaseDiplomaPlot.vue';
import BaseGenderPlot from './BaseGenderPlot.vue';
import BaseWorkYearPlot from './BaseWorkYearPlot.vue';
import api from '../api';

export default {
  name: 'base-dept-attr',
  components: {
    BaseWorkYearPlot,
    BaseGenderPlot,
    BaseDiplomaPlot,
    BaseAgePlot,
  },
  watch: {
    orgPortrait: {
      handler() {
        api.hr.getOrgPortrait(this.$store.state.pickOrgDataID).then((value) => {
          this.data = value.data;
        });
      },
    },
  },
  computed: {
    orgPortrait() {
      return this.$store.state.pickOrgDataID;
    },
  },
  data() {
    return {
      mode: 'top',
      data: {},
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>

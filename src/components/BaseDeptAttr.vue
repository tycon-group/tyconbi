<template>
  <div style="width: 100%;">
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px', width: '100%',}"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane key="1" tab="年龄分布">
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

export default {
  name: 'base-dept-attr',
  components: {
    BaseWorkYearPlot,
    BaseGenderPlot,
    BaseDiplomaPlot,
    BaseAgePlot,
  },
  data() {
    return {
      mode: 'top',
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },

};
</script>

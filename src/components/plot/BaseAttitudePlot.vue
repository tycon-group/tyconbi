<template>
  <div id="attitude" style="height: 212px;"></div>
</template>

<script>
import { DualAxes } from '@antv/g2plot';

export default {
  name: 'base-attitude-plot',
  mounted() {
    const uvBillData = [
      { time: '3月', value: 3, type: '迟到' },
      { time: '4月', value: 9, type: '迟到' },
      { time: '5月', value: 0, type: '迟到' },
      { time: '6月', value: 4, type: '迟到' },
      { time: '7月', value: 7, type: '迟到' },
      { time: '8月', value: 7, type: '迟到' },
      { time: '9月', value: 3, type: '迟到' },
      { time: '10月', value: 0, type: '迟到' },
      { time: '11月', value: 3, type: '迟到' },
      { time: '12月', value: 4, type: '迟到' },
      { time: '1月', value: 7, type: '迟到' },
      { time: '2月', value: 7, type: '迟到' },

      { time: '3月', value: 7, type: '早退' },
      { time: '4月', value: 2, type: '早退' },
      { time: '5月', value: 0, type: '早退' },
      { time: '6月', value: 0, type: '早退' },
      { time: '7月', value: 2, type: '早退' },
      { time: '8月', value: 2, type: '早退' },
      { time: '9月', value: 0, type: '早退' },
      { time: '10月', value: 2, type: '早退' },
      { time: '11月', value: 0, type: '早退' },
      { time: '12月', value: 2, type: '早退' },
      { time: '1月', value: 2, type: '早退' },
      { time: '2月', value: 2, type: '早退' },
    ];

    const transformData = [
      { time: '3月', count: 99, name: '考勤率' },
      { time: '4月', count: 99, name: '考勤率' },
      { time: '5月', count: 100, name: '考勤率' },
      { time: '6月', count: 99, name: '考勤率' },
      { time: '7月', count: 99, name: '考勤率' },
      { time: '8月', count: 98.5, name: '考勤率' },
      { time: '9月', count: 97.9, name: '考勤率' },
      { time: '10月', count: 99.8, name: '考勤率' },
      { time: '11月', count: 99, name: '考勤率' },
      { time: '12月', count: 97, name: '考勤率' },
      { time: '1月', count: 98, name: '考勤率' },
      { time: '2月', count: 97, name: '考勤率' },
    ];

    const dualAxes = new DualAxes('attitude', {
      data: [uvBillData, transformData],
      xField: 'time',
      yField: ['value', 'count'],
      geometryOptions: [
        {
          geometry: 'column',
          isGroup: true,
          seriesField: 'type',
        },
        {
          geometry: 'line',
          seriesField: 'name',
          lineStyle: {
            lineWidth: 2,
          },
        },
      ],
    });
    dualAxes.render();
  },
};
</script>

<style scoped>

</style>

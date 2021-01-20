<template>
  <div id="worklog" style="height: 168px; "></div>
</template>

<script>
import { Line } from '@antv/g2plot';

export default {
  name: 'base-worklog-plot',
  mounted() {
    const data = [
      {
        name: 'AA',
        month: '03',
        count: 12,
      },
      {
        name: 'AA',
        month: '04',
        count: 10,
      },
      {
        name: 'AA',
        month: '05',
        count: 1,
      },
      {
        name: 'BB',
        month: '03',
        count: 20,
      },
      {
        name: 'BB',
        month: '04',
        count: 33,
      },
      {
        name: 'BB',
        month: '05',
        count: 3,
      },
      {
        name: 'CC',
        month: '03',
        count: 9,
      },
      {
        name: 'CC',
        month: '04',
        count: 16,
      },
      {
        name: 'CC',
        month: '05',
        count: 66,
      },
    ];

    const linePlot = new Line('worklog', {
      data,
      xField: 'month',
      yField: 'count',
      seriesField: 'name',
      yAxis: {
        label: {},
      },
      legend: {
        position: 'top',
      },
      smooth: true,
      animation: {
        appear: {
          animation: 'path-in',
          duration: 5000,
        },
      },
    });
    linePlot.render();
  },
};
</script>

<style scoped>

</style>

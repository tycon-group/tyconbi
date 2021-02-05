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
        name: '日志数',
        month: '3月',
        count: 0,
      },
      {
        name: '高分数',
        month: '3月',
        count: 0,
      },
      {
        name: '低分数',
        month: '3月',
        count: 0,
      },
      {
        name: '日志数',
        month: '4月',
        count: 0,
      },
      {
        name: '高分数',
        month: '4月',
        count: 0,
      },
      {
        name: '低分数',
        month: '4月',
        count: 0,
      },
      {
        name: '日志数',
        month: '5月',
        count: 0,
      },
      {
        name: '高分数',
        month: '5月',
        count: 0,
      },
      {
        name: '低分数',
        month: '5月',
        count: 0,
      },
      {
        name: '日志数',
        month: '6月',
        count: 5,
      },
      {
        name: '高分数',
        month: '6月',
        count: 0,
      },
      {
        name: '低分数',
        month: '6月',
        count: 1,
      },
      {
        name: '日志数',
        month: '7月',
        count: 19,
      },
      {
        name: '高分数',
        month: '7月',
        count: 0,
      },
      {
        name: '低分数',
        month: '7月',
        count: 0,
      },
      {
        name: '日志数',
        month: '8月',
        count: 21,
      },
      {
        name: '高分数',
        month: '8月',
        count: 1,
      },
      {
        name: '低分数',
        month: '8月',
        count: 0,
      },
      {
        name: '日志数',
        month: '9月',
        count: 22,
      },
      {
        name: '高分数',
        month: '9月',
        count: 5,
      },
      {
        name: '低分数',
        month: '9月',
        count: 0,
      },
      {
        name: '日志数',
        month: '10月',
        count: 18,
      },
      {
        name: '高分数',
        month: '10月',
        count: 0,
      },
      {
        name: '低分数',
        month: '10月',
        count: 0,
      },
      {
        name: '日志数',
        month: '11月',
        count: 15,
      },
      {
        name: '高分数',
        month: '11月',
        count: 0,
      },
      {
        name: '低分数',
        month: '11月',
        count: 0,
      },
      {
        name: '日志数',
        month: '12月',
        count: 19,
      },
      {
        name: '高分数',
        month: '12月',
        count: 1,
      },
      {
        name: '低分数',
        month: '12月',
        count: 1,
      },
      {
        name: '日志数',
        month: '1月',
        count: 20,
      },
      {
        name: '高分数',
        month: '1月',
        count: 3,
      },
      {
        name: '低分数',
        month: '1月',
        count: 0,
      },
      {
        name: '日志数',
        month: '2月',
        count: 0,
      },
      {
        name: '高分数',
        month: '2月',
        count: 0,
      },
      {
        name: '低分数',
        month: '2月',
        count: 0,
      },
    ];

    const linePlot = new Line('worklog', {
      data,
      xField: 'month',
      yField: 'count',
      seriesField: 'name',
      color: ['orange', 'green', 'red'],
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

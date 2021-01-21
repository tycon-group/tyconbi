<template>
  <div id="potential" style="height: 212px;"></div>
</template>

<script>
import { Column } from '@antv/g2plot';

export default {
  name: 'base-potential-plot',
  mounted() {
    const data = [
      { type: '一般', value: 55, name: '语文' },
      { type: '精通', value: 99, name: '语文2' },
      { type: '良好', value: 60, name: '语文3' },
      { type: '良好', value: 78, name: '语文4' },
      { type: '精通', value: 90, name: '语文5' },
      { type: '精通', value: 89, name: '语文6' },
      { type: '精通', value: 87, name: '语文7' },
      { type: '良好', value: 66, name: '语文8' },
    ];
    const normal = '#8F9399';
    const good = '#52C41B';
    const great = '#FD4C55';
    const columnPlot = new Column('potential', {
      data,
      xField: 'name',
      yField: 'value',
      seriesField: 'type',
      color: ({ type }) => {
        if (type === '精通') {
          return great;
        } if (type === '良好') {
          return good;
        }
        return normal;
      },
      label: {
        content: (originData) => {
          const val = originData.value;
          return (val).toFixed(0);
        },
        offset: 1,
      },
      legend: false,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
    });
    columnPlot.render();
  },
};
</script>

<style scoped>

</style>

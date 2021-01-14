<template>
  <div id="container" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Column } from '@antv/g2plot';

export default {
  name: 'base-age-plot',
  mounted() {
    const data = [
      {
        type: '小于25岁',
        sales: 17,
      },
      {
        type: '25～34岁',
        sales: 48,
      },
      {
        type: '35～44岁',
        sales: 21,
      },
      {
        type: '45～55岁',
        sales: 17,
      },
      {
        type: '55岁以上',
        sales: 10,
      },
    ];
    const columnPlot = new Column('container', {
      data,
      xField: 'type',
      yField: 'sales',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: '类别',
        },
        sales: {
          alias: '销售额',
        },
      },
      minColumnWidth: 50,
      maxColumnWidth: 50,
    });
    columnPlot.render();
  },
};
</script>

<style scoped>

</style>

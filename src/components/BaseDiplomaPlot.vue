<template>
  <div id="container" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Column } from '@antv/g2plot';

export default {
  name: 'base-diploma-plot',
  mounted() {
    const data = [
      {
        type: '高中及以下',
        sales: 8,
      },
      {
        type: '大专',
        sales: 21,
      },
      {
        type: '本科',
        sales: 41,
      },
      {
        type: '研究生及以上',
        sales: 5,
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
          alias: '数量',
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

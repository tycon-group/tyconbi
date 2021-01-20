<template>
  <div id="totalRadar" style="height: 175px; width: 212px"></div>
</template>

<script>
import { Radar } from '@antv/g2plot';

export default {
  name: 'base-total-plot',
  mounted() {
    // 总揽雷达图
    const data = [
      { name: '工作能力', star: 5371 },
      { name: '工作态度', star: 7380 },
      { name: '发展潜力', star: 7414 },
      { name: '突出贡献', star: 6160 },
      { name: '遵纪守法', star: 2140 },
    ];
    const radarPlot = new Radar('totalRadar', {
      data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 25, 0, 25],
      meta: {
        star: {
          alias: 'star 数量',
          min: 0,
          nice: true,
          formatter: (v) => Number(v).toFixed(2),
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    });
    radarPlot.render();
    // 工作能力折线图
  },
};
</script>

<style scoped>

</style>

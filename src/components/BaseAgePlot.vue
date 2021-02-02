<template>
  <div id="ageColumn" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Column } from '@antv/g2plot';

export default {
  name: 'base-age-plot',
  props: ['deptAge'],
  watch: {
    orgAge() {
      console.log(this.deptAge, 'dadadasdadada');
      const data = this.deptAge;
      const columnPlot = new Column('ageColumn', {
        data,
        xField: 'name',
        yField: 'value',
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
          name: {
            alias: '类别',
          },
          value: {
            alias: '数量',
          },
        },
        minColumnWidth: 50,
        maxColumnWidth: 50,
      });
      columnPlot.render();
      setInterval(() => {
        columnPlot.changeData(this.deptAge);
      }, 200);
    },
  },
  computed: {
    orgAge() {
      return this.deptAge;
    },
  },
};
</script>

<style scoped>

</style>

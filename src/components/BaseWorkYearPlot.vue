<template>
  <div id="workYearColumn" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Column } from '@antv/g2plot';

export default {
  name: 'base-work-year-plot',
  props: ['deptWorkingYear'],
  watch: {
    orgWorkingYear() {
      const data = this.deptWorkingYear;
      const columnPlot = new Column('workYearColumn', {
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
        columnPlot.changeData(this.deptWorkingYear);
      }, 200);
    },
  },
  computed: {
    orgWorkingYear() {
      return this.deptWorkingYear;
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <div id="container" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Column } from '@antv/g2plot';

export default {
  name: 'base-diploma-plot',
  props: ['deptEducation'],
  data() {
    return {
      tem: null,
    };
  },
  watch: {
    orgEducation() {
      setInterval(() => {
        this.tem.changeData(this.deptEducation);
      }, 200);
    },
  },
  computed: {
    orgEducation() {
      return this.deptEducation;
    },
  },
  mounted() {
    const data = this.deptEducation;
    const columnPlot = new Column('container', {
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
    this.tem = columnPlot;
  },
};
</script>

<style scoped>

</style>

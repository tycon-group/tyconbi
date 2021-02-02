<template>
  <div id="genderPie" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Pie } from '@antv/g2plot';

export default {
  name: 'base-gender-plot',
  props: ['deptGender'],
  watch: {
    orgGender() {
      const data = this.deptGender;
      const piePlot = new Pie('genderPie', {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'name',
        radius: 0.9,
        label: {
          type: 'spider',
          labelHeight: 28,
          content: '{name}\n{percentage}',
        },
        interactions: [{ name: 'element-selected' }, { name: 'element-active' }],
      });
      piePlot.render();
      setInterval(() => {
        piePlot.changeData(this.deptGender);
      }, 1000);
    },
  },
  computed: {
    orgGender() {
      return this.deptGender;
    },
  },
};
</script>

<style scoped>

</style>

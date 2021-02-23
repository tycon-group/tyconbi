<template>
  <div id="genderPie" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Pie } from '@antv/g2plot';

export default {
  name: 'base-gender-plot',
  props: ['deptGender'],
  data() {
    return {
      tem: null,
    };
  },
  watch: {
    orgGender() {
      setInterval(() => {
        this.tem.changeData(this.deptGender);
      }, 2000);
    },
  },
  computed: {
    orgGender() {
      return this.deptGender;
    },
  },
  mounted() {
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
    this.tem = piePlot;
  },
};
</script>

<style scoped>

</style>

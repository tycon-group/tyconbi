<template>
  <div id="genderPie" style="height: 136px; width: 100%;"></div>
</template>

<script>
import { Pie } from '@antv/g2plot';

export default {
  name: 'base-gender-plot',
  mounted() {
    const data = [
      { type: '男', value: 39 },
      { type: '女', value: 15 },
    ];

    const piePlot = new Pie('genderPie', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        type: 'spider',
        labelHeight: 28,
        content: '{name}\n{percentage}',
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    });

    piePlot.render();
  },
};
</script>

<style scoped>

</style>

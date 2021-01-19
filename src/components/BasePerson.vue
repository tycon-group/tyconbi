<template>
  <base-person-attr />
  <div class="footer">
    <!--        Toolbar和列表-->
    <base-toolbar />
    <div>
      <a-tabs size="small"
              :tabBarStyle="{textAlign: 'left'}">
        <a-tab-pane key="1" tab="总览" style="padding-left: 16px;">
          <div style="margin-bottom: 20px; text-align: start;
           font-size: 16px; font-weight: bold;">综合分析</div>
          <div id="totalRadar" style="height: 175px; width: 212px"></div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="工作能力">
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="工作态度">
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="4" tab="发展潜力">
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="5" tab="突出贡献">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import { Radar } from '@antv/g2plot';

import BasePersonAttr from './BasePersonAttr.vue';
import BaseToolbar from './BaseToolbar.vue';

export default {
  name: 'base-person',
  components: {
    BaseToolbar,
    BasePersonAttr,
  },
  mounted() {
    const data = [
      { name: '工作能力', star: 5371 },
      { name: '工作态度', star: 7380 },
      { name: '发展潜力', star: 7414 },
      { name: '遵纪守法', star: 2140 },
      { name: '突出贡献', star: 6160 },
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
  },
};
</script>

<style scoped>
.footer {
  flex: auto;
  width: 100%;
  padding-top: 16px;
  border-radius:4px;
  box-shadow: 0 0 10px #F3F3F3;
}
</style>

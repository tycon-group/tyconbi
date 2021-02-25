<template>
  <div id="worklog" style="height: 168px;"></div>
</template>

<script>
import { Line } from '@antv/g2plot';
import api from '../../api';

export default {
  name: 'base-worklog-plot',
  data() {
    return {
      plotItem: [
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
        {
          name: '',
          month: '',
          count: 0,
        },
      ],
      workLogPlot: [],
      tem: null,
    };
  },
  watch: {
    personEmpId: {
      handler() {
        if (this.$store.state.personEmpID !== null && this.$store.state.fiscalYear !== null) {
          api.kpi.getWorklogTrendPlot(this.$store.state.personEmpID, {
            fiscal_year: this.$store.state.fiscalYear,
          }).then((val) => {
            //  日志总数
            const workLogPlot1 = val.data.data[0];
            //  日志高分
            const workLogPlot2 = val.data.data[5];
            //  日志低分
            const workLogPlot3 = val.data.data[6];
            const workLogPlot = this.changeList(workLogPlot1, workLogPlot2, workLogPlot3);
            this.workLogPlot = workLogPlot;
            // 这里更新渲染图表
            setInterval(() => {
              this.tem.changeData(this.workLogPlot);
            }, 200);
          }).catch((error) => {
            this.workLogPlot = [];
            console.log(error);
          });
        } else {
          this.workLogPlot = [];
          setInterval(() => {
            this.tem.changeData(this.workLogPlot);
          }, 200);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    personEmpId() {
      return (this.$store.state.personEmpID, this.$store.state.fiscalYear);
    },
  },
  mounted() {
    const data = this.workLogPlot;
    const linePlot = new Line('worklog', {
      data,
      xField: 'month',
      yField: 'count',
      seriesField: 'name',
      color: ['orange', 'green', 'red'],
      yAxis: {
        label: {},
      },
      legend: {
        position: 'top',
      },
      smooth: true,
      animation: {
        appear: {
          animation: 'path-in',
          duration: 5000,
        },
      },
    });
    linePlot.render();
    // 将对象重新指定
    this.tem = linePlot;
  },
  methods: {
    // 将折线所需要的数组填值
    changeList(arr1, arr2, arr3) {
      // eslint-disable-next-line no-plusplus
      for (let a = 0; a <= 11; a++) {
        this.plotItem[a].name = arr1.name;
        this.plotItem[a].month = arr1.info[a];
        this.plotItem[a].count = arr1.data[a];
      }
      // eslint-disable-next-line no-plusplus
      for (let a = 0; a <= 11; a++) {
        this.plotItem[a + 12].name = arr2.name;
        this.plotItem[a + 12].month = arr2.info[a];
        this.plotItem[a + 12].count = arr2.data[a];
      }
      // eslint-disable-next-line no-plusplus
      for (let a = 0; a <= 11; a++) {
        this.plotItem[a + 24].name = arr3.name;
        this.plotItem[a + 24].month = arr3.info[a];
        this.plotItem[a + 24].count = arr3.data[a];
      }
      return this.plotItem;
    },
  },
};
</script>

<style scoped>

</style>

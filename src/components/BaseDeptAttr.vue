<template>
  <div style="width: 100%; padding-left: 8px; padding-bottom: 8px;
   border-radius:4px; box-shadow: 0 0 10px #F3F3F3;">
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px', width: '100%',}"
      :tabBarStyle="{textAlign: 'left', borderBottom: '0'}"
      @prevClick="callback"
      @nextClick="callback"
      @tabClick="tabClicks"
    >
      <a-tab-pane key="1" tab="年龄分布">
        <base-age-plot :deptAge="this.data.age"/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="学历分布">
        <base-diploma-plot :deptEducation="this.data.education"/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="性别分布">
        <base-gender-plot :deptGender="this.data.gender"/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="在职分布">
        <base-work-year-plot :deptWorkingYear="this.data.workingyear"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import BaseAgePlot from './BaseAgePlot.vue';
import BaseDiplomaPlot from './BaseDiplomaPlot.vue';
import BaseGenderPlot from './BaseGenderPlot.vue';
import BaseWorkYearPlot from './BaseWorkYearPlot.vue';
import api from '../api';

export default {
  name: 'base-dept-attr',
  components: {
    BaseWorkYearPlot,
    BaseGenderPlot,
    BaseDiplomaPlot,
    BaseAgePlot,
  },
  watch: {
    orgPortrait: {
      handler() {
        if (this.$store.state.pickOrgDataID !== '') {
          api.hr.getOrgPortrait(this.$store.state.pickOrgDataID).then((value) => {
            this.data = value.data;
          });
        } else {
          this.data = {
            countEmp: {
              name: '总人数',
              value: 0,
            },
            empList: {
              name: '人员列表',
              value: [],
            },
            gender: [
              {
                name: '男',
                value: 0,
              },
              {
                name: '女',
                value: 0,
              },
            ],
            education: [
              {
                name: '初中及以下',
                value: 0,
              },
              {
                name: '高中',
                value: 0,
              },
              {
                name: '本科（专科)',
                value: 0,
              },
              {
                name: '硕士及以上',
                value: 0,
              },
            ],
            age: [
              {
                name: '大于55岁',
                value: 0,
              },
              {
                name: '45~55岁',
                value: 0,
              },
              {
                name: '35~45岁',
                value: 0,
              },
              {
                name: '25~35岁',
                value: 0,
              },
              {
                name: '小于25岁',
                value: 0,
              },
            ],
            workingyear: [
              {
                name: '超过15年',
                value: 0,
              },
              {
                name: '10~15年',
                value: 0,
              },
              {
                name: '5~10年',
                value: 0,
              },
              {
                name: '1~5年',
                value: 0,
              },
              {
                name: '不满1年',
                value: 0,
              },
            ],
          };
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    orgPortrait() {
      return this.$store.state.pickOrgDataID;
    },
  },
  data() {
    return {
      mode: 'top',
      data: {},
    };
  },
  methods: {
    tabClicks() {
      if (this.$store.state.pickOrgDataID !== '') {
        api.hr.getOrgPortrait(this.$store.state.pickOrgDataID).then((value) => {
          this.data = value.data;
        });
      } else {
        this.data = {
          countEmp: {
            name: '总人数',
            value: 0,
          },
          empList: {
            name: '人员列表',
            value: [],
          },
          gender: [
            {
              name: '男',
              value: 0,
            },
            {
              name: '女',
              value: 0,
            },
          ],
          education: [
            {
              name: '初中及以下',
              value: 0,
            },
            {
              name: '高中',
              value: 0,
            },
            {
              name: '本科（专科)',
              value: 0,
            },
            {
              name: '硕士及以上',
              value: 0,
            },
          ],
          age: [
            {
              name: '大于55岁',
              value: 0,
            },
            {
              name: '45~55岁',
              value: 0,
            },
            {
              name: '35~45岁',
              value: 0,
            },
            {
              name: '25~35岁',
              value: 0,
            },
            {
              name: '小于25岁',
              value: 0,
            },
          ],
          workingyear: [
            {
              name: '超过15年',
              value: 0,
            },
            {
              name: '10~15年',
              value: 0,
            },
            {
              name: '5~10年',
              value: 0,
            },
            {
              name: '1~5年',
              value: 0,
            },
            {
              name: '不满1年',
              value: 0,
            },
          ],
        };
      }
    },
    callback(val) {
      console.log(val);
    },
  },
};
</script>

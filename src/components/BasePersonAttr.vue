<template>
  <div style="width: 100%; padding-left: 8px; padding-bottom: 8px;
   border-radius:4px; box-shadow: 0 0 10px #F3F3F3;">
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px', width: '100%',}"
      :tabBarStyle="{textAlign: 'left', borderBottom: '0'}"
      @prevClick="callback"
      @nextClick="callback"
      @tabClick="tabChange"
    >
      <a-tab-pane
        v-for="personItem in personData" :key="personItem" :tab="personItem">
        <div style="display: flex; padding-left: 16px;">
          <div style="width: 77px; height: 112px;">
            <div style="height: 64px; width: 64px; margin: 0 auto;">
              <img :src="this.personItems.avatar" style="border-radius:50%;"
                   height="64" width="64" alt="暂无头像" /></div>
            <div style="font-size: 14px; text-align: center; color: #303133">
              {{ this.personItems.enName }}</div>
            <div style="font-size: 16px; color: #8F9399; text-align: center">
              {{ personItems.name }}</div>
          </div>
          <div
            style="width: 142px; font-size: 14px; margin-left: 24px;">
            <div style="text-align: start; color: #303133">
              性别: <span style="color: #8F9399">{{ personItems.gender }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              出生年月: <span style="color: #8F9399">{{ personItems.dateOfBirth }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              学历: <span style="color: #8F9399">{{ personItems.education }}</span></div>
          </div>
          <div style="width: 262px; font-size: 14px; margin-left: 16px;">
            <div style="text-align: start; color: #303133">
              职位: <span style="color: #8F9399">{{ personItems.job }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              在职工龄: <span style="color: #8F9399">xxx</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              连续工龄: <span style="color: #8F9399">xxx</span></div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import api from '../api';

export default {
  name: 'base-person-attr',
  components: {
  },
  data() {
    return {
      mode: 'top',
      personData: [],
      personItems: {},
    };
  },
  watch: {
    orgPortrait: {
      handler() {
        if (this.$store.state.pickOrgDataID !== '') {
          api.hr.getOrgPortrait(this.$store.state.pickOrgDataID).then((value) => {
            if (value.data.empList.value.length !== 0) {
              this.personData = value.data.empList.value;
              api.hr.getAllEmployees({
                name: this.personData[0],
              }).then((v) => {
                api.hr.getTheEmployee(v.data.results[0].empID).then((val) => {
                  this.personItems = val.data;
                  this.doneSomeThing();
                  console.log(val.data);
                }).catch((error) => {
                  console.log(error);
                });
              }).catch((error) => {
                console.log(error);
              });
            } else {
              this.personData = ['暂无人员'];
              // 这里让单个都是空值；
              this.personItems = {};
            }
          });
        } else {
          this.personData = ['暂无人员'];
          // 这里让单个都是空值；
          this.personItems = {};
          console.log('缺少组织号。');
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
  methods: {
    tabChange(activeKey) {
      api.hr.getAllEmployees({
        name: activeKey,
      }).then((value) => {
        api.hr.getTheEmployee(value.data.results[0].empID).then((val) => {
          this.personItems = val.data;
          this.doneSomeThing();
          console.log(val.data);
        }).catch((error) => {
          console.log(error);
        });
      }).catch((error) => {
        console.log(error);
      });
    },
    doneSomeThing() {
      console.log('这里需要操作数据');
    },
    callback(val) {
      console.log(val);
    },
  },

};
</script>

<template>
  <div style="width: 100%; padding-left: 8px; padding-bottom: 8px;
   border-radius:4px; box-shadow: 0 0 10px #F3F3F3;">
    <a-tabs
      :tab-position="mode"
      :activeKey="this.$store.state.personEmpID"
      :style="{ height: '200px', width: '100%',}"
      :tabBarStyle="{textAlign: 'left', borderBottom: '0'}"
      @prevClick="callback"
      @nextClick="callback"
      @change="tabChange"
    >
      <a-tab-pane
        v-for="item in personData" :key="item[0]" :tab="item[1]">
        <div style="display: flex; padding-left: 16px;">
          <div style="width: 77px; height: 112px;">
            <div style="height: 64px; width: 64px; margin: 0 auto;">
              <a-popover placement="top">
                <template #content>
                  工号为：<span style="font-weight: bold;">{{ this.empID }}</span>
                </template>
                <a-avatar :size="64" :src="this.personItems.avatar">
                  <template #icon>
                    <UserOutlined />
                  </template>
                </a-avatar>
              </a-popover>
            </div>
            <div style="font-size: 14px; text-align: center; color: #303133">
              {{ this.personItems.enName }}</div>
            <div style="font-size: 16px; color: #8F9399; text-align: center">
              {{ this.personItems.name }}</div>
          </div>
          <div
            style="width: 142px; font-size: 14px; margin-left: 24px;">
            <div style="text-align: start; color: #303133">
              性别: <span style="color: #8F9399">{{ this.gender }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              出生年月: <span style="color: #8F9399">{{ this.dateOfBirth }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              学历: <span style="color: #8F9399">{{ this.education }}</span></div>
          </div>
          <div style="width: 262px; font-size: 14px; margin-left: 16px;">
            <div style="text-align: start; color: #303133">
              职位: <span style="color: #8F9399">{{ this.job }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              在职工龄: <span style="color: #8F9399">{{ this.yearInCompany }}</span></div>
            <div style="margin-top: 16px; text-align: start; color: #303133">
              连续工龄: <span style="color: #8F9399">{{ this.yearForWork }}</span></div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';
import api from '../api';

export default {
  name: 'base-person-attr',
  components: {
    UserOutlined,
  },
  data() {
    return {
      mode: 'top',
      personData: [],
      personItems: {},
      empID: null,
      gender: null,
      dateOfBirth: null,
      education: null,
      job: null,
      yearForWork: null,
      yearInCompany: null,
    };
  },
  watch: {
    orgPortrait: {
      handler() {
        if (this.$store.state.pickOrgDataID !== null) {
          api.hr.getOrgPortrait(this.$store.state.pickOrgDataID).then((value) => {
            if (value.data.empList.value.length !== 0) {
              this.personData = value.data.empList.value;
              //  首先这里存第一个人的empid，
              this.$store.commit('updatePersonEmpID', this.personData[0][0]);
              // 这里是负责控制组织架构初始值和改变的方法，默认显示第一个人的信息
              api.hr.getTheEmployee(this.personData[0][0]).then((val) => {
                this.personItems = val.data;
                this.doneSomeThing();
              }).catch((error) => {
                this.personData = ['暂无人员'];
                console.log(error);
              });
            } else {
              this.personData = ['暂无人员'];
              // 这里（组织架构下没人）让单个都是空值；
              this.$store.commit('updatePersonEmpID', null);
              this.personItems = {};
              this.doneSomeThing();
              console.log('缺少人员。');
            }
          });
        } else {
          this.personData = ['暂无人员'];
          // 这里(取消选中组织架构)让单个都是空值；
          this.$store.commit('updatePersonEmpID', null);
          this.personItems = {};
          this.doneSomeThing();
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
    // 这里是通过内置方法获取tab的key，改变个人信息
    // 其次这里再次存被查询者的empid
    tabChange(activeKey) {
      api.hr.getTheEmployee(activeKey).then((val) => {
        this.$store.commit('updatePersonEmpID', activeKey);
        this.personItems = val.data;
        this.doneSomeThing();
      }).catch((error) => {
        console.log(error);
      });
    },
    doneSomeThing() {
      // id号
      if (this.personItems.empID !== null && this.personItems.empID !== undefined) {
        this.empID = this.personItems.empID;
      } else {
        this.empID = '未知';
      }
      // 头像
      // 性别
      if (this.personItems.gender === 'M') {
        this.gender = '男';
      } else if (this.personItems.gender === 'F') {
        this.gender = '女';
      } else {
        this.gender = '未知';
      }
      // 生日
      if (this.personItems.dateOfBirth !== null && this.personItems.dateOfBirth !== undefined) {
        this.dateOfBirth = this.personItems.dateOfBirth;
      } else {
        this.dateOfBirth = '未知信息';
      }
      // 学历
      if (this.personItems.education !== null && this.personItems.education !== undefined) {
        this.education = this.personItems.education;
      } else {
        this.education = '未知信息';
      }
      // 职位
      if (this.personItems.job !== null && this.personItems.dateOfBirth !== undefined) {
        this.job = this.personItems.job;
      } else {
        this.job = '未知信息';
      }
      // 获取当天日期
      const date1 = new Date();
      // 连续工作时间
      // 获取开始工作日期
      const { dateOfStartWork } = this.personItems;
      if (dateOfStartWork !== null && this.personItems.dateOfBirth !== undefined) {
        const date2 = new Date(dateOfStartWork);
        // eslint-disable-next-line radix,no-mixed-operators,max-len
        const monthCount = parseInt(date1.getFullYear() - date2.getFullYear()) * 12 - date2.getMonth() + date1.getMonth();
        const resM = monthCount % 12;
        // eslint-disable-next-line radix
        const resY = parseInt(monthCount / 12);
        if (resY === 0 && resM === 0) {
          this.yearForWork = '不足一个月';
        } else {
          this.yearForWork = `${resY}年${resM}月`;
        }
      } else {
        this.yearForWork = '无开始工作信息';
      }
      // 在职工作年限
      const { dateOfHire } = this.personItems;
      if (dateOfHire !== null && this.personItems.dateOfBirth !== undefined) {
        const date2 = new Date(dateOfHire);
        // eslint-disable-next-line radix,no-mixed-operators,max-len
        const monthCount = parseInt(date1.getFullYear() - date2.getFullYear()) * 12 - date2.getMonth() + date1.getMonth();
        const resM = monthCount % 12;
        // eslint-disable-next-line radix
        const resY = parseInt(monthCount / 12);
        if (resY === 0 && resM === 0) {
          this.yearInCompany = '不足一个月';
        } else {
          this.yearInCompany = `${resY}年${resM}月`;
        }
      } else {
        this.yearInCompany = '无入职时间信息';
      }
    },
    callback(val) {
      console.log(val);
    },
  },

};
</script>

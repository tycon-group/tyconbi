<template>
  <div style="margin-top: 42px; min-width: 228px;">
    <a-list
      item-layout="horizontal">
      <div v-for="item in empWorklog" :key="item.name">
        <base-worklog-user-list-item :empworklogitem=item />
      </div>
    </a-list>
  </div>
</template>

<script>
import BaseWorklogUserListItem from './BaseWorklogUserListItem.vue';
import api from '../api/index';

export default {
  name: 'base-worklog-user-list',
  props: ['deptKey'],
  data() {
    return {
      loading: true,
      type: '',
      empWorklog: [],
      errorMeg: '',
    };
  },
  components: {
    BaseWorklogUserListItem,
  },
  created() {
    //  判断组织
    if (this.deptKey === 1) {
      this.type = 'direct';
    } else {
      this.type = 'cross';
    }
    this.$store.commit('updateType', this.type);
    // 获取人员表
    if (this.$store.state.empID !== null) {
      api.worklog.getMyEmpWorklogsInfo(this.$store.state.empID, {
        type: this.type,
      }).then((res) => {
        this.empWorklog = res.data.data;
        this.loading = false;
      }).catch((error) => {
        console.log(error);
      });
    } else {
      this.loading = false;
      this.errorMeg = '请登陆后使用';
    }
  },
};
</script>

<style scoped>

</style>

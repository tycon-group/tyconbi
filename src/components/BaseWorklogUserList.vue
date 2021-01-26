<template>
  <div style="margin-top: 42px; min-width: 228px;">
    <a-list item-layout="horizontal">
      <div v-for="item in userWorklog" :key="item.name">
        <base-worklog-user-list-item :userworklogitem=item />
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
      loadingMore: false,
      showLoadingMore: true,
      type: '',
      userWorklog: [],
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
    // 获取人员表
    if (this.$store.state.empID !== '') {
      api.worklog.getMyEmpWorklogsInfo(this.$store.state.empID, {
        type: this.type,
      }).then((res) => {
        this.userWorklog = res.data.data;
      }).catch((error) => {
        console.log(error);
      });
    }
  },
};
</script>

<style scoped>

</style>

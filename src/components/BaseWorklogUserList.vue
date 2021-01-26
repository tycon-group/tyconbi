<template>
  <div class="user-list">
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
    setTimeout(() => {
      // 获取使用者id, 注意userId和userID，前者才是具体值
      const userId = this.$store.state.userID;
      //  判断组织
      if (this.deptKey === 1) {
        this.type = 'direct';
      } else {
        this.type = 'cross';
      }
      const params = {
        type: this.type,
      };
      // 获取人员表
      api.worklog.getMyEmpWorklogsInfo(userId, params).then((res) => {
        this.userWorklog = res.data.data;
      }).catch((error) => {
        console.log(error);
      });
    }, 200);
  },
};
</script>

<style scoped>

</style>

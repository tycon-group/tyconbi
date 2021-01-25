<template>
  <div class="user-list">
    <a-list item-layout="horizontal">
      <div v-for="item in userWorklog" :key="item.id">
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
      userWorklog: '',
      count_of_writed: '',
    };
  },
  components: {
    BaseWorklogUserListItem,
  },
  created() {
    setTimeout(() => {
      const params = {
        type: 'direct',
      };
      api.worklog.getMyEmpWorklogsInfo('D00121', params).then((res) => {
        const worklo = res.data.data;
        console.log(res.data.data, '2222');
        this.count_of_writed = worklo[1].count_of_writed;
        this.userWorklog = worklo;
        console.log(this.userWorklog);
      }).catch((error) => {
        console.log(error);
      });
    }, 200);
  },
};
</script>

<style scoped>

</style>

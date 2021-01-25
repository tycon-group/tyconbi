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

export default {
  name: 'base-worklog-user-list',
  props: ['deptKey'],
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      userWorklog: '',
      userWorklog1: [
        {
          name: '顾晓群',
          surplus: 12,
          whole: 22,
        },
        {
          name: '陈颖蓓',
          surplus: 1,
          whole: 12,
        },
        {
          name: '施维雯',
          surplus: 20,
          whole: 22,
        },
      ],
      userWorklog2: [
        {
          name: '顾晓群2',
          surplus: 12,
          whole: 22,
        },
        {
          name: '陈颖蓓2',
          surplus: 1,
          whole: 12,
        },
        {
          name: '施维雯2',
          surplus: 20,
          whole: 22,
        },
      ],
    };
  },
  components: {
    BaseWorklogUserListItem,
  },
  created() {
    if (this.deptKey === 1) {
      this.userWorklog = this.userWorklog1;
    } else {
      this.userWorklog = this.userWorklog2;
    }
  },
  methods: {
    onLoadMore() {
      console.log('点击了加载更多。');
    },
  },
};
</script>

<style scoped>

</style>

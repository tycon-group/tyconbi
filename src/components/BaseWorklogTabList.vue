<template>
  <div class="user-list">
    <a-list item-layout="horizontal">
      <div v-for="item in userWorklog" :key="item.id">
        <base-worklog-user-list-item :worklogitem=item />
      </div>
      <template #loadMore>
        <div
          v-if="showLoadingMore"
          :style="{ textAlign: 'center', marginTop: '12px',
              height: '32px', lineHeight: '32px' }"
        >
          <a-spin v-if="loadingMore" />
          <base-button-loading-more v-else @click="onLoadMore"/>
        </div>
      </template>
    </a-list>
  </div>
</template>

<script>
import BaseWorklogUserListItem from './BaseWorklogUserListItem.vue';
import BaseButtonLoadingMore from './BaseButtonLoadingMore.vue';

export default {
  name: 'base-tab-list',
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
    BaseButtonLoadingMore,
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

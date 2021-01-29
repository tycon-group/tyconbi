<template>
  <a-list item-layout="horizontal">
    <div v-for="item2 in worklog" :key="item2.id">
      <base-worklog-prew-list-item :worklogitem=item2 />
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
</template>

<script>
import BaseWorklogPrewListItem from './BaseWorklogPrewListItem.vue';
import BaseButtonLoadingMore from './BaseButtonLoadingMore.vue';

import api from '../api/index';

export default {
  name: 'base-worklog-prew-list',
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      worklog: [],
    };
  },
  components: {
    BaseButtonLoadingMore,
    BaseWorklogPrewListItem,
  },
  watch: {
    peopleName: {
      handler(peopleName) {
        if (peopleName === '') {
          this.worklog = [];
        } else {
          api.worklog.getAllWorklogs({
            name: peopleName,
          }).then((value) => {
            const peopleAllWorklogs = value.data.results;
            this.worklog = peopleAllWorklogs;
            console.log(peopleAllWorklogs);
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    peopleName() {
      return this.$store.state.peopleName;
    },
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

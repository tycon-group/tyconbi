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
        <div v-show="next !=='' && next !== null">
           <a-spin v-if="loadingMore" />
           <base-button-loading-more v-else @click="onLoadMore"/>
        </div>
      </div>
    </template>
  </a-list>
</template>

<script>
import BaseWorklogPrewListItem from './BaseWorklogPrewListItem.vue';
import BaseButtonLoadingMore from './BaseButtonLoadingMore.vue';

import api from '../api/index';
import axios from '../request/index';

export default {
  name: 'base-worklog-prew-list',
  props: ['date'],
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      next: '',
      worklog: [],
    };
  },
  components: {
    BaseButtonLoadingMore,
    BaseWorklogPrewListItem,
  },
  watch: {
    peopleName: {
      handler() {
        this.updateWorklog();
      },
      deep: true,
      immediate: true,
    },
    date: {
      handler() {
        this.updateWorklog();
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
    updateWorklog() {
      if (this.peopleName === null) {
        this.worklog = [];
      } else {
        api.worklog.getAllWorklogs({
          name: this.peopleName,
          start_date: this.date[0],
          end_date: this.date[1],
        }).then((value) => {
          this.worklog = value.data.results;
          this.next = value.data.next;
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    onLoadMore() {
      this.loadingMore = true;
      if (this.next) {
        axios.get(this.next).then((value) => {
          this.worklog = this.worklog.concat(value.data.results);
          this.next = value.data.next;
          this.loadingMore = false;
          this.$nextTick(() => {
            window.dispatchEvent(new Event('resize'));
          });
        });
      }
    },
  },
};
</script>

<style scoped>

</style>

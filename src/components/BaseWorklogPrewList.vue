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

export default {
  name: 'base-worklog-prew-list',
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      worklog: [
        {
          name: '顾晓群',
          createdTime: '2020/11/10 17:48',
          plan: [
            {
              id: 1,
              flag: true,
              content: 'plan1项目经理面试-胡运涛(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
            {
              id: 2,
              flag: false,
              content: 'plan2项目经理面试-胡运涛(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
          ],
        },
        {
          name: '顾晓群',
          createdTime: '2020/11/11 13:48',
          plan: [
            {
              id: 1,
              content: 'plan1项目经理面试-胡运涛11111(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
            {
              id: 2,
              content: 'plan2项目经理面试-胡运涛1111222(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
          ],
        },
        {
          name: '顾晓群',
          createdTime: '2020/11/12 17:48',
          plan: [
            {
              id: 1,
              content: 'plan1项目经理面试-胡运涛2221222(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
            {
              id: 2,
              content: 'plan2项目经理面试-胡运涛22222(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
          ],
        },
        {
          name: '顾晓群',
          createdTime: '2020/11/13 20:48',
          plan: [
            {
              id: 1,
              content: 'plan1项目经理面试-胡运涛333333(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
            {
              id: 2,
              content: 'plan2项目经理面试-胡运涛4444444(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
          ],
        },
        {
          name: '顾晓群',
          createdTime: '2020/11/15 10:48',
          plan: [
            {
              id: 1,
              content: 'plan1项目经理面试-胡运涛555555(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
            {
              id: 2,
              content: 'plan2项目经理面试-胡运涛666666(可考虑施工经理，待本人反馈是否接受)，周虎',
            },
          ],
        },
      ],
    };
  },
  components: {
    BaseButtonLoadingMore,
    BaseWorklogPrewListItem,
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

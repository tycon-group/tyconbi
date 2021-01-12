<template>
  <div class="contanier">
    <div class="navigation">
      <div class="tab-group">
        <a-tabs type="card"
                defaultActiveKey="1"
                tabPosition="top"
                size="small"
                tabBarStyle="">
          <a-tab-pane key="1" tab="本部门">
            <base-worklog-tab-list :deptKey = 1 />
          </a-tab-pane>
          <a-tab-pane key="2" tab="其他部门">
            <base-worklog-tab-list :deptKey = 2 />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="content">
      <div class="tool-bar">
        <a-range-picker v-model:value="value3" @change="onChange" />
      </div>
      <div class="list-content">
        <a-list item-layout="horizontal">
          <base-worklog-prew-list-item/>
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
    </div>
  </div>
</template>

<script>
import BaseWorklogTabList from '../components/BaseWorklogTabList.vue';
import BaseWorklogPrewListItem from '../components/BaseWorklogPrewListItem.vue';
import BaseButtonLoadingMore from '../components/BaseButtonLoadingMore.vue';

export default {
  components: {
    BaseButtonLoadingMore,
    BaseWorklogPrewListItem,
    BaseWorklogTabList,
  },
  data() {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      value3: [],
      data: [],
    };
  },
  methods: {
    onChange() {
    },
    onLoadMore() {
    },
  },
};
</script>

<style scoped>
.contanier {
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.navigation {
  background: white;
  width: 178px;
  height: 100%;
  display: flex;
  overflow: auto;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  flex: auto;
  align-items: flex-start;
  overflow: auto;
}
.tab-group{
  display: flex;
  position: fixed;
  width: 178px;
  z-index: 2;
  margin-bottom: 10px;
  background: white;
}

.list-content {
  background: #F6F6F6;
  width: 100%;
  flex: auto;
  overflow: auto;
  margin-top: 16px;
}
</style>

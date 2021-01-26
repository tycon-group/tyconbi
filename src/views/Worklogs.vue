<template>
  <div class="contanier">
    <div class="navigation">
      <div class="tab-group">
        <a-tabs type="line"
                defaultActiveKey="1"
                tabPosition="top"
                size="small"
                tabBarGutter="60px"
                :tabBarStyle="{textAlign: 'left', width: '228px',
                 borderRadius: '6px', boxShadow: '0 2px 6px #F3F3F3'}">
          <a-tab-pane key="1" tab="本部门">
            <base-worklog-user-list :deptKey = 1 />
          </a-tab-pane>
          <a-tab-pane key="2" tab="其他部门">
            <base-worklog-user-list :deptKey = 2 />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="content">
      <div class="tool-bar">
<!--        日期选择器-->
        <a-range-picker v-model:value="value3" @change="onChange" />
      </div>
      <div class="list-content">
        <base-worklog-prew-list />
      </div>
    </div>
  </div>
</template>

<script>
import BaseWorklogUserList from '../components/BaseWorklogUserList.vue';
import BaseWorklogPrewList from '../components/BaseWorklogPrewList.vue';

export default {
  components: {
    BaseWorklogUserList,
    BaseWorklogPrewList,
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
  width: 274px;
  min-width: 274px;
  height: 100%;
  flex: 1;
  overflow: auto;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  flex: auto;
  align-items: flex-start;
  overflow: auto;
  border-radius:4px;
  box-shadow: 0 0 10px #F3F3F3;
}
.tab-group{
  display: flex;
  /*position: fixed;*/
  width: 274px;
  /*z-index: 2;*/
  padding-top: 8px;
  padding-left: 8px;
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

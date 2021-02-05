<template>
  <div class="contanier">
    <div class="navigation">
      <div class="tab-group">
        <a-tabs type="line"
                :defaultActiveKey=type
                tabPosition="top"
                size="small"
                tabBarGutter="60px"
                :tabBarStyle="{textAlign: 'left', width: '228px', position: 'fixed', zIndex:'2',
                backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 2px 6px #F3F3F3'}">
          <a-tab-pane key="direct" tab="本部门">
            <base-worklog-user-list :deptKey = 1 />
          </a-tab-pane>
          <a-tab-pane key="cross" tab="其他部门">
            <base-worklog-user-list :deptKey = 2 />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="content">
      <div class="tool-bar">
<!--        日期选择器-->
        <a-range-picker v-model:value="date" @change="onChange" />
        <div>{{ peopleName }}</div>
      </div>
      <div class="list-content">
        <base-worklog-prew-list :date="date"/>
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
      date: ['', ''],
    };
  },
  methods: {
    onChange(date, dateString) {
      this.date = dateString;
    },
  },
  computed: {
    peopleName() {
      return this.$store.state.peopleName;
    },
    type() {
      return this.$store.state.type;
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
  display: flex;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  flex: auto;
  overflow: auto;
  border-radius:4px;
  box-shadow: 0 0 10px #F3F3F3;
}
.tab-group{
  width: 274px;
  padding-left: 8px;
  margin-bottom: 10px;
  background: white;
  flex: 1;
  overflow: auto;
}

.list-content {
  background: #F6F6F6;
  width: 100%;
  flex: auto;
  overflow: auto;
  margin-top: 16px;
}
.tool-bar {
  display: flex;
  justify-content: space-between;
}
</style>

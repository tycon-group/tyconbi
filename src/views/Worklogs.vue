<template>
  <div class="contanier">
    <div class="navigation">
      <div class="button-group">
        <base-button-left class="button-item" >本部门</base-button-left>
        <base-button-right class="button-item" >其他部门</base-button-right>
      </div>
      <div class="user-list">
        <base-worklog-user-list-item>
        </base-worklog-user-list-item>
        <base-worklog-user-list-item>
        </base-worklog-user-list-item>
        <base-worklog-user-list-item>
        </base-worklog-user-list-item>
        <base-worklog-user-list-item>
        </base-worklog-user-list-item>
        <base-worklog-user-list-item>
        </base-worklog-user-list-item>
      </div>
    </div>
    <div class="content">
      <div class="tool-bar">
      </div>
      <div class="list-content">
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonLeft from '../components/BaseButtonLeft.vue';
import BaseButtonRight from '../components/BaseButtonRight.vue';
import BaseWorklogUserListItem from '../components/BaseWorklogUserListItem.vue';

export default {
  components: {
    BaseWorklogUserListItem,
    BaseButtonRight,
    BaseButtonLeft,
  },
  data() {
    return {
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
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
  background: #52c41a;
  display: flex;
  margin-left: 16px;
  flex: auto;
  height: 100%;
}
.button-group{
  display: flex;
  position: fixed;
  width: 178px;
  z-index: 2;
  margin-bottom: 10px;
  background: white;
}
.button-item{
  width: 50%;
}
.user-list{
  padding-top: 32px;
}
</style>

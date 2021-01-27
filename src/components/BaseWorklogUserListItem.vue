<template>
  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 240px">
    <div class="listUserItem">
      <a-badge :count=this.realCount show-zero>
        <div style="padding: 12px 12px; width: 228px" @click="ClickItem">
          <div style="font-size: 14px; margin-bottom: 8px">
            {{ empworklogitem.name }}
          </div>
          <div style="font-size: 12px">
            本月测评({{ empworklogitem.count_of_commented}} / {{ empworklogitem.count_of_writed}})
          </div>
        </div>
      </a-badge>
    </div>
  </div>
</template>

<script>
import api from '../api/index';

export default {
  name: 'base-worklog-user-list-item',
  props: ['empworklogitem'],
  data() {
    return {
      realCount: 0,
    };
  },
  created() {
    this.realCount = this.empworklogitem.count_of_commented - this.empworklogitem.count_of_scored;
  },
  methods: {
    ClickItem() {
      this.$message.success('点击');
      api.worklog.getAllWorklogs({
        empname: this.empworklogitem.name,
      }).then((value) => {
        const a = value;
        console.log(a);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style>
.listUserItem {
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;
  border-radius:4px;
  border: 1px solid #F0F2F5;
  box-sizing: border-box;
}

.listUserItem :hover{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border-radius:4px;
  box-shadow: 0 0 10px #F3F3F3;
  color: #1890ff;
}
</style>

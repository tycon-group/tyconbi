<template>
  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 240px">
    <div class="listUserItem">
      <a-badge :count=this.realCount>
        <div style="padding: 12px 12px; width: 228px" @click="ClickItem">
          <div style="font-size: 14px; margin-bottom: 8px;">
            {{ empworklogitem.name }}
          </div>
          <div style="font-size: 12px">
            本次测评 ({{ empworklogitem.count_of_commented}} / {{ empworklogitem.count_of_writed}} )
          </div>
        </div>
      </a-badge>
    </div>
  </div>
</template>

<script>

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
      this.$message.success({
        content: `刚刚点击了${this.empworklogitem.name}`,
        duration: 1,
        maxCount: 1,
      });
      this.$store.commit('updatePeopleName', this.empworklogitem.name);
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

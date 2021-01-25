<template>
  <div style="display: flex; flex-direction: column; align-items: flex-start; width: 240px">
    <div class="listUserItem">
      <a-badge :count=userworklogitem.count_of_commented show-zero>
        <div style="padding: 12px 12px; width: 228px">
          <div style="font-size: 14px; margin-bottom: 8px">
            {{ userworklogitem.name }}
          </div>
          <div style="font-size: 12px">
            本月测评({{ userworklogitem.count_of_commented}} / {{ userworklogitem.count_of_writed}})
          </div>
        </div>
      </a-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-worklog-user-list-item',
  props: ['userworklogitem'],
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.userworklogitem, 'wewqeqweq');
  },
};
</script>

<style>
.listUserItem {
  margin-top: 8px;
  margin-bottom: 12px;
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

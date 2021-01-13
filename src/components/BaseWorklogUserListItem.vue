<template>
    <div class="listUserItem">
      <a-badge :count= userworklogitem.surplus :offset="[-8, 10]">
        <div style="padding: 12px 16px; width: 178px;">
          <div style="font-size: 14px; margin-bottom: 8px">
            {{ userworklogitem.name }}
          </div>
          <div style="font-size: 12px">
            本月测评({{ userworklogitem.surplus}} / {{ userworklogitem.whole}})
          </div>
        </div>
      </a-badge>
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
};
</script>

<style>
.listUserItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
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

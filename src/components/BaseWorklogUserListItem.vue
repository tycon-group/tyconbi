<template>
    <div class="listItem"
         style="display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-top: 16px;
                text-align: left;
                box-shadow: 0 0 10px #F3F3F3;">
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
.listItem :hover{
  color: #1890ff;
}
</style>

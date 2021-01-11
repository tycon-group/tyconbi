<template>
  <div v-for="item in userWorklog" :key="item.id">
    <div style="display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 10px 0;
                text-align: left; background-color: #42b983">
      <a-badge :count= 'item.whole - item.surplus' :offset="[-8, 10]">
        <div style="padding: 12px 16px; width: 178px;">
          <div style="font-size: 14px; margin-bottom: 8px">
            {{ item.name }}
          </div>
          <div style="font-size: 12px">
            本月测评({{ item.surplus}} / {{ item.whole}})
          </div>
        </div>
      </a-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-worklog-user-list-item',
  data() {
    return {
      userWorklog: [
        {
          name: '顾晓群',
          surplus: 12,
          whole: 22,
        },
        {
          name: '陈颖蓓',
          surplus: 1,
          whole: 12,
        },
        {
          name: '施维雯',
          surplus: 20,
          whole: 22,
        },
      ],
    };
  },
};
</script>

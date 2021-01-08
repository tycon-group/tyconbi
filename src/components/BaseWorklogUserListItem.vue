<template>
    <div style="display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 10px 0;
                text-align: left;">
      <a-badge :count="20" :offset="[-8, 10]">
        <div style="padding: 12px 16px; width: 178px">
          <div style="font-size: 14px; margin-bottom: 8px">
            顾晓群
          </div>
          <div style="font-size: 12px">
            本月测评
          </div>
        </div>
      </a-badge>
    </div>
</template>

<script>
export default {
  name: 'base-worklog-user-list-item',
};
</script>

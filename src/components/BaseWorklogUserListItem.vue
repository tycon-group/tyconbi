<template>
    <div style="display: flex;
                flex-direction: column;
                align-items: flex-start;
                background: #13c2c2;
                margin: 10px 0;
                text-align: left;">
      <a-badge :count="200">
        <div style="width: 178px; padding: 12px 16px;">
          <div style="font-size: 14px; margin-bottom: 8px">
            顾晓群(人事行政部)
          </div>
          <div style="font-size: 12px">
            本月测评(12/24)
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

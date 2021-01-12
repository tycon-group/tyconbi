<template>
  <div style="display: flex;
              margin: 0 0 1px;
              box-shadow: 10px 0 0.1rem #c2c2c2;">
      <div style="padding: 12px 16px;">
        <span style="font-size: 14px;">
          {{ worklogitem.createdTime }}
        </span>
        <span style="font-size: 14px; margin-left: 20px;">
          {{ worklogitem.infos }}
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'base-worklog-prew-list-item',
  props: ['worklogitem'],
};
</script>

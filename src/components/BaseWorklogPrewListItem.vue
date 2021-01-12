<template>
  <div style="display: flex;
              margin: 0 0 1px;
              box-shadow: 10px 0 0.1rem #c2c2c2;" @click="showDrawer">
      <div style="padding: 12px 16px;">
        <span style="font-size: 14px;">
          {{ worklogitem.createdTime }}
        </span>
        <span style="font-size: 14px; margin-left: 20px;">
          {{ worklogitem.infos }}
        </span>
      </div>
  </div>
  <a-drawer
    title="日志详情"
    width="50%"
    placement="right"
    :closable="false"
    :visible="visible"
    :after-visible-change="afterVisibleChange"
    @close="onClose"
  >
    {{ worklogitem.infos }}
  </a-drawer>
</template>

<script>
export default {
  name: 'base-worklog-prew-list-item',
  props: ['worklogitem'],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

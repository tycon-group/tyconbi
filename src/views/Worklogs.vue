<template>
  <div class="contanier">
    <div class="navigation">
      <div class="button-group">
        <base-button-left class="button-item" />
        <base-button-right class="button-item" />
      </div>
      <div class="user-picker">
        <base-select />
      </div>
      <div class="user-list">
        <base-list-item />
      </div>
    </div>
    <div class="content">
      <div class="tool-bar">
      </div>
      <div class="list-content">
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonLeft from '../components/BaseButtonLeft.vue';
import BaseSelect from '../components/BaseSelect.vue';
import BaseListItem from '../components/BaseListItem.vue';
import BaseButtonRight from '../components/BaseButtonRight.vue';

export default {
  components: {
    BaseButtonRight, BaseButtonLeft, BaseListItem, BaseSelect,
  },
  // 这是日志页面
};
</script>

<style scoped>
.contanier {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
}

.navigation {
  background: white;
  width: 178px;
}

.content {
  background: #52c41a;
  margin-left: 16px;
  flex: auto;
}

.button-group{
  display: flex;
}

.button-item{
  width: 50%;
}
</style>

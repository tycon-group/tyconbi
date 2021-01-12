<template>
  <div class="drawer">
    <div>撰写时间： {{ worklogitem.createdTime }}</div>
    <div v-for="planItem in worklogitem.plan" :key="planItem.id">
      {{ planItem.content }}
    </div>
    <div>d2232344ggdada</div>
  </div>
</template>

<script>
export default {
  name: 'base-worklog-drawer',
  props: ['worklogitem'],
};
</script>

<style scoped>
.drawer {
  display: flex;
  flex-direction: column;
}
</style>

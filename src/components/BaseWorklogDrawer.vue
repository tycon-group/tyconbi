<template>
  <div class="drawer">
    <div>
      <span class="title">撰写时间： </span>{{ worklogitem.createdTime }}
    </div>
    <div class="items">
      <span class="title">日计划：</span>
      <div class="cont" v-for="planItem in worklogitem.plan" :key="planItem.id">
        <div style="background-color: green; width: 16px; height: 16px"
             v-if="planItem.flag === true">
          Y
        </div>
        <div style="background-color: red; width: 16px; height: 16px" v-else>
          N
        </div>
        <div>
          {{ planItem.content }}
        </div>
      </div>
    </div>
    <div class="items">
      <span class="title">工作记录：</span>
      <div class="cont">
        1
      </div>
    </div>
    <div class="items">
      <span class="title">工作小结：</span>
      <div class="cont">
        1
      </div>
    </div>
    <div class="items">
      <span class="title">评阅记录：</span>
      <div class="cont">
        1
      </div>
    </div>
    <div class="items">
      <span class="title">评分：</span>
      <span>
        <a-rate v-model:value="mark_value" :tooltips="desc" />
        <span class="ant-rate-text">{{ desc[mark_value - 1] }}</span>
      </span>
    </div>
    <div class="items">
      <span class="title">备注：</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-worklog-drawer',
  props: ['worklogitem'],
  data() {
    return {
      mark_value: 3,
      desc: ['1分', '2分', '3分', '4分', '5分'],
    };
  },
};
</script>

<style scoped>
.drawer {
  display: flex;
  flex-direction: column;
}
.title {
  width: 100vw;
  height: 20px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-weight: bold;
}

.cont {
  display: flex;
  flex-direction: row;
  background-color: #F0F2F5;
  padding: 8px 16px;
}

.items {
  margin-top: 16px;
}
</style>

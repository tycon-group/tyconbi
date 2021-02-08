<template>
  <div class="drawer">
    <div>
      <span class="title">撰写时间： </span>{{ worklogitem.write_time }}
    </div>
    <div class="items">
      <div style="margin-bottom: 8px">
        <span class="title">日计划：</span>
      </div>
      <div style="
                display: flex;
                flex-direction: column;
                background-color: #F0F2F5;
                padding: 8px 16px;
                text-align: center;"
           v-if="worklogitem.daily_plan.done[0] === '' && worklogitem.daily_plan.undone[0] === ''">
        <span style="font-size:16px; color: #8F9399">暂无记录</span>
      </div>
      <div style="
                display: flex;
                flex-direction: column;
                background-color: #F0F2F5;
                padding: 8px 16px;" v-else>
        <div style="margin-right: 8px; display: flex;"
             v-for="planItem in worklogitem.daily_plan.done" :key="planItem.index">
          <CheckCircleFilled style="padding-top:3px; padding-left: 4px;
             font-size: 16px; color: #52C41B" v-show="planItem !== ''"/>
          <div style="padding-left: 8px;">{{ planItem }}</div>
        </div>
        <div style="margin-right: 8px; display: flex;"
        v-for="planItem2 in worklogitem.daily_plan.undone" :key="planItem2.index">
          <ClockCircleFilled  style="padding-top:3px; padding-left: 4px;
          font-size: 16px" v-show="planItem2 !== ''"/>
          <div style="padding-left: 8px">{{ planItem2 }}</div>
        </div>
      </div>
    </div>
    <div class="items">
      <span class="title">工作记录：</span>
      <div class="cont" v-if="worklogitem.work_records[0].data !== ''">
        <div v-for="workItem in worklogitem.work_records" :key="workItem.index">
          <div>{{ workItem.data }}</div>
        </div>
      </div>
      <div class="cont" style="text-align: center;" v-else>
        <span style="font-size:16px; color: #8F9399">暂无记录</span>
      </div>
    </div>
    <div class="items">
      <span class="title">工作小结：</span>
      <div class="cont" v-if="worklogitem.work_summary !== ''">
        {{ worklogitem.work_summary }}
      </div>
      <div class="cont" style="text-align: center;" v-else>
        <span style="font-size:16px; color: #8F9399">暂无记录</span>
      </div>
    </div>
    <div class="items">
      <span class="title">评阅记录：</span>
      <div class="cont" v-if="worklogitem.comments.length !== 0">
        <div style="font-size: 12px; display: flex; flex-direction: row;">
          <div>
            {{ worklogitem.comments[0].commentator }}
          </div>
          <div style="color: #8F9399; margin-left: 15px;">
            {{ worklogitem.comments[0].comment_time }}
          </div>
        </div>
        <div style="font-size: 14px; margin-top: 8px;">
          {{ worklogitem.comments[0].content }}
        </div>
      </div>
      <div class="cont" style="text-align: center;" v-else>
        <span style="font-size:16px; color: #8F9399">暂无记录</span>
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
      <div class="cont_right">
        <a-textarea
          v-model:value="textarea_value"
          placeholder="评分不为3分，则必须写明理由！"
          :auto-size="{ minRows: 6, maxRows: 12 }"
        />
      </div>
      <div class="footer_btn">
        <a-tooltip placement="left"
                   title="提示: 您只能评分一次，24小时内可删除，再次提交评分。"
                   :get-popup-container="getPopupContainer">
        <a-button :disabled="mark_value !== 3 && textarea_value === ''"
                  @click="submitOneTime"
                  style="width: 80px; height: 40px; border-radius:4px;
                   background-color: #0080CC; color: #FFFFFF;">提交
        </a-button>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleFilled, ClockCircleFilled } from '@ant-design/icons-vue';
import api from '../api/index';

export default {
  name: 'base-worklog-drawer',
  components: {
    CheckCircleFilled,
    ClockCircleFilled,
  },
  props: ['worklogitems'],
  data() {
    return {
      mark_value: 3,
      desc: ['1分', '2分', '3分', '4分', '5分'],
      textarea_value: '',
      worklogitem: this.worklogitems.data,
      type: '',
    };
  },
  mounted() {
    if (this.$store.state.type === 'direct') {
      this.type = '直属评分';
    } else {
      this.type = '跨级评分';
    }
  },
  methods: {
    submitOneTime() {
      api.worklog.postTheScores({
        worklog: this.worklogitems.id,
        type: this.type,
        score: this.mark_value,
        remarks: this.textarea_value,
        author: this.$store.state.name,
      }).then(() => {
        this.$message.success('评分成功');
        // 关闭抽屉
        this.$emit('closeDrawer', false);
      }).catch((error) => {
        console.log(error);
        this.$message.error('评分失败');
      });
    },
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
  background-color: #F0F2F5;
  margin-top: 8px;
  padding: 8px 24px;
  font-size: 14px;
}

.items {
  margin-top: 16px;
}

.footer_btn {
  width: 100%;
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  text-align: right;
}

</style>

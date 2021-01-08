<template>
  <div class="contanier">
    <div class="navigation">
      <div class="button-group">
        <base-button-left class="button-item" >本部门</base-button-left>
        <base-button-right class="button-item" >其他部门</base-button-right>
      </div>
      <div class="user-list">
        <a-list item-layout="horizontal">
          <base-worklog-user-list-item />
          <template #loadMore>
            <div
              v-if="showLoadingMore"
              :style="{ textAlign: 'center', marginTop: '12px',
              height: '32px', lineHeight: '32px' }"
            >
              <a-spin v-if="loadingMore" />
              <base-button-loading-more v-else @click="onLoadMore"/>
            </div>
          </template>
        </a-list>
      </div>
    </div>
    <div class="content">
      <div class="tool-bar">
        <a-range-picker v-model:value="value3" @change="onChange" />
      </div>
      <div class="list-content">
        <a-list item-layout="horizontal">
          <base-worklog-prew-list-item/>
          <template #loadMore>
            <div
              v-if="showLoadingMore"
              :style="{ textAlign: 'center', marginTop: '12px',
              height: '32px', lineHeight: '32px' }"
            >
              <a-spin v-if="loadingMore" />
              <base-button-loading-more v-else @click="onLoadMore"/>
            </div>
          </template>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonLeft from '../components/BaseButtonLeft.vue';
import BaseButtonRight from '../components/BaseButtonRight.vue';
import BaseWorklogUserListItem from '../components/BaseWorklogUserListItem.vue';
import BaseWorklogPrewListItem from '../components/BaseWorklogPrewListItem.vue';
import BaseButtonLoadingMore from '../components/BaseButtonLoadingMore.vue';

export default {
  components: {
    BaseButtonLoadingMore,
    BaseWorklogPrewListItem,
    BaseWorklogUserListItem,
    BaseButtonRight,
    BaseButtonLeft,
  },
  data() {
    return {
      value3: [],
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style scoped>
.contanier {
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.navigation {
  background: white;
  width: 178px;
  height: 100%;
  display: flex;
  overflow: auto;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  flex: auto;
  align-items: flex-start;
  overflow: auto;
}
.button-group{
  display: flex;
  position: fixed;
  width: 178px;
  z-index: 2;
  margin-bottom: 10px;
  background: white;
}
.button-item{
  width: 50%;
}
.user-list{
  padding-top: 32px;
}
.list-content {
  background: #F6F6F6;
  width: 100%;
  flex: auto;
  overflow: auto;
  margin-top: 16px;
}
</style>

<template>
  <div class="contanier">
    <div class="navigation">
      <span  style="font-size: 14px; margin-bottom: 16px;">组织架构</span>
      <div style="width: 100%;"><base-company-menu /></div>
<!--      组织架构-->
    </div>
    <div class="content">
<!--      内容区域-->
      <div class="header">
<!--        分布图和成员信息-->
        <a-tabs type="card"
                defaultActiveKey="1"
                tabPosition="top"
                size="small"
                :tabBarStyle="{textAlign: 'left'}"
                style="width: 100%">
          <a-tab-pane key="1" tab="分布图">
            <BaseDept />
          </a-tab-pane>
          <a-tab-pane key="2" tab="成员信息">
            <BasePerson />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCompanyMenu from '../components/BaseCompanyMenu.vue';
import BaseDept from '../components/BaseDept.vue';
import BasePerson from '../components/BasePerson.vue';

export default {
  components: {
    BasePerson,
    BaseDept,
    BaseCompanyMenu,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .contanier {
    display: flex;
    justify-content: flex-start;
    height:100%;
  }
  .navigation {
    /*background: white;*/
    width: 274px;
    min-width: 274px;
    /*background-color: #0080CC;*/
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow: auto;
    padding: 16px;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0;
    flex: auto;
    overflow: auto;
    border-radius:4px;
    box-shadow: 0 0 10px #F3F3F3;
  }
  .header {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;
    border-radius:4px;
    box-shadow: 0 0 10px #F3F3F3;
  }
</style>

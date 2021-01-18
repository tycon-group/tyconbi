<template>
  <div class="contanier">
    <div class="navigation">
      <span  style="font-size: 14px; margin-bottom: 16px;">组织架构</span>
      <div style="width: 100%;  background-color: #1890ff"><base-company-menu /></div>
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
                tabBarStyle=""
                style="width: 100%">
          <a-tab-pane key="1" tab="分布图">
            <base-person-attr />
            <div class="footer">
              <!--        Toolbar和列表-->
              <div class="toolbar" style="height: 40px; display: flex; justify-content: start">
                <!--          选择时间区间-->
                <a-range-picker v-model:value="value3" style="width: 240px;"/>
                <!--          选择年度 -->
                <a-select
                  v-model:value="value1"
                  style="width: 120px; margin-left: 24px"
                  @focus="focus"
                  ref="select"
                >
                  <a-select-option
                    v-for="selectItem in dataResources"
                    :key="selectItem.id"
                    :value="selectItem.value">
                    {{ selectItem.name }}
                  </a-select-option>
                </a-select>
              </div>
              <div v-show="false">
                <a-tabs size="small">
                  <a-tab-pane key="1" tab="总览">
                    <base-total-list />
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="工作能力">
                    Content of Tab Pane 2
                  </a-tab-pane>
                  <a-tab-pane key="3" tab="工作态度">
                    Content of Tab Pane 3
                  </a-tab-pane>
                  <a-tab-pane key="4" tab="发展潜力">
                    Content of Tab Pane 3
                  </a-tab-pane>
                  <a-tab-pane key="5" tab="突出贡献">
                    Content of Tab Pane 3
                  </a-tab-pane>
                </a-tabs>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="成员信息">
            Content of Tab Pane 2
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCompanyMenu from '../components/BaseCompanyMenu.vue';
import BasePersonAttr from '../components/BasePersonAttr.vue';
import BaseTotalList from '../components/dept/BaseTotalList.vue';

export default {
  components: {
    BaseTotalList,
    BasePersonAttr,
    BaseCompanyMenu,
  },
  data() {
    return {
      value1: '',
      value3: [],
      dataResources: [
        {
          name: '全财年',
          value: 'all',
        },
        {
          name: '上半财年',
          value: 'temp1st',
        },
        {
          name: '下半财年',
          value: 'temp2nd',
        },
        {
          name: '第一季度',
          value: '1st',
        },
        {
          name: '第二季度',
          value: '2nd',
        },
        {
          name: '第三季度',
          value: '3rd',
        },
        {
          name: '第四季度',
          value: '4th',
        },
        {
          name: '1月',
          value: '1',
        },
        {
          name: '2月',
          value: '2',
        },
        {
          name: '3月',
          value: '3',
        },
        {
          name: '4月',
          value: '4',
        },
        {
          name: '5月',
          value: '5',
        },
        {
          name: '6月',
          value: '6',
        },
        {
          name: '7月',
          value: '7',
        },
        {
          name: '8月',
          value: '8',
        },
        {
          name: '9月',
          value: '9',
        },
        {
          name: '10月',
          value: '10',
        },
        {
          name: '11月',
          value: '11',
        },
        {
          name: '12月',
          value: '12',
        },
      ],
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
    background-color: red;
    padding: 16px 16px 0;
    flex: auto;
    overflow: auto;
    border-radius:4px;
    box-shadow: 0 0 10px #F3F3F3;
  }
  .header {
    height: 100%;
    background: #13c2c2;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;
    border-radius:4px;
    box-shadow: 0 0 10px #F3F3F3;
  }
  .footer {
    flex: auto;
    background: #40a9ff;
    width: 100%;
  }
</style>

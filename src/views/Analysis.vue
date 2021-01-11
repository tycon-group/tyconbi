<template>
  <div class="contanier">
    <div class="navigation">
      <span  style="font-size: 14px; margin-bottom: 16px;">组织架构</span>
      <div>tree</div>
<!--      组织架构-->s
    </div>
    <div class="content">
<!--      内容区域-->
      <div class="header">
<!--        分布图和成员信息-->
        <a-tabs type="card"
                defaultActiveKey="1"
                tabPosition="top"
                size="small"
                tabBarStyle="">
          <a-tab-pane key="1" tab="分布图">
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="成员信息">
            Content of Tab Pane 2
          </a-tab-pane>
        </a-tabs>
      </div>
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
            <a-select-option value="jack">
              Jack
            </a-select-option>
            <a-select-option value="lucy">
              Lucy
            </a-select-option>
            <a-select-option value="disabled" disabled>
              Disabled
            </a-select-option>
            <a-select-option value="Yiminghe">
              yiminghe
            </a-select-option>
          </a-select>
        </div>
        <div>
          <a-tabs size="small">
            <a-tab-pane key="1" tab="总览">
              Content of Tab Pane 1
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
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      value1: 'lucy',
      value3: [],
    };
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
    /*background: white;*/
    width: 274px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow: auto;
    background: #a0d911;
    padding: 16px;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0;
    flex: auto;
    overflow: auto;
  }
  .header {
    height: 272px;
    /*background: #13c2c2;*/
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .footer {
    flex: auto;
    /*background: #40a9ff;*/
    width: 100%;
  }
</style>

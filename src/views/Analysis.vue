<template>
  <div class="contanier">
    <div class="navigation">
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
        <div>toolbar</div>
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
    overflow: auto;
    background: #a0d911;
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
    background: #40a9ff;
    width: 100%;
  }
</style>

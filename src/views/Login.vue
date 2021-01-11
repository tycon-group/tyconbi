<template>
  <div class="page">
    <div class="left">
      <div style="height: 30px; width: 100%; text-align: start">
        <router-link to='/' ondragstart="return false">
          <a-button >
            <span style="color: #1890ff">返回首页</span>
          </a-button>
        </router-link>
      </div>
      <div style="height: 30px; width: 100%; font-size: 26px; text-align: start">
        <span>Welcome Tycon BI</span>
      </div>
      <div style="height: 210px;width: 100%">
        <a-form layout="vertical" :model="form" v-bind="formItemLayout" >
          <a-form-item style="font-size: 16px; text-align: start">
            <span>Username</span>
            <a-input
              required
              class="inputs"
              v-model:value="form.fieldA"
              maxlength="14"/>
          </a-form-item>
          <a-form-item style="font-size: 16px; text-align: start">
            <span>Password</span>
            <a-input
              required
              has-feedback
              class="inputs"
              type="password"
              autocomplete="off"
              v-model:value="form.fieldB"
              maxlength="18"/>
          </a-form-item>
          <a-form-item
            style="font-size: 14px; text-align: start;"
            :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button type="primary" style="width: 115px; height: 30px">
              <span>登录</span>
            </a-button>
            <a
              href="https://www.baidu.com"
              style=" padding-left: 220px;font-size: 14px; color: #8F9399">
              忘记密码</a>
          </a-form-item>
        </a-form>
      </div>
      <div style="background-color:red; height: 70px; margin-top: 70px;width: 100%">footer层</div>
    </div>
    <div class="right">
      <div class="bdPic">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        fieldA: '',
        fieldB: '',
      },
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 },
        }
        : {};
    },
  },
};
</script>

<style scoped>
.page{
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  background-color: #fff;
}
.left {
  width: 500px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 90px;
  padding-top: 200px;
}
.right{
  width: 400px;
  background: #52c41a;
}

.inputs {
  border-color: #EEEEEE;
  border-style: solid;
  border-width: 0 0 1px;
}

.bdPic{
  background: #2c3e50;
  width: 500px;
}
</style>

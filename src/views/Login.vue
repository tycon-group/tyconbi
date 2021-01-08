<template>
  <div class="page">
    <div class="forms">
      <a-form layout="vertical" :model="form" v-bind="formItemLayout" >
        <a-form-item style="font-size: 16px; text-align: start">
<!--          这里要传值，判断没登录-->
          <router-link to="/" ondragstart="return false">
            <a-button >
              <span style="color: #1890ff">返回首页</span>
            </a-button>
          </router-link>
        </a-form-item>
        <a-form-item style="font-size: 26px; text-align: start">
          <span>Welcome Tycon BI</span>
        </a-form-item>
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
          style="font-size: 14px; align-items: start"
          :wrapper-col="buttonItemLayout.wrapperCol">
          <a-button type="primary" style="width: 115px; height: 30px">
            <span>登录</span>
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="bdPic">
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
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}

.forms {
  display: flex;
  width: 345px;
  height: 150px;
  margin-top: 200px;
  margin-left: 80px;
}

.inputs {
  border-color: #EEEEEE;
  border-style: solid;
  border-width: 0 0 1px;
}

.bdPic{

}
</style>

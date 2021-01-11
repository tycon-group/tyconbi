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
        <span>{{ title }}</span>
      </div>
      <div style="height: 210px;width: 100%">
        <a-form layout="vertical" :model="form" v-bind="formItemLayout" >
          <a-form-item style="font-size: 16px; text-align: start">
            <span>Username</span>
            <a-input
              required
              class="inputs"
              v-model:value="form.username"
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
              v-model:value="form.password"
              maxlength="18"/>
          </a-form-item>
          <a-form-item
            style="font-size: 14px; text-align: start;">
            <a-button
              type="primary"
              html-type="submit"
              style="width: 115px; height: 30px" @click="handleSubmit(user)">
              <span>登录</span>
            </a-button>
            <a
              href="https://www.baidu.com"
              style=" padding-left: 220px;font-size: 14px; color: #8F9399">
              忘记密码</a>
          </a-form-item>
        </a-form>
      </div>
      <div style="display: flex; flex-direction: row; height: 50px; margin-top: 50px; width: 100%">
        <div class="items">
          <img class="imgs" src="../assets/logo_anti_white.png" alt="图标"/>
        </div>
        <div class="items" style="margin-left: 32px;">
          <img class="imgs" src="#" alt="图标"/>
        </div>
        <div class="items" style="margin-left: 32px;">
          <img class="imgs" src="#" alt="图标"/>
        </div>
        <div class="items" style="margin-left: 32px;">
          <img class="imgs" src="#" alt="图标"/>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="bdPic"
           style="width: 400px; height: 530px; background-color: #FFFFFF;">
        <img src="../assets/bd_right.png"
             style=" height: 100%; width: 100%;" alt="背景图"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Welcome Tycon BI',
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleSubmit(user) {
      const param = new URLSearchParams();
      param.append('username', this.forms.userName);
      param.append('password', this.forms.password);
      const instance = this.$http.create({ headers: { 'content-type': 'application/x-www-form-urlencoded' } });
      instance.post('https://tyconcps.cn:8888/auth-token/', param).then((response) => {
        console.log(response);
        this.$message.success('登录成功');
        const data1 = response.data;
        console.log(data1, 'wewwwewe', user);
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
        this.$message.error('账号或密码错误');
      });
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
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: start;
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

.items {
  width: 50px;
  height: 50px;
  background-color: #cdcdcd;
}
.imgs {
  width: 32px;
  height: 32px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

</style>

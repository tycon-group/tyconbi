<template>
  <div class="page">
    <div class="box">
      <div class="tyconWrap"><span class="tycon">Tycon Bi</span></div>
      <div class="block_3">
        zheli tupian
      </div>
      <span class="welcomeTycon">Welcome Tycon BI</span>
      <span class="username">Username</span>
      <div class="main" />
      <span class="passwod">Passwod</span>
      <div class="submain" />
      <div class="row">
        <div class="tagWrap"><span class="tag">登录</span></div>
        <span class="word">忘记密码</span>
      </div>
      <div class="ft">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {},
};
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
}

.box {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  width: 1440px;
  height: 900px;
  overflow: hidden;
}

.tyconWrap {
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 218px;
  right: 0;
  align-items: center;
  flex-direction: row;
  background-color: #0080cc;
  padding-right: 549px;
  padding-left: 23px;
  height: 44px;
}

.tycon {
  margin-top: -4px;
  line-height: 14px;
  white-space: pre;
  color: #ffffff;
  font-size: 10px;
}

.block_3 {
  display: flex;
  position: absolute;
  top: 274px;
  right: 574px;
  align-items: center;
  flex-direction: column;
  border-bottom-left-radius: 18px;
  background-color: #ffffff;
  width: 37px;
  height: 461px;
}

.welcomeTycon {
  position: relative;
  margin-top: 56px;
  margin-left: 108px;
  max-width: 1332px;
  height: 31px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 31px;
  white-space: pre;
  color: #303133;
  font-size: 26px;
}

.username {
  position: relative;
  margin-top: 23px;
  margin-left: 106px;
  max-width: 1334px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  white-space: nowrap;
  color: #303133;
  font-size: 16px;
}

.main {
  position: relative;
  margin-top: 36px;
  margin-left: 104px;
  background-color: #eeeeee;
  width: 480px;
  height: 1px;
}

.passwod {
  position: relative;
  margin-top: 24px;
  margin-left: 105px;
  max-width: 1335px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  white-space: nowrap;
  color: #303133;
  font-size: 16px;
}

.submain {
  position: relative;
  margin-top: 36px;
  margin-left: 104px;
  background-color: #eeeeee;
  width: 480px;
  height: 1px;
}

.row {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: 104px;
  width: 480px;
  height: 40px;
}

.tagWrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  background-color: #0080cc;
  padding-right: 66px;
  padding-left: 66px;
  height: 40px;
}

.tag {
  line-height: 18px;
  white-space: nowrap;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

.word {
  line-height: 18px;
  white-space: nowrap;
  color: #8f9399;
  font-size: 14px;
  font-weight: 400;
}

.ft {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 66px;
  margin-left: 95px;
  width: 279px;
  height: 89px;
}

</style>

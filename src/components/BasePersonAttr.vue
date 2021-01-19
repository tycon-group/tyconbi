<template>
  <div style="width: 100%;">
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px', width: '100%',}"
      :tabBarStyle="{textAlign: 'left'}"
      v-model:value="this.nameValue"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane
        v-for="personItem in personData" :key="personItem.id" :tab="personItem.zh_name">
        <div style="display: flex; padding-left: 16px; background-color: #0080CC">
          <div style="width: 77px; height: 112px;">
            <div style="height: 64px; width: 64px; margin: 0 auto;">
              <img src="#" alt="头像" /></div>
            <div style="font-size: 14px">{{ personItem.en_name }}</div>
            <div style="font-size: 16px; color: #8F9399;">{{ personItem.zh_name }}</div>
          </div>
          <div style="width: 142px; margin-left: 24px;
           display: flex; flex-direction: column; background-color: #42b983">
            <div>性别: <span style="">{{ personItem.gender }}</span></div>
            <div>出生年月: <span>{{ personItem.birthday }}</span></div>
            <div>学历: <span>{{ personItem.education }}</span></div>
          </div>
          <div style="width: 262px; margin-left: 16px; background-color: red">right2</div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>

export default {
  name: 'base-person-attr',
  components: {
  },
  data() {
    return {
      nameValue: '',
      mode: 'top',
      personData: [
        {
          id: 1,
          en_name: 'Annie',
          zh_name: '蒋玲玲',
          gender: '女',
          birthday: 'xxxx-xx-xx',
          education: '硕士',
          position: ['人事总监', '太江集团部门负责人'],
          yearForWork: 'xx',
          yearInCompany: 'xx',
        },
        {
          id: 2,
          en_name: 'Kunyu',
          zh_name: '于坤',
          gender: '女',
          birthday: 'xxxx-xx-xx',
          education: '硕士',
          position: ['太江集团部门负责人'],
          yearForWork: 'xx',
          yearInCompany: 'xx',
        },
      ],
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },

};
</script>

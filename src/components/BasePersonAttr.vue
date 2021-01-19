<template>
  <div style="width: 100%; border-radius:4px; box-shadow: 0 0 10px #F3F3F3;">
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
        <div style="display: flex; padding-left: 16px;">
          <div style="width: 77px; height: 112px;">
            <div style="height: 64px; width: 64px; margin: 0 auto;">
              <img :src="personItem.img" style="border-radius:50%;"
                   height="64" width="64" alt="头像" /></div>
            <div style="font-size: 14px; text-align: center">
              {{ personItem.en_name }}</div>
            <div style="font-size: 16px; color: #8F9399; text-align: center">
              {{ personItem.zh_name }}</div>
          </div>
          <div
            style="width: 142px; font-size: 14px; margin-left: 24px;">
            <div style="text-align: start">
              性别: <span style="color: #8F9399">{{ personItem.gender }}</span></div>
            <div style="margin-top: 16px; text-align: start">
              出生年月: <span style="color: #8F9399">{{ personItem.birthday }}</span></div>
            <div style="margin-top: 16px; text-align: start">
              学历: <span style="color: #8F9399">{{ personItem.education }}</span></div>
          </div>
          <div style="width: 262px; font-size: 14px; margin-left: 16px;">
            <div style="text-align: start;">
              职位: <span style="color: #8F9399">{{ personItem.position[0] }}</span></div>
            <div style="margin-top: 16px; text-align: start">
              在职工龄: <span style="color: #8F9399">{{ personItem.yearForWork }}</span></div>
            <div style="margin-top: 16px; text-align: start">
              连续工龄: <span style="color: #8F9399">{{ personItem.yearInCompany }}</span></div>
          </div>
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
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-095b2db945e2d3e0644ccbb26eab8ed8_hd.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613631322&t=81de6352bc510f6314f05e20ad16fc44',
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
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201412%2F15%2F20141215151225_kQSkZ.thumb.700_0.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613631322&t=cf4dcf10f4123c9c47399a3f8ef084ac',
          en_name: 'Kunyu',
          zh_name: '于坤',
          gender: '女',
          birthday: 'xxxx-xx-xx',
          education: '硕士',
          position: ['太江集团负责人'],
          yearForWork: 'xx',
          yearInCompany: 'xx',
        },
        {
          id: 3,
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3351113425,3755484207&fm=26&gp=0.jpg',
          en_name: 'Three',
          zh_name: '张思睿',
          gender: '女',
          birthday: '1921-07-01',
          education: '本科',
          position: ['张家屯李家沟王家庄保安队长'],
          yearForWork: '40年01月',
          yearInCompany: '10年09月',
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

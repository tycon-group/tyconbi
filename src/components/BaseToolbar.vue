<template>
  <a-input-group style="display: flex; justify-content: start">
    <!--          输入财年-->
    <a-input v-model:value="value1" style="width: 120px;" maxlength="4" addon-after="财年"/>
    <!--          选择年度 -->
    <a-select
      v-model:value="value2"
      style="width: 120px; margin-left: 24px"
    >
      <a-select-option
        v-for="selectItem in dataResources"
        :key="selectItem.name"
        :value="selectItem.value">
        {{ selectItem.name }}
      </a-select-option>
    </a-select>
  </a-input-group>
</template>

<script>

export default {
  name: 'base-toolbar',
  components: {
  },
  data() {
    return {
      fiscal_year: '',
      value1: '',
      value2: '',
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
  created() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    if (month >= 4 && month <= 12) {
      this.fiscal_year = year;
    } else {
      this.fiscal_year = year - 1;
    }
    this.value1 = this.fiscal_year;
    console.log(this.fiscal_year);
  },
};
</script>

<style scoped>

</style>

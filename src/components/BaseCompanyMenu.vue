<template>
  <div>
    <a-tree-select
      v-model:value="value"
      showSearch
      style="width: 100%"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="treeData"
      placeholder="请选择需要查看的组织"
      :replace-fields="{ title: 'name', key: 'id', value: 'id', children: 'child' }"
      @change="tsChange"
      @select="tsSelect"
      treeNodeFilterProp="title"
    >
    </a-tree-select>
  </div>
</template>

<script>
export default {
  name: 'base-company-menu',
  data() {
    return {
      value: undefined,
      treeData: [],
      empIDCom: '',
    };
  },
  watch: {
    value(value) {
      const url = `https://tyconcps.cn:4399/hr/employees/?organization=${value}`;
      this.$http.get(url)
        .then((res) => {
          this.empData = res.data.data;
          console.log(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.empIDCom = 'A00074';
    setTimeout(() => {
      const url = `https://tyconcps.cn:4399/hr/listOrgAndEmp?empID=${this.empIDCom}`;
      this.$http.get(url)
        .then((res) => {
          this.treeData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
  },
};
</script>

<style>
/*不定义定义滑块，则为隐藏*/
/**设置滚动条的样式**/
::-webkit-scrollbar{
  width:10px;
  height:20px;
}
/**滚动槽**/
::-webkit-scrollbar-track{
  box-shadow:inset 0 0 3px #dcdcdc;
  border-radius:10px;
}
</style>

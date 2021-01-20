<template>
  <a-table
    size="small"
    :pagination="false"
    :columns="columns"
    :data-source="datas"
    :scroll="{ y: 200 }"/>
</template>

<script>

export default {
  name: 'base-law-plot',
  data() {
    return {
      datas: [],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '时间',
          dataIndex: 'time',
          defaultSortOrder: 'descend',
          // eslint-disable-next-line no-undef
          sorter: (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
        },
        {
          title: '颁发单位',
          dataIndex: 'dept',
          sorter: (a, b) => a.dept.length - b.dept.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: '事件简介',
          dataIndex: 'info',
          sorter: (a, b) => a.info.length - b.info.length,
          sortDirections: ['descend', 'ascend'],
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.datas = [
        {
          key: '1',
          name: '某某',
          time: '2020-01-12',
          dept: '总裁办',
          info: '使用脚本程序，违规领取公司的月饼。',
        },
        {
          key: '2',
          name: '某某',
          time: '2020-12-12',
          dept: '党支部',
          info: '收到浦江镇党委的嘉奖。',
        },
      ];
    }, 200);
  },
};
</script>

<style scoped>

</style>

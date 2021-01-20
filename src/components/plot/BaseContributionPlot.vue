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
  name: 'base-contribution-plot',
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
          name: 'XX',
          time: '2019-05-10',
          dept: '总裁办',
          info: '签下2亿大单，创下本公司单笔订单最高记录。',
        },
        {
          key: '2',
          name: 'XX',
          time: '2019-12-10',
          dept: '总裁办',
          info: '签下5亿大单，创下本公司单笔订单最高记录。',
        },
        {
          key: '3',
          name: 'XX',
          time: '2020-03-10',
          dept: '总裁办',
          info: '签下10亿大单，创下本公司单笔订单记录。',
        },
        {
          key: '4',
          name: 'XX',
          time: '2020-08-08',
          dept: '总裁办',
          info: '成功中标园区地块，让太江集团有了自己的第一个园区。',
        },
        {
          key: '5',
          name: 'XX',
          time: '2020-12-10',
          dept: '总裁办',
          info: '成功升级为一级建筑单位。',
        },
      ];
    }, 200);
  },
};
</script>

<style scoped>

</style>

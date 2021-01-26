<template>
  <div style="text-align: start; width: 228px">
    <a-input-search style="margin-bottom: 8px" placeholder="Search" @change="onChange" />
    <a-tree
      :expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      :tree-data="gData"
      blockNode="true"
      @expand="onExpand"
      @select="onSelect"
    >
      <template #title="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #0080CC">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </template>
    </a-tree>
  </div>
</template>

<script>
import api from '../api';

const dataList = [];
const generateList = (data) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};

const getParentKey = (key, tree) => {
  let parentKey;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
export default {
  name: 'base-company-menu',
  data() {
    return {
      expandedKeys: [],
      gData: [],
      searchValue: '',
      autoExpandParent: true,
    };
  },
  methods: {
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onChange(e) {
      const { value } = e.target;
      const expandedKeys = dataList
        .map((item) => {
          if (item.title.indexOf(value) > -1) {
            return getParentKey(item.key, this.gData);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true,
      });
    },
    onSelect(selectedKeys, info) {
      this.$store.commit('updatePickOrgDataID', info.selectedNodes[0].props.data_id);
      console.log(this.$store.state.pickOrgDataID);
    },
  },
  created() {
    if (this.$store.state.empID !== '') {
      api.hr.getOrgTree(this.$store.state.empID).then((res) => {
        console.log(res.data.data);
        this.gData = res.data.data;
        generateList(this.gData);
      }).catch((error) => {
        console.log(error);
      });
    }
  },
};
</script>

<style>

</style>

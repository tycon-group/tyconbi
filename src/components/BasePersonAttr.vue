<template>
  <div style="width: 100%;">
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px', width: '100%',}"
      v-model:value="this.nameValue"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane v-for="personItem in personData"
                  :key="personItem.name" :tab="personItem.name">
        {{ personItem.name }}
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
          name: '蒋玲玲',
        },
        {
          id: 2,
          name: '于坤',
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

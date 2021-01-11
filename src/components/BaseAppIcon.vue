<template>
  <div style="width: 55px;
                    height: 55px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 32px;">
    <div style="position: absolute;" v-if="path">
      <img style="width: 50px; height: 50px;" :src="path"/>
    </div>
    <img src="../assets/octo_gary.png"
         style="width: 60px; height: 60px;" v-if="!path"/>
    <img src="../assets/octo_white.png"
         style="width: 60px; height: 60px;" v-else>
  </div>
</template>

<script>
export default {
  name: 'base-app-icon',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>

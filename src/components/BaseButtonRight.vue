<template>
  <div>
    <a-button block="true"
              style="font-size: 12px"
              type="default">
      <slot>Right</slot>
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'base-button-right',
};
</script>

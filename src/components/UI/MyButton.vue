<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
}
</script>
<style lang="scss" scoped>
.btn {
  height: 40px;
  padding: 0 15px;
  background: none;
  border: 1px solid teal;
  outline: none;
  cursor: pointer;

  &-square {
    width: 40px;
    padding: 0;
  }
}
</style>
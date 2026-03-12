<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.page {
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: 1024px) {
    display: block;
  }
}
</style>
<template>
  <div class="basket-list">
    <BasketItem v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue';

export default {
  components: {
    BasketItem
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>